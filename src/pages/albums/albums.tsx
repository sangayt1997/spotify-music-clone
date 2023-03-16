import React from "react";
import Box from "@mui/material/Box";
import AlbumsTable from "../../components/albums-table/albums-table";

const Albums = () => {

    return (
        <Box sx={{display: 'flex'}}>
            <AlbumsTable />
        </Box>
    );
}

export default Albums;
