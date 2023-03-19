import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import spotifyBlackLogo from "../../assets/logo/spotify_black_logo.png";

interface AlbumHeaderProps {

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
                <Box display="flex" flexDirection="column" alignSelf="flex-end">
                    <p>Playlist</p>
                    <h1>This is Sia</h1>
                    <p>This is Sia. The essential tracks, all in one playlist.</p>
                    <Stack　direction="row" alignItems="center">
                        <img
                            src={spotifyBlackLogo}
                            alt="album logo"
                            width="30"
                            height="30"
                        />
                        <p>Spotify.</p>
                        <p>1,302,032 likes. 50 songs,</p>
                        <p>about 2 hr 45 min</p>
                    </Stack>
                </Box>
            </Stack>
            <p>djasdnsad</p>
        </Stack>
    );
}


export default AlbumHeader;
