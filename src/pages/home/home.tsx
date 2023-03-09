import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Card, CardContent } from "../../shared/styles/components.style";
import musicAlbum from "../../asset/images/music_album_banner.jpg";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { Fab } from "@mui/material";

const Home = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const playBtnHandler = () => {
        setIsPlaying(true);
    }

    const pauseBtnHandler = () => {
        setIsPlaying(false);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <Card>
                <Box className="image-wrapper">
                    <img src={musicAlbum} alt="music album"/>
                    <Box className="show-fab" position="absolute" bottom={12} right={12}>
                        <Fab
                            color="primary"
                            size="medium"
                            onClick={isPlaying ? pauseBtnHandler : playBtnHandler}
                        >
                            {isPlaying ? (
                                <PauseIcon
                                    sx={{
                                        height: 30,
                                        width: 30,
                                        color: "black"
                                    }}
                                />
                            ) : (
                                <PlayArrowIcon
                                    sx={{
                                        height: 30,
                                        width: 30,
                                        color: "black"
                                    }}
                                />
                            )}
                        </Fab>
                    </Box>
                </Box>
                <CardContent>
                    <h2>fnsdfnnsfdfdjsn</h2>
                    <p>Sam Smith, Adele, Shawn Mendes and more Sam Smith, Adele, Shawn Mendes and more</p>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Home;
