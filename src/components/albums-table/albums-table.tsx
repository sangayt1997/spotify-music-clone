import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { AlbumsTableContainer } from "./styles/ablums-table.style";

const AlbumsTable = () => {
    const rows = [
        {
            id: 1,
            title: 'Run',
            album: 'Run',
            dateAdded: '1 week ago',
            duration: '2:49'
        },
        {
            id: 3,
            title: 'Run',
            album: 'Run',
            dateAdded: '1 week ago',
            duration: '2:49'
        },
        {
            id: 4,
            title: 'Run',
            album: 'Run',
            dateAdded: '1 week ago',
            duration: '2:49'
        },
        {
            id: 5,
            title: 'Run',
            album: 'Run',
            dateAdded: '1 week ago',
            duration: '2:49'
        },
        {
            id: 6,
            title: 'Run',
            album: 'Run',
            dateAdded: '1 week ago',
            duration: '2:49'
        },
        {
            id: 7,
            title: 'Run',
            album: 'Run',
            dateAdded: '1 week ago',
            duration: '2:49'
        },
        {
            id: 8,
            title: 'Run',
            album: 'Run',
            dateAdded: '1 week ago',
            duration: '2:49'
        },
        {
            id: 9,
            title: 'Run',
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
                        <TableCell>#</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Album</TableCell>
                        <TableCell>Date Added</TableCell>
                        <TableCell>music duration icon</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((item, index) => (
                        <TableRow
                            key={item.id}
                        >
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.title}</TableCell>
                            <TableCell>{item.album}</TableCell>
                            <TableCell>{item.dateAdded}</TableCell>
                            <TableCell>{item.duration}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </AlbumsTableContainer>
    );
}

export default AlbumsTable;
