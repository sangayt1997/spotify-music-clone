import styled from 'styled-components';

export const LibraryContainer = styled.div`
  padding: 24px;
  min-height: 100vh;
  background: #121212;
  
  &::-webkit-scrollbar {
    width: 12px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    border: 3px solid transparent;
    background-clip: padding-box;
    
    &:hover {
      background: rgba(255, 255, 255, 0.5);
      background-clip: padding-box;
    }
  }
`;

export const LibraryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
  
  h1 {
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    margin: 0;
  }
`;

export const FilterInput = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 500px;
  padding: 8px 16px;
  margin-bottom: 24px;
  max-width: 320px;
  transition: background 0.2s;
  
  &:focus-within {
    background: rgba(255, 255, 255, 0.2);
  }
  
  svg {
    color: #b3b3b3;
    font-size: 20px;
  }
  
  input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-size: 14px;
    
    &::placeholder {
      color: #b3b3b3;
    }
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 8px;
`;

export const Tab = styled.button<{ active?: boolean }>`
  background: transparent;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.active ? '#fff' : '#b3b3b3'};
  cursor: pointer;
  border-radius: 500px;
  transition: all 0.2s;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const LibraryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

export const LibraryItem = styled.div`
  background: #181818;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    background: #282828;
    
    .play-btn {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .item-image {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  }
  
  .item-info {
    h3 {
      font-size: 16px;
      font-weight: 600;
      color: #fff;
      margin: 0 0 8px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    p {
      font-size: 13px;
      color: #b3b3b3;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  
  .play-btn {
    position: absolute;
    bottom: 90px;
    right: 16px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #1db954;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: translateY(8px);
    transition: all 0.3s ease;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    
    &:hover {
      background: #1ed760;
      transform: scale(1.05) translateY(0);
    }
    
    svg {
      color: #000;
      font-size: 24px;
      margin-left: 2px;
    }
  }
`;

export const ArtistItem = styled.div`
  background: #181818;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    background: #282828;
    
    .play-btn {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .artist-image {
    width: 160px;
    height: 160px;
    margin: 0 auto 16px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  }
  
  .artist-info {
    h3 {
      font-size: 16px;
      font-weight: 600;
      color: #fff;
      margin: 0 0 4px 0;
    }
    
    p {
      font-size: 13px;
      color: #b3b3b3;
      margin: 0;
    }
  }
  
  .play-btn {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #1db954;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px auto 0;
    opacity: 0;
    transform: translateY(8px);
    transition: all 0.3s ease;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    
    &:hover {
      background: #1ed760;
      transform: scale(1.05) translateY(0);
    }
    
    svg {
      color: #000;
      font-size: 24px;
      margin-left: 2px;
    }
  }
`;

export const PlaylistItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .playlist-image {
    width: 48px;
    height: 48px;
    border-radius: 4px;
    object-fit: cover;
    background: #333;
  }
  
  .playlist-info {
    flex: 1;
    overflow: hidden;
    
    h4 {
      font-size: 16px;
      font-weight: 500;
      color: #fff;
      margin: 0 0 4px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    p {
      font-size: 13px;
      color: #b3b3b3;
      margin: 0;
    }
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  color: #b3b3b3;
  text-align: center;
  
  svg {
    font-size: 100px;
    margin-bottom: 24px;
    opacity: 0.3;
  }
  
  h3 {
    font-size: 28px;
    color: #fff;
    margin-bottom: 8px;
  }
  
  p {
    font-size: 16px;
    max-width: 400px;
    line-height: 1.5;
  }
`;

export const CreatePlaylistBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
  width: 100%;
  margin-bottom: 8px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .icon-box {
    width: 48px;
    height: 48px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #b3b3b3;
    
    svg {
      font-size: 24px;
    }
  }
  
  .info {
    text-align: left;
    
    h4 {
      font-size: 15px;
      font-weight: 500;
      color: #fff;
      margin: 0 0 4px 0;
    }
    
    p {
      font-size: 13px;
      color: #b3b3b3;
      margin: 0;
    }
  }
`;
