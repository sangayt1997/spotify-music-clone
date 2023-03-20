import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import spotifyBlackLogo from "../../assets/logo/spotify_black_logo.png";
import { Link } from "react-router-dom";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Fab from "@mui/material/Fab";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

interface AlbumHeaderProps {
    albumCategories: string;
    albumTitle: string;
    albumDescription: string;

}

const AlbumHeader = (props: AlbumHeaderProps) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const playBtnHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setIsPlaying(true);
    }

    const pauseBtnHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setIsPlaying(false);
    };

    return (
        <Stack>
            <Stack direction="row" spacing={4}>
                <img
                    src="https://res.cloudinary.com/dsim60jne/image/upload/v1678884847/spotify-clone/listening_vibe_music_fjzqxl.webp"
                    alt="album header"
                    width="200"
                    height="200"
                />
                <Stack
                    display="flex"
                    flexDirection="column"
                    alignSelf="flex-end"
                >
                    <p className="fw-700 fs-14">{props.albumCategories}</p>
                    <h1 className="fs-96">{props.albumTitle}</h1>
                    <Stack className="fs-14">
                        <p>{props.albumDescription}</p>
                        <Stack direction="row" alignItems="center">
                            <img
                                src={spotifyBlackLogo}
                                alt="album logo"
                                width="30"
                                height="30"
                            />
                            <Link to="/" className="fw-700">Spotify.</Link>
                            <p>1,302,032 likes. 50 songs,</p>
                            <p className="color--gray">about 2 hr 45 min</p>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction="row" spacing={4} paddingY="32px" alignItems="center">
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
                <FavoriteBorderOutlinedIcon fontSize="large" className="color--gray"/>
                <MoreHorizOutlinedIcon fontSize="large" className="color--gray"/>
            </Stack>
        </Stack>
    );
}


export default AlbumHeader;
