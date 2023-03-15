import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SpProgressLoader from "../shared/progress-loader/progress-loader";
import Dashboard from "../pages/dashboard/dashboard";
import Search from "../pages/search/search";
import YourLibrary from "../pages/your-library/your-library";
import CreatePlaylist from "../pages/create-playlist/create-playlist";
import LikedSongs from "../pages/liked-songs/liked-songs";
import MyPlaylist from "../pages/my-playlist/my-playlist";
import TopSongGlobal from "../pages/top-songs-global/top-song-global";

const Home = lazy(() => import('../pages/home/home'));

const Navigation = () => {
    return (
        <Suspense fallback={<SpProgressLoader/>}>
            <Router>
                <Routes>
                    <Route element={<Dashboard/>}>
                        <Route path='/' element={<Home/>}/>
                        <Route path="/search" element={<Search/>}/>
                        <Route path="/your-library" element={<YourLibrary/>}/>
                        <Route path="/create-playlist" element={<CreatePlaylist/>}/>
                        <Route path="/liked-songs" element={<LikedSongs/>}/>
                        <Route path="/my-playlist" element={<MyPlaylist/>}/>
                        <Route path="/top-song-global" element={<TopSongGlobal/>}/>
                    </Route>
                </Routes>
            </Router>
        </Suspense>
    )
}

export default Navigation;
