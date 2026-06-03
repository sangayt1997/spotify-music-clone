import React, { useState, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from "@mui/material/CircularProgress";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { 
  SearchContainer, 
  SearchInputContainer, 
  BrowseCategories, 
  CategoriesGrid, 
  CategoryCard,
  SearchResults,
  ResultsGrid,
  ResultCard,
  LoadingContainer,
  EmptyState
} from "./styles/search.style";
import { Song } from "../../types/music";
import { fetchSongsByGenre, fetchPopularSongs, convertITunesTrackToSong } from "../../services/iTunesApi";
import { usePlayer } from "../../context/PlayerContext";

const CATEGORIES = [
  { id: 'podcasts', name: 'Podcasts', color: '#E13300' },
  { id: 'new', name: 'New Releases', color: '#1DB954' },
  { id: 'charts', name: 'Charts', color: '#1AA34A' },
  { id: 'concerts', name: 'Concerts', color: '#B02897' },
  { id: 'made-for', name: 'Made For You', color: '#1DB954' },
  { id: 'at-home', name: 'At Home', color: '#6090C0' },
  { id: 'pop', name: 'Pop', color: '#C21975' },
  { id: 'hiphop', name: 'Hip-Hop', color: '#BA5D07' },
  { id: 'rock', name: 'Rock', color: '#E61E32' },
  { id: 'latin', name: 'Latin', color: '#1E0551' },
  { id: 'mood', name: 'Mood', color: '#477D95' },
  { id: 'indie', name: 'Indie', color: '#608108' },
  { id: 'workout', name: 'Workout', color: '#1E3264' },
  { id: 'chill', name: 'Chill', color: '#148A08' },
  { id: 'focus', name: 'Focus', color: '#E8115B' },
  { id: 'sleep', name: 'Sleep', color: '#2D5DA1' },
];

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Song[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(true);
  const { playAlbum } = usePlayer();

  useEffect(() => {
    const loadCategories = async () => {
      try {
        await fetchPopularSongs('popular music', 16);
      } catch (error) {
        console.error('Error loading categories:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  useEffect(() => {
    const performSearch = async () => {
      if (searchQuery.trim() === '') {
        setSearchResults([]);
        return;
      }

      setIsSearching(true);
      try {
        const results = await fetchSongsByGenre(searchQuery, 20);
        setSearchResults(results.map((t, i) => convertITunesTrackToSong(t, i)));
      } catch (error) {
        console.error('Error searching:', error);
      } finally {
        setIsSearching(false);
      }
    };

    const debounce = setTimeout(performSearch, 300);
    return () => clearTimeout(debounce);
  }, [searchQuery]);

  if (loading) {
    return (
      <SearchContainer>
        <LoadingContainer>
          <CircularProgress color="primary" />
        </LoadingContainer>
      </SearchContainer>
    );
  }

  return (
    <SearchContainer>
      <SearchInputContainer>
        <SearchIcon />
        <input
          type="text"
          placeholder="What do you want to listen to?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchInputContainer>

      {searchQuery ? (
        <SearchResults>
          <h2>Search results for "{searchQuery}"</h2>
          {isSearching ? (
            <LoadingContainer>
              <CircularProgress color="primary" />
            </LoadingContainer>
          ) : searchResults.length > 0 ? (
            <ResultsGrid>
              {searchResults.map((song, index) => (
                <ResultCard key={`search-${index}`}>
                  <div className="image-container">
                    <img src={song.coverImage} alt={song.album.title} />
                    <button className="play-btn" onClick={() => playAlbum(searchResults, index)}>
                      <PlayArrowIcon />
                    </button>
                  </div>
                  <div className="card-info">
                    <h3>{song.title}</h3>
                    <p>{song.artist.name} • {song.album.title}</p>
                  </div>
                </ResultCard>
              ))}
            </ResultsGrid>
          ) : (
            <EmptyState>
              <SearchIcon />
              <h3>No results found</h3>
              <p>Try searching for something else</p>
            </EmptyState>
          )}
        </SearchResults>
      ) : (
        <BrowseCategories>
          <h2>Browse all</h2>
          <CategoriesGrid>
            {CATEGORIES.map((category) => (
              <CategoryCard 
                key={category.id} 
                bgColor={category.color}
              >
                <div className="category-bg" />
                <img 
                  className="category-image"
                  src={`https://picsum.photos/seed/${category.id}/100/100`}
                  alt={category.name}
                />
                <span className="category-name">{category.name}</span>
              </CategoryCard>
            ))}
          </CategoriesGrid>
        </BrowseCategories>
      )}
    </SearchContainer>
  );
}

export default Search;
