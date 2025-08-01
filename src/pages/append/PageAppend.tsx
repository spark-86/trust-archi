import {
    Autocomplete,
    Box,
    Button,
    Card,
    CardContent,
    Checkbox,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import Footer from "../../widgets/Footer";
import Header from "../../widgets/Header";
import { useState, type FormEvent } from "react";
import { DefaultRhex, type Rhex } from "../../models/Rhex";
import { useKey } from "../../hooks/useKey";
import canonicalize from "canonicalize";
import axios from "axios";
import sodium from "libsodium-wrappers-sumo";
import RhexViewer from "../../widgets/RhexViewer";

const PageAppend = () => {
    const [workingRhex, setWorkingRhex] = useState<Rhex>(DefaultRhex);
    const [host, setHost] = useState<string>("");
    const [port, setPort] = useState<string>("");
    const [dataString, setDataString] = useState<string>("");
    const [keyString, setKeyString] = useState<string>("");
    const [outputString, setOutputString] = useState<string>("");
    const [rhex, setRhex] = useState<Rhex[]>([]);
    const [viewSigned, setViewSigned] = useState<boolean>(false);
    const [publicKey, setPublicKey] = useState<string>("");
    const [privateKey, setPrivateKey] = useState<string>("");
    const [hidePrivate, setHidePrivate] = useState<boolean>(true);
    const [protocol, setProtocol] = useState<string>("https:");

    const { sign, publicFromPrivate } = useKey();

    const convertStringToData = (dString: string) => {
        return JSON.parse(dString);
    };

    const generateKeys = async () => {
        await sodium.ready;
        const keyPair = sodium.crypto_sign_keypair();
        setPublicKey(sodium.to_base64(keyPair.publicKey));
        setPrivateKey(sodium.to_base64(keyPair.privateKey));
        setKeyString(sodium.to_base64(keyPair.privateKey));
    };

    const handleSubmit = async (event: FormEvent) => {
        await sodium.ready;
        event.preventDefault();
        setOutputString("");
        setRhex([]);
        const fingerprint = await publicFromPrivate(keyString);
        const sendingRec = {
            ...workingRhex,
            scope: workingRhex.scope ?? "",
            nonce: sodium.to_base64(sodium.randombytes_buf(32)),
            data: convertStringToData(dataString),
        };
        console.dir(sendingRec, { depth: null });
        const signature = await sign(canonicalize(sendingRec) ?? "", keyString);
        console.log(signature);
        if (viewSigned) {
            setOutputString(
                JSON.stringify(
                    {
                        ...sendingRec,
                        signatures: [
                            {
                                fingerprint,
                                type: "owner",
                                signature,
                            },
                        ],
                    },
                    null,
                    2
                )
            );
            return;
        }
        axios
            .post(`${protocol}//${host}:${port}/append`, {
                ...sendingRec,
                signatures: [
                    {
                        fingerprint,
                        type: "owner",
                        signature,
                    },
                ],
            })
            .then((res) => {
                console.log(res.data);
                if (Array.isArray(res.data.data))
                    setRhex(res.data.data as Rhex[]);
                else if (res.data.data)
                    setOutputString(JSON.stringify(res.data, null, 2));
            })
            .catch((err) => {
                console.log(err);
                setOutputString(JSON.stringify(err, null, 2));
            });
    };

    const handleRhexChange = (key: keyof Rhex, value: string) => {
        setWorkingRhex({
            ...workingRhex,
            [key]: value,
        });
    };

    return (
        <>
            <Header />
            <Card sx={{ m: 4, p: 4, mx: "auto", maxWidth: 900 }} elevation={4}>
                <CardContent>
                    <Typography variant="body1">
                        <Box component="form" onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid size={12}>
                                    <Typography
                                        variant="h4"
                                        component="h1"
                                        gutterBottom
                                    >
                                        Append New Record
                                    </Typography>
                                    <Typography variant="body1">
                                        Use the form below to append a new
                                        record to the system. To view a scope,
                                        submit a record with Record Type of
                                        "request" and the desired scope, or
                                        blank for the root.
                                    </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="body1">
                                        <strong>Public Key:</strong>
                                    </Typography>
                                    <Typography variant="body1">
                                        {publicKey}
                                    </Typography>
                                    <Typography variant="body1">
                                        <strong>Private Key:</strong>
                                    </Typography>
                                    <Typography variant="body1">
                                        {!hidePrivate && <>{privateKey}</>}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        onClick={() =>
                                            setHidePrivate(!hidePrivate)
                                        }
                                        sx={{ mr: 1 }}
                                    >
                                        {hidePrivate ? "Show" : "Hide"}
                                    </Button>
                                    <Button
                                        variant="contained"
                                        onClick={generateKeys}
                                    >
                                        Generate Keys
                                    </Button>
                                </Grid>
                                <Grid size={12}>
                                    <Autocomplete
                                        options={["http:", "https:"].sort()}
                                        getOptionLabel={(option) => option}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Transport Protocol"
                                                required
                                            />
                                        )}
                                        onChange={(_, value) =>
                                            setProtocol(value ?? "")
                                        }
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 8 }}>
                                    <TextField
                                        required
                                        id="host"
                                        label="Host"
                                        fullWidth
                                        value={host}
                                        onChange={(event) =>
                                            setHost(event.target.value)
                                        }
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }}>
                                    <TextField
                                        required
                                        id="port"
                                        label="Port"
                                        fullWidth
                                        value={port}
                                        onChange={(event) =>
                                            setPort(event.target.value)
                                        }
                                    />
                                </Grid>
                                <Grid size={12}>
                                    <Autocomplete
                                        options={["v1"]}
                                        getOptionLabel={(option) => option}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Protocol"
                                                required
                                            />
                                        )}
                                        onChange={(_, value) =>
                                            handleRhexChange(
                                                "protocol",
                                                value ?? ""
                                            )
                                        }
                                    />
                                </Grid>
                                <Grid size={12}>
                                    <TextField
                                        id="scope"
                                        label="Scope"
                                        fullWidth
                                        value={workingRhex.scope}
                                        onChange={(event) =>
                                            handleRhexChange(
                                                "scope",
                                                event.target.value
                                            )
                                        }
                                    />
                                </Grid>
                                <Grid size={12}>
                                    <TextField
                                        required
                                        id="record_type"
                                        label="Record Type"
                                        fullWidth
                                        value={workingRhex.record_type}
                                        onChange={(event) =>
                                            handleRhexChange(
                                                "record_type",
                                                event.target.value
                                            )
                                        }
                                    />
                                </Grid>
                                <Grid size={12}>
                                    <TextField
                                        multiline
                                        rows={4}
                                        required
                                        id="data"
                                        label="Data (JSON Payload)"
                                        fullWidth
                                        value={dataString}
                                        onChange={(event) => {
                                            setDataString(event.target.value);
                                        }}
                                    />
                                </Grid>
                                <Grid size={12}>
                                    <TextField
                                        required
                                        type="password"
                                        id="key"
                                        label="Key"
                                        fullWidth
                                        value={keyString}
                                        onChange={(event) => {
                                            setKeyString(event.target.value);
                                        }}
                                        helperText="Key is never transmitted or stored. It is only held in your local browser memory. See the source code for more details"
                                    />
                                </Grid>
                                <Grid size={12}>
                                    <Checkbox
                                        checked={viewSigned}
                                        onChange={() =>
                                            setViewSigned(!viewSigned)
                                        }
                                        sx={{
                                            color: "primary.main",
                                        }}
                                    />
                                    Do not submit, just view signed record
                                </Grid>
                                <Grid
                                    size={12}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                    }}
                                >
                                    <Button type="submit" variant="contained">
                                        Submit R⬢
                                    </Button>
                                </Grid>
                                <Grid size={12}>
                                    {rhex.length === 0 && (
                                        <Typography variant="body1">
                                            <strong>No Records:</strong>
                                        </Typography>
                                    )}
                                    {rhex.length > 0 && (
                                        <>
                                            <Typography variant="body1">
                                                <strong>Records:</strong>
                                            </Typography>
                                            {rhex.map((r) => (
                                                <RhexViewer rhex={r} />
                                            ))}
                                        </>
                                    )}
                                </Grid>
                                {outputString && (
                                    <Grid size={12}>
                                        <Typography variant="body1">
                                            <strong>Output:</strong>
                                        </Typography>
                                        <Typography variant="body1">
                                            <pre>{outputString}</pre>
                                        </Typography>
                                    </Grid>
                                )}
                            </Grid>
                        </Box>
                    </Typography>
                </CardContent>
            </Card>
            <Footer />
        </>
    );
};

export default PageAppend;
