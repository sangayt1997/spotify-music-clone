import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SpProgressLoader from "../shared/progress-loader/progress-loader";
import Dashboard from "../pages/dashboard/dashboard";

const Home = lazy(() => import('../pages/home/home'));
const Search = lazy(() => import('../pages/search/search'));
const YourLibrary = lazy(() => import('../pages/your-library/your-library'));
const CreatePlaylist = lazy(() => import('../pages/create-playlist/create-playlist'));
const LikedSongs = lazy(() => import('../pages/liked-songs/liked-songs'));
const MyPlaylist = lazy(() => import('../pages/my-playlist/my-playlist'));
const TopSongGlobal = lazy(() => import('../pages/top-songs-global/top-song-global'));

const Router = () => {
    return (
        <Suspense fallback={<SpProgressLoader />}>
            <Routes>
                <Route element={<Dashboard/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/search" element={<Search/>}/>
                    <Route path="/your-library" element={<YourLibrary/>}/>
                    <Route path="/create-playlist" element={<CreatePlaylist/>}/>
                    <Route path="/liked-songs" element={<LikedSongs/>}/>
                    <Route path="/my-playlist" element={<MyPlaylist/>}/>
                    <Route path="/top-song-global" element={<TopSongGlobal/>}/>
                </Route>
            </Routes>
        </Suspense>
    )
}

export default Router;
