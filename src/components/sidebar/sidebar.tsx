import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarContainer, SidebarSection } from './styles/sidebar.style';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import spotifyLogo from '../../assets/logo/spotify_white_logo.png';

interface SidebarProps {
    width: number;
    isOpen: boolean;
    onToggle: () => void;
}

const mockPlaylists = [
    { id: '1', name: 'Discover Weekly' },
    { id: '2', name: 'Release Radar' },
    { id: '3', name: 'Chill Vibes' },
    { id: '4', name: 'Workout Mix' },
    { id: '5', name: 'Focus Flow' },
    { id: '6', name: 'Party Hits' },
    { id: '7', name: 'Late Night' },
    { id: '8', name: 'Morning Coffee' },
];

const Sidebar: React.FC<SidebarProps> = ({ width, isOpen }) => {
    const location = useLocation();
    
    const isActive = (path: string) => {
        if (path === '/') {
            return location.pathname === '/' || location.pathname.startsWith('/home');
        }
        return location.pathname.startsWith(path);
    };

    return (
        <SidebarContainer width={width} className={isOpen ? 'open' : 'closed'}>
            <div className="sidebar-content">
                <Link to="/" className="logo-link">
                    <img src={spotifyLogo} alt="Spotify" className="logo" />
                </Link>

                <SidebarSection>
                    <nav className="main-nav">
                        <Link 
                            to="/" 
                            className={`nav-item ${isActive('/') ? 'active' : ''}`}
                        >
                            <span className="icon">
                                {isActive('/') ? <HomeIcon /> : <HomeOutlinedIcon />}
                            </span>
                            <span className="label">Home</span>
                        </Link>
                        
                        <Link 
                            to="/search" 
                            className={`nav-item ${isActive('/search') ? 'active' : ''}`}
                        >
                            <span className="icon">
                                {isActive('/search') ? <SearchIcon /> : <SearchOutlinedIcon />}
                            </span>
                            <span className="label">Search</span>
                        </Link>
                    </nav>
                </SidebarSection>

                <SidebarSection className="library-section">
                    <div className="library-header">
                        <Link 
                            to="/your-library" 
                            className={`nav-item ${isActive('/your-library') ? 'active' : ''}`}
                        >
                            <span className="icon">
                                {isActive('/your-library') ? <LibraryMusicIcon /> : <LibraryMusicOutlinedIcon />}
                            </span>
                            <span className="label">Your Library</span>
                        </Link>
                        <div className="library-actions">
                            <button className="icon-btn">
                                <AddIcon />
                            </button>
                            <button className="icon-btn">
                                <KeyboardArrowDownIcon />
                            </button>
                        </div>
                    </div>
                </SidebarSection>

                <div className="playlist-filters">
                    <input 
                        type="text" 
                        placeholder="Filter" 
                        className="filter-input"
                    />
                </div>

                <div className="playlists-scroll">
                    <Link 
                        to="/liked-songs" 
                        className={`nav-item playlist-item ${isActive('/liked-songs') ? 'active' : ''}`}
                    >
                        <div className="playlist-icon liked-songs">
                            <FavoriteIcon style={{ fontSize: 20 }} />
                        </div>
                        <div className="playlist-info">
                            <span className="playlist-name">Liked Songs</span>
                            <span className="playlist-meta">
                                <PlaylistPlayIcon style={{ fontSize: 14 }} /> 
                                Playlist • 127 songs
                            </span>
                        </div>
                    </Link>

                    <Link 
                        to="/create-playlist" 
                        className="nav-item playlist-item create-playlist"
                    >
                        <div className="playlist-icon create-icon">
                            <AddIcon style={{ fontSize: 20 }} />
                        </div>
                        <div className="playlist-info">
                            <span className="playlist-name">Create Playlist</span>
                            <span className="playlist-meta">Playlist</span>
                        </div>
                    </Link>

                    {mockPlaylists.map((playlist) => (
                        <Link
                            key={playlist.id}
                            to={`/`}
                            className={`nav-item playlist-item`}
                        >
                            <div className="playlist-icon">
                                <PlaylistPlayIcon style={{ fontSize: 20 }} />
                            </div>
                            <div className="playlist-info">
                                <span className="playlist-name">{playlist.name}</span>
                                <span className="playlist-meta">Playlist • Spotify</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </SidebarContainer>
    );
};

export default Sidebar;
