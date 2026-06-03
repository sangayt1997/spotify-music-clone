import React, { useState, useEffect } from "react";
import AlbumsTable from "../../components/albums-table/albums-table";
import AlbumHeader from "../../components/album-header/album-header";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Song } from "../../types/music";
import { fetchSongsByGenre, convertITunesTrackToSong } from "../../services/iTunesApi";

const Albums = () => {
    const [albumSongs, setAlbumSongs] = useState<Song[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadSongs = async () => {
            try {
                const songs = await fetchSongsByGenre('top hits 2024', 20);
                setAlbumSongs(songs.map((t, i) => convertITunesTrackToSong(t, i)));
            } catch (error) {
                console.error('Error loading album songs:', error);
            } finally {
                setLoading(false);
            }
        };
        loadSongs();
    }, []);

    if (loading) {
        return (
            <Box 
                display="flex" 
                justifyContent="center" 
                alignItems="center" 
                minHeight="50vh"
            >
                <CircularProgress color="primary" />
            </Box>
        );
    }

    const totalDuration = albumSongs.reduce((acc, song) => acc + song.duration, 0);
    const hours = Math.floor(totalDuration / 3600);
    const minutes = Math.floor((totalDuration % 3600) / 60);

    return (
        <Stack sx={{ display: 'flex' }}>
            <AlbumHeader
                albumCategories="Album"
                albumTitle={albumSongs[0]?.album.title || "Top Hits 2024"}
                albumDescription="The biggest hits of 2024 featuring your favorite artists."
                likes="1,234,567 likes"
                totalSong={`${albumSongs.length} songs`}
                songsDuration={`${hours > 0 ? hours + ' hr ' : ''}${minutes} min`}
                imageUrl={albumSongs[0]?.coverImage}
                songs={albumSongs}
            />
            <Box sx={{ px: 3, pb: 3 }}>
                <AlbumsTable songs={albumSongs} loading={false} />
            </Box>
        </Stack>
    );
}

export default Albums;
