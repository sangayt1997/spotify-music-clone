import React from 'react';
import Box from "@mui/material/Box";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
    return (
        <Box sx={{minHeight: '100vh', backgroundColor: '#212121'}}>
            {/*<RouterProvider router={router}/>*/}
            <Dashboard />
        </Box>
    );
}

export default App;
