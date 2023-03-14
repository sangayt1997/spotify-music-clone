import React from 'react';
import Box from "@mui/material/Box";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";

function App() {
    return (
        <Box sx={{backgroundColor: '#212121'}}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </Box>
    );
}

export default App;
