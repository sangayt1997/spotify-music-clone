import React from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { AlbumsTableContainer } from "./styles/ablums-table.style";
import Stack from "@mui/material/Stack";
import ScheduleIcon from '@mui/icons-material/Schedule';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const AlbumsTable = () => {
    const rows = [
        {
            id: 1,
            albumImage: 'https://res.cloudinary.com/dsim60jne/image/upload/v1678884847/spotify-clone/listening_vibe_music_fjzqxl.webp',
            title: 'Run',
            artist: 'OneRepublic',
            album: 'Run',
            dateAdded: '1 week ago',
            duration: '2:49'
        },
        {
            id: 3,
            albumImage: 'https://res.cloudinary.com/dsim60jne/image/upload/v1678884961/spotify-clone/red_girl_cwefa0.webp',
            title: 'Run',
            artist: 'OneRepublic',
            album: 'Run',
            dateAdded: '1 week ago',
            duration: '2:49'
        },
        {
            id: 4,
            albumImage: 'https://res.cloudinary.com/dsim60jne/image/upload/v1678884897/spotify-clone/music_album_banner_m6is6d.webp',
            title: 'Run',
            artist: 'OneRepublic',
            album: 'Run',
            dateAdded: '1 week ago',
            duration: '2:49'
        },
        {
            id: 5,
            albumImage: 'https://res.cloudinary.com/dsim60jne/image/upload/v1678885024/spotify-clone/vibe_music_jcfe9r.webp',
            title: 'Run',
            artist: 'OneRepublic',
            album: 'Run',
            dateAdded: '1 week ago',
            duration: '2:49'
        },
        {
            id: 6,
            albumImage: 'https://res.cloudinary.com/dsim60jne/image/upload/v1678884764/spotify-clone/joyful_melody_l9bbpd.webp',
            title: 'Run',
            artist: 'OneRepublic',
            album: 'Run',
            dateAdded: '1 week ago',
            duration: '2:49'
        },
        {
            id: 7,
            albumImage: 'https://res.cloudinary.com/dsim60jne/image/upload/v1678884665/spotify-clone/guy_music_eatj4r.webp',
            title: 'Run',
            artist: 'OneRepublic',
            album: 'Run',
            dateAdded: '1 week ago',
            duration: '2:49'
        },
        {
            id: 8,
            albumImage: 'https://res.cloudinary.com/dsim60jne/image/upload/v1678884847/spotify-clone/listening_vibe_music_fjzqxl.webp',
            title: 'Run',
            artist: 'OneRepublic',
            album: 'Run',
            dateAdded: '1 week ago',
            duration: '2:49'
        },
        {
            id: 9,
            albumImage: 'https://res.cloudinary.com/dsim60jne/image/upload/v1678884961/spotify-clone/red_girl_cwefa0.webp',
            title: 'Run',
            artist: 'OneRepublic',
            album: 'Run',
            dateAdded: '1 week ago',
            duration: '2:49'
        },
        {
            id: 10,
            albumImage: 'https://res.cloudinary.com/dsim60jne/image/upload/v1678884764/spotify-clone/joyful_melody_l9bbpd.webp',
            title: 'Run',
            artist: 'OneRepublic',
            album: 'Run',
            dateAdded: '1 week ago',
            duration: '2:49'
        },
        {
            id: 11,
            albumImage: 'https://res.cloudinary.com/dsim60jne/image/upload/v1678884665/spotify-clone/guy_music_eatj4r.webp',
            title: 'Run',
            artist: 'OneRepublic',
            album: 'Run',
            dateAdded: '1 week ago',
            duration: '2:49'
        },
        {
            id: 12,
            albumImage: 'https://res.cloudinary.com/dsim60jne/image/upload/v1678884847/spotify-clone/listening_vibe_music_fjzqxl.webp',
            title: 'Run',
            artist: 'OneRepublic',
            album: 'Run',
            dateAdded: '1 week ago',
            duration: '2:49'
        },
        {
            id: 13,
            albumImage: 'https://res.cloudinary.com/dsim60jne/image/upload/v1678884961/spotify-clone/red_girl_cwefa0.webp',
            title: 'Run',
            artist: 'OneRepublic',
            album: 'Run',
            dateAdded: '1 week ago',
            duration: '2:49'
        },
    ];

    return (
        <AlbumsTableContainer>
            <Table>
                <TableHead>
                    <TableRow className="none-border">
                        <TableCell className="color--gray">#</TableCell>
                        <TableCell className="color--gray">Title</TableCell>
                        <TableCell className="color--gray">Album</TableCell>
                        <TableCell className="color--gray">Date Added</TableCell>
                        <TableCell className="color--gray">
                            <ScheduleIcon fontSize="small"/>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((item, index) => (
                        <TableRow
                            key={item.id}
                        >
                            <TableCell>{item.id}</TableCell>
                            <TableCell>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <img width="40" height="40" src={item.albumImage} alt="album"/>
                                    <Stack>
                                        <Link to="/:id" className="fs-16">{item.title}</Link>
                                        <Link to="/:id" className="artist-title">{item.artist}</Link>
                                    </Stack>
                                </Stack>
                            </TableCell>
                            <TableCell>
                                <Link to="/:id" className="album-title">
                                    {item.album}
                                </Link>
                            </TableCell>
                            <TableCell className="color--gray">{item.dateAdded}</TableCell>
                            <TableCell>
                                <Stack direction="row" alignItems="center" spacing={7}>
                                    <FavoriteBorderOutlinedIcon fontSize="small" className="color--gray"/>
                                    <Stack direction="row" alignItems="center" spacing={3}>
                                        <p className="color--gray">{item.duration}</p>
                                        <MoreHorizOutlinedIcon fontSize="small"/>
                                    </Stack>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </AlbumsTableContainer>
    );
}

export default AlbumsTable;
