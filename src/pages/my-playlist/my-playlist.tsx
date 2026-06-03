import React from "react";
import { Link } from "react-router-dom";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { 
  MyPlaylistContainer,
  PageHeader,
  PlaylistImage,
  PlaylistInfo,
  ActionBar,
  PlayButton,
  ShuffleButton,
  EmptyState,
  Button
} from "./styles/my-playlist.style";

const MyPlaylist: React.FC = () => {
    // For now, showing an empty state since this is mock data
    const hasPlaylist = true; // Set to false to show empty state

    if (!hasPlaylist) {
        return (
            <MyPlaylistContainer>
                <EmptyState>
                    <PlaylistPlayIcon />
                    <h3>Find your playlist</h3>
                    <p>Create a playlist to start building your personal collection of music.</p>
                    <Link to="/create-playlist" style={{ marginTop: '24px' }}>
                        <Button>Create Playlist</Button>
                    </Link>
                </EmptyState>
            </MyPlaylistContainer>
        );
    }

    return (
        <MyPlaylistContainer>
            <PageHeader>
                <PlaylistImage>
                    <PlaylistPlayIcon />
                </PlaylistImage>
                <PlaylistInfo>
                    <span className="type">Playlist</span>
                    <h1>My Playlist #1</h1>
                    <p className="description">Your personal playlist</p>
                    <p className="meta">
                        <span>Spotify</span> • 0 songs
                    </p>
                </PlaylistInfo>
            </PageHeader>

            <ActionBar>
                <PlayButton>
                    <PlayArrowIcon />
                </PlayButton>
                <ShuffleButton>
                    <ShuffleIcon />
                </ShuffleButton>
            </ActionBar>
        </MyPlaylistContainer>
    );
}

export default MyPlaylist;
