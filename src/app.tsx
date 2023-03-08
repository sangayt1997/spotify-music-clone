import React from 'react';
import Box from "@mui/material/Box";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";

function App() {
    return (
        <Box sx={{minHeight: '100vh', backgroundColor: '#212121'}}>
           <BrowserRouter>
               <Router />
           </BrowserRouter>
        </Box>
    );
}

export default App;
