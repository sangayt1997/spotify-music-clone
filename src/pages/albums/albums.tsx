import React from "react";
import AlbumsTable from "../../components/albums-table/albums-table";
import AlbumHeader from "../../components/album-header/album-header";
import Stack from "@mui/material/Stack";

const Albums = () => {

    return (
        <Stack sx={{display: 'flex'}}>
            <AlbumHeader
                albumCategories="Playlist"
                albumTitle="This is Sia"
                albumDescription="This is Sia. The essential tracks, all in one playlist."
                likes="1,302,032 likes"
                totalSong="50 songs"
                songsDuration="2 hr 45 min"
            />
            <AlbumsTable />
        </Stack>
    );
}

export default Albums;
