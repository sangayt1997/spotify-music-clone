import React from "react";
import Stack from "@mui/material/Stack";
import spotifyBlackLogo from "../../assets/logo/spotify_black_logo.png";
import { Link } from "react-router-dom";

interface AlbumHeaderProps {
    albumCategories: string;
    albumTitle: string;
    albumDescription: string;

}

const AlbumHeader = (props: AlbumHeaderProps) => {
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
                    spacing={2}
                >
                    <p>{props.albumCategories}</p>
                    <h1>{props.albumTitle}</h1>
                    <Stack>
                        <p>{props.albumDescription}</p>
                        <Stack direction="row" alignItems="center">
                            <img
                                src={spotifyBlackLogo}
                                alt="album logo"
                                width="30"
                                height="30"
                            />
                            <Link to="/">Spotify.</Link>
                            <p>1,302,032 likes. 50 songs,</p>
                            <p>about 2 hr 45 min</p>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <p>djasdnsad</p>
        </Stack>
    );
}


export default AlbumHeader;
