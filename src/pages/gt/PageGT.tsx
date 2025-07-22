import { useEffect, useState } from "react";
import { Box, Typography, Paper, Container } from "@mui/material";

// Sidereal Turn length in milliseconds
const TURN_MS = 86164090;
const GENESIS_EPOCH = 1752941587614; // Replace with your actual Genesis ms epoch

const getFloatGT = (ms: number): number => {
    const delta = ms - GENESIS_EPOCH;
    if (delta < 0) return -1;
    return delta / TURN_MS;
};

function formatGtHuman(gtFloat: number): string {
    if (gtFloat < 0) return "GT[pre-genesis]";

    const totalTurns = Math.floor(gtFloat);
    const micromarks = Math.round((gtFloat - totalTurns) * 1_000_000_000);

    const sol = Math.floor(totalTurns / 365);
    const turnInSol = totalTurns % 365;

    const isDayOfTrust = turnInSol === 364;
    if (isDayOfTrust) {
        const marks = Math.floor(micromarks / 1_000_000);
        const submarks = Math.floor((micromarks % 1_000_000) / 1_000);
        return `GT[${sol}.D.T@${marks.toString().padStart(3, "0")}.${submarks
            .toString()
            .padStart(3, "0")}]`;
    }

    const luna = Math.floor(turnInSol / 28);
    const turn = turnInSol % 28;
    const marks = Math.floor(micromarks / 1_000_000);
    const submarks = Math.floor((micromarks % 1_000_000) / 1_000);

    return `GT[${sol}.${luna.toString().padStart(2, "0")}.${turn
        .toString()
        .padStart(2, "0")}@${marks.toString().padStart(3, "0")}.${submarks
        .toString()
        .padStart(3, "0")}]`;
}

// Format GT as GT[x.yyyyyyyyy]
function formatGenesisTime(ms: number): string {
    const delta = ms - GENESIS_EPOCH;
    if (delta < 0) return "GT[pre-genesis]";

    const gtFloat = delta / TURN_MS;
    return `GT[${gtFloat.toFixed(9)}]`;
}

const PageGT = () => {
    const [now, setNow] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setNow(Date.now()), 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <Container maxWidth="md" sx={{ mt: 6 }}>
            <Paper elevation={4} sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                    ⏳ GT Clock
                </Typography>

                <Box mt={2}>
                    <Typography variant="h4">
                        <strong>Genesis Time:</strong>{" "}
                        {formatGtHuman(getFloatGT(now))}
                    </Typography>
                    <Typography variant="body1">
                        <strong>GT Float:</strong> {formatGenesisTime(now)}
                    </Typography>
                    <Typography variant="body1">
                        <strong>UTC:</strong> {new Date(now).toUTCString()}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Unix:</strong> {now}
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
};

export default PageGT;
