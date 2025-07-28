import { useState } from "react";
import type { Rhex } from "../models/Rhex";
import { Box } from "@mui/material";

interface RhexProps {
    rhex: Rhex;
}

const Icons = [
    { name: "genesis", icon: "⏳" },
    { name: "key", icon: "🔑" },
    { name: "policy", icon: "📄" },
    { name: "scope", icon: "🟪" },
];

const parseRhex = (rhex: Rhex) => {
    switch (rhex.record_type) {
        case "core:note":
            return (
                <Box>
                    {(rhex.data.message as string)
                        .split("\n")
                        .map((line, index) => (
                            <Box key={index}>{line} </Box>
                        ))}
                </Box>
            );
    }
};

const RhexViewer = ({ rhex }: RhexProps) => {
    const [showDetails, setShowDetails] = useState<boolean>(false);

    return (
        <Box
            onClick={() => setShowDetails(!showDetails)}
            sx={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px 0",
                cursor: "pointer",
                "&:hover": {
                    backgroundColor: "lightgray",
                },
            }}
        >
            {/* Top Summary Line */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <span>
                    {
                        Icons.find(
                            (icon) =>
                                icon.name === rhex.record_type.split(":")[0]
                        )?.icon
                    }{" "}
                    {rhex.record_type.split(":")[1]} [{rhex.scope}]
                </span>
                <span>{showDetails ? "▾" : "▸"}</span>
            </Box>

            {/* Details (toggle visible) */}
            {showDetails && (
                <>
                    {rhex.record_type === "core:note" && parseRhex(rhex)}
                    <Box
                        sx={{
                            marginTop: "10px",
                            paddingLeft: "10px",
                            fontSize: "0.875rem",
                        }}
                    >
                        {Object.entries(rhex).map(([key, value]) => (
                            <Box key={key}>
                                <pre>
                                    <strong>{key}:</strong>{" "}
                                    {JSON.stringify(value, null, 2)}
                                </pre>
                            </Box>
                        ))}
                    </Box>
                </>
            )}
        </Box>
    );
};

export default RhexViewer;
