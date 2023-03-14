import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const SpProgressLoader = () => {

    return (
        <Box minHeight="100vh" display="flex" justifyContent="center" alignItems="center">
            <CircularProgress/>
        </Box>
    )
}

export default SpProgressLoader;
