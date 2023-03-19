import React from "react";
import AlbumsTable from "../../components/albums-table/albums-table";
import AlbumHeader from "../../components/album-header/album-header";
import Stack from "@mui/material/Stack";

const Albums = () => {

    return (
        <Stack sx={{display: 'flex'}} spacing={3}>
            <AlbumHeader
                albumCategories="Playlist"
                albumTitle="This is Sia"
                albumDescription="This is Sia. The essential tracks, all in one playlist."

            />
            <AlbumsTable />
        </Stack>
    );
}

export default Albums;
