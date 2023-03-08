import React from "react";
import Dashboard from "../pages/dashboard/dashboard";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Search from "../pages/search/search";
import YourLibrary from "../pages/your-library/your-library";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>}>
                <Route path="/home" element={<Home/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/your-library" element={<YourLibrary/>}/>
            </Route>
        </Routes>
    )
}

export default Router;
