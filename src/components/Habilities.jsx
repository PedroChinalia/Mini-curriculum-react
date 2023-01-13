import React from 'react';
import { Box, Typography, Avatar, Rating, Card } from '@mui/material';
import Formation from './Formation';

function Habilities() {
    return (
        <Card sx={{ paddingTop: 4 }}>
            <Typography sx={{ textAlign: "center", marginBottom: 5 }} variant="h6">Habilidades</Typography>
            <Box sx={{ marginBottom: 5 }}>
                <Box sx={{ display: "flex", marginBottom: 3 }}>
                    <Box sx={{ width: 150 }}>
                        <Typography sx={{ textAlign: "center" }}>HTML 5</Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Avatar
                                alt="HTML 5"
                                src={require("../assets/imgs/html.png")}
                                sx={{ width: 80, height: 80 }}
                            />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Rating name="read-only" value={5} readOnly />
                        </Box>
                    </Box>

                    <Box sx={{ width: 150 }}>
                        <Typography sx={{ textAlign: "center" }}>CSS 3</Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Avatar
                                alt="CSS 3"
                                src={require("../assets/imgs/css.png")}
                                sx={{ width: 80, height: 80 }}
                            />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Rating name="read-only" value={5} readOnly />
                        </Box>
                    </Box>

                    <Box sx={{ width: 150 }}>
                        <Typography sx={{ textAlign: "center" }}>Javascript</Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Avatar
                                alt="Javascript"
                                src={require("../assets/imgs/js.png")}
                                sx={{ width: 80, height: 80 }}
                            />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Rating name="read-only" value={5} readOnly />
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", marginBottom: 3 }}>
                    
                    <Box sx={{ width: 150 }}>
                        <Typography sx={{ textAlign: "center" }}>React</Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Avatar
                                alt="React"
                                src={require("../assets/imgs/react.png")}
                                sx={{ width: 80, height: 80 }}
                            />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                        </Box>
                    </Box>
                    
                    <Box sx={{ width: 150 }}>
                        <Typography sx={{ textAlign: "center" }}>Typescript</Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Avatar
                                alt="Typescript"
                                src={require("../assets/imgs/ts.png")}
                                sx={{ width: 80, height: 80 }}
                            />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                        </Box>
                    </Box>

                    <Box sx={{ width: 150 }}>
                        <Typography sx={{ textAlign: "center" }}>Node</Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Avatar
                                alt="Node"
                                src={require("../assets/imgs/node.png")}
                                sx={{ width: 80, height: 80 }}
                            />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Rating name="read-only" value={4} readOnly />
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", marginBottom: 3 }}>
                    <Box sx={{ width: 150 }}>
                        <Typography sx={{ textAlign: "center" }}>PHP</Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Avatar
                                alt="PHP"
                                src={require("../assets/imgs/php.png")}
                                sx={{ width: 80, height: 80 }}
                            />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Rating name="read-only" value={5} readOnly />
                        </Box>
                    </Box>

                    <Box sx={{ width: 150 }}>
                        <Typography sx={{ textAlign: "center" }}>Jquery</Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Avatar
                                alt="Jquery"
                                src={require("../assets/imgs/jquery.png")}
                                sx={{ width: 80, height: 80 }}
                            />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Rating name="read-only" value={5} readOnly />
                        </Box>
                    </Box>

                    <Box sx={{ width: 150 }}>
                        <Typography sx={{ textAlign: "center" }}>MySQL</Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Avatar
                                alt="MySQL"
                                src={require("../assets/imgs/sql.png")}
                                sx={{ width: 80, height: 80 }}
                            />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Rating name="read-only" value={5} readOnly />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Formation />
        </Card>
    );
}

export default Habilities;