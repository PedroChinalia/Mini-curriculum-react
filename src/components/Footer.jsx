import React from 'react';
import { Box, Typography, Avatar, Link } from '@mui/material';
import '../App.css';

function Footer() {
    return (
        <Box className="bg-color" sx={{ display: "flex", justifyContent: "center",  p: 3 }}>
            <Box sx={{ display: "flex" }}>
                <Typography sx={{ marginRight: 4, alignSelf: "center" }} variant="h6">Contato</Typography>
                <Link href="https://github.com/PedroChinalia" target="blank">
                    <Avatar
                        variant="rounded"
                        alt="GitHub"
                        src={require("../assets/imgs/git.png")}
                        sx={{ width: 50, height: 50, marginRight: 2 }}
                    />
                </Link>
                <Link href="https://www.linkedin.com/in/pedro-chinalia-7a8034205/" target="blank">
                    <Avatar
                        variant="rounded"
                        alt="LinkedIn"
                        src={require("../assets/imgs/linkedin.png")}
                        sx={{ width: 50, height: 50 }}
                    />
                </Link>
            </Box>
        </Box>
    );
}

export default Footer;