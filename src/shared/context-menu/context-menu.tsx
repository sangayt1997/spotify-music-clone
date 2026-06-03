import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveFromQueueIcon from '@mui/icons-material/RemoveFromQueue';
import ShareIcon from '@mui/icons-material/Share';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { Song } from '../../types/music';

interface ContextMenuProps {
    song: Song | null;
    position: { x: number; y: number };
    onClose: () => void;
    onPlayNext: (song: Song) => void;
    onAddToQueue: (song: Song) => void;
    onRemoveFromQueue: (songId: string) => void;
    onAddToPlaylist: (song: Song) => void;
    onShare: (song: Song) => void;
    isInQueue: boolean;
}

const ContextMenu: React.FC<ContextMenuProps> = ({
    song,
    position,
    onClose,
    onPlayNext,
    onAddToQueue,
    onRemoveFromQueue,
    onAddToPlaylist,
    onShare,
    isInQueue
}) => {
    const menuRef = useRef<HTMLDivElement>(null);
    const [adjustedPosition, setAdjustedPosition] = useState(position);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                onClose();
            }
        };

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    useEffect(() => {
        if (menuRef.current) {
            const rect = menuRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            let newX = position.x;
            let newY = position.y;

            if (position.x + rect.width > viewportWidth) {
                newX = viewportWidth - rect.width - 10;
            }

            if (position.y + rect.height > viewportHeight) {
                newY = viewportHeight - rect.height - 10;
            }

            setAdjustedPosition({ x: newX, y: newY });
        }
    }, [position]);

    if (!song) return null;

    const handlePlayNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        onPlayNext(song);
        onClose();
    };

    const handleAddToQueue = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isInQueue) {
            onRemoveFromQueue(song.id);
        } else {
            onAddToQueue(song);
        }
        onClose();
    };

    const handleAddToPlaylist = (e: React.MouseEvent) => {
        e.stopPropagation();
        onAddToPlaylist(song);
        onClose();
    };

    const handleShare = (e: React.MouseEvent) => {
        e.stopPropagation();
        onShare(song);
        onClose();
    };

    return (
        <Box
            ref={menuRef}
            sx={{
                position: 'fixed',
                top: adjustedPosition.y,
                left: adjustedPosition.x,
                width: 240,
                bgcolor: '#282828',
                borderRadius: '4px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
                zIndex: 2000,
                overflow: 'hidden',
                animation: 'fadeIn 0.1s ease',
                '@keyframes fadeIn': {
                    from: { opacity: 0, transform: 'scale(0.95)' },
                    to: { opacity: 1, transform: 'scale(1)' }
                }
            }}
        >
            <List sx={{ py: 0 }}>
                <ListItem disablePadding>
                    <ListItemButton onClick={handlePlayNext} sx={{ py: 1.5 }}>
                        <ListItemIcon sx={{ minWidth: 40, color: '#fff' }}>
                            <PlayArrowIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                            primary="Play Next" 
                            primaryTypographyProps={{ fontSize: 14, color: '#fff' }}
                        />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton onClick={handleAddToQueue} sx={{ py: 1.5 }}>
                        <ListItemIcon sx={{ minWidth: 40, color: '#fff' }}>
                            {isInQueue ? <RemoveFromQueueIcon fontSize="small" /> : <QueueMusicIcon fontSize="small" />}
                        </ListItemIcon>
                        <ListItemText 
                            primary={isInQueue ? "Remove from Queue" : "Add to Queue"} 
                            primaryTypographyProps={{ fontSize: 14, color: '#fff' }}
                        />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton onClick={handleAddToPlaylist} sx={{ py: 1.5 }}>
                        <ListItemIcon sx={{ minWidth: 40, color: '#fff' }}>
                            <PlaylistAddIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                            primary="Add to Playlist" 
                            primaryTypographyProps={{ fontSize: 14, color: '#fff' }}
                        />
                    </ListItemButton>
                </ListItem>

                <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

                <ListItem disablePadding>
                    <ListItemButton onClick={handleShare} sx={{ py: 1.5 }}>
                        <ListItemIcon sx={{ minWidth: 40, color: '#fff' }}>
                            <ShareIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                            primary="Share" 
                            primaryTypographyProps={{ fontSize: 14, color: '#fff' }}
                        />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton sx={{ py: 1.5 }}>
                        <ListItemIcon sx={{ minWidth: 40, color: '#fff' }}>
                            <OpenInNewIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                            primary="Go to Album" 
                            primaryTypographyProps={{ fontSize: 14, color: '#fff' }}
                        />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton sx={{ py: 1.5 }}>
                        <ListItemIcon sx={{ minWidth: 40, color: '#fff' }}>
                            <PlaylistPlayIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                            primary="Go to Artist" 
                            primaryTypographyProps={{ fontSize: 14, color: '#fff' }}
                        />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
};

export default ContextMenu;
