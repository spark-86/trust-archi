import {
    AppBar,
    Box,
    Link as MuiLink,
    Toolbar,
    Typography,
} from "@mui/material";

const Header = () => {
    return (
        <>
            <AppBar position="static" color="primary" elevation={4}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Trust Architecture
                    </Typography>
                    <Box>
                        <Typography variant="body1">
                            <MuiLink
                                href="/"
                                color="inherit"
                                underline="none"
                                sx={{ mx: 1 }}
                            >
                                Home
                            </MuiLink>
                            <MuiLink
                                href="/gt"
                                color="inherit"
                                underline="none"
                                sx={{ mx: 1 }}
                            >
                                Genesis Time
                            </MuiLink>
                            <MuiLink
                                href="/append"
                                color="inherit"
                                underline="none"
                                sx={{ mx: 1 }}
                            >
                                Append
                            </MuiLink>
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
