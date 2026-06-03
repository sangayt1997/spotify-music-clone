import React, { useState, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { 
  LibraryContainer, 
  LibraryHeader, 
  FilterInput,
  TabsContainer,
  Tab,
  LibraryGrid,
  LibraryItem,
  ArtistItem,
  PlaylistItem,
  CreatePlaylistBtn
} from "./styles/your-library.style";
import { Song } from "../../types/music";
import { fetchPopularSongs, convertITunesTrackToSong } from "../../services/iTunesApi";

type TabType = 'playlist' | 'artist' | 'album';

const YourLibrary: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>('playlist');
    const [filterText, setFilterText] = useState('');
    const [songs, setSongs] = useState<Song[]>([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPopularSongs('popular music', 20);
        setSongs(data.map((t, i) => convertITunesTrackToSong(t, i)));
      } catch (error) {
        console.error('Error loading library:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const filteredSongs = songs.filter(song => 
    song.title.toLowerCase().includes(filterText.toLowerCase()) ||
    song.artist.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const uniqueArtists = Array.from(new Map(songs.map(s => [s.artist.id, s.artist])).values());
  const uniqueAlbums = Array.from(new Map(songs.map(s => [s.album.id, s.album])).values());

  const filteredArtists = uniqueArtists.filter(artist =>
    artist.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const filteredAlbums = uniqueAlbums.filter(album =>
    album.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <LibraryContainer>
      <LibraryHeader>
        <h1>Your Library</h1>
      </LibraryHeader>

      <FilterInput>
        <SearchIcon />
        <input
          type="text"
          placeholder="Filter"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </FilterInput>

      <TabsContainer>
        <Tab 
          active={activeTab === 'playlist'} 
          onClick={() => setActiveTab('playlist')}
        >
          Playlists
        </Tab>
        <Tab 
          active={activeTab === 'artist'} 
          onClick={() => setActiveTab('artist')}
        >
          Artists
        </Tab>
        <Tab 
          active={activeTab === 'album'} 
          onClick={() => setActiveTab('album')}
        >
          Albums
        </Tab>
      </TabsContainer>

      {activeTab === 'playlist' && (
        <>
          <CreatePlaylistBtn>
            <div className="icon-box">
              <AddIcon />
            </div>
            <div className="info">
              <h4>Create Playlist</h4>
              <p>Create a playlist for your favorite songs</p>
            </div>
          </CreatePlaylistBtn>

          {loading ? null : (
            <>
              <PlaylistItem>
                <div className="playlist-image" style={{ background: 'linear-gradient(135deg, #450a5a 0%, #1db954 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FavoriteIcon sx={{ color: '#1db954' }} />
                </div>
                <div className="playlist-info">
                  <h4>Liked Songs</h4>
                  <p>Playlist • 127 songs</p>
                </div>
              </PlaylistItem>
              
              {filteredSongs.slice(0, 10).map((song, index) => (
                <PlaylistItem key={`playlist-${index}`}>
                  <img 
                    className="playlist-image" 
                    src={song.coverImage} 
                    alt={song.album.title} 
                  />
                  <div className="playlist-info">
                    <h4>{song.album.title}</h4>
                    <p>By {song.artist.name}</p>
                  </div>
                </PlaylistItem>
              ))}
            </>
          )}
        </>
      )}

      {activeTab === 'artist' && (
        <LibraryGrid>
          {filteredArtists.map((artist, index) => (
            <ArtistItem key={`artist-${index}`}>
              <img 
                className="artist-image"
                src={artist.image || `https://picsum.photos/seed/${artist.id}/300/300`}
                alt={artist.name}
                onError={(e: any) => {
                  e.target.src = `https://picsum.photos/seed/${artist.id}/300/300`;
                }}
              />
              <div className="artist-info">
                <h3>{artist.name}</h3>
                <p>Artist</p>
              </div>
            </ArtistItem>
          ))}
        </LibraryGrid>
      )}

      {activeTab === 'album' && (
        <LibraryGrid>
          {filteredAlbums.map((album, index) => (
            <LibraryItem key={`album-${index}`}>
              <img 
                className="item-image"
                src={album.image}
                alt={album.title}
              />
              <div className="item-info">
                <h3>{album.title}</h3>
                <p>{album.artist.name}</p>
              </div>
            </LibraryItem>
          ))}
        </LibraryGrid>
      )}
    </LibraryContainer>
  );
}

export default YourLibrary;
