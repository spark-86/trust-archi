import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{ py: 3, textAlign: "center", mt: 8, color: "text.secondary" }}
        >
            <Typography variant="body2">
                &copy; {new Date().getFullYear()} Trust Architecture. Built by
                Veronica Hodo.
            </Typography>
        </Box>
    );
};

export default Footer;
