import styled from 'styled-components';

export const LikedSongsContainer = styled.div`
  min-height: 100%;
  background: linear-gradient(180deg, #450a5a 0%, #121212 30%);
  padding: 24px;
  
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
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 24px;
  padding: 32px 0 24px;
  background: transparent;
`;

export const HeartIcon = styled.div`
  width: 232px;
  height: 232px;
  background: linear-gradient(135deg, #450a5a 0%, #1db954 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  
  svg {
    font-size: 120px;
    color: #1db954;
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  .playlist-type {
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
  }
  
  h1 {
    font-size: 72px;
    font-weight: 800;
    color: #fff;
    margin: 0;
    line-height: 1;
  }
  
  .description {
    font-size: 14px;
    color: #fff;
    margin-top: 8px;
  }
  
  .stats {
    font-size: 14px;
    color: #b3b3b3;
    margin-top: 4px;
    
    span {
      color: #fff;
    }
  }
`;

export const ActionBar = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px 0;
`;

export const PlayButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #1db954;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  
  &:hover {
    background: #1ed760;
    transform: scale(1.05);
  }
  
  svg {
    color: #000;
    font-size: 28px;
    margin-left: 4px;
  }
`;

export const ShuffleButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: transparent;
  border: 2px solid #1db954;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(29, 185, 84, 0.1);
    transform: scale(1.05);
  }
  
  svg {
    color: #1db954;
    font-size: 20px;
  }
`;

export const SongsList = styled.div`
  margin-top: 16px;
`;

export const SongsHeader = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 1fr 80px;
  gap: 16px;
  padding: 8px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 16px;
  
  span {
    font-size: 12px;
    color: #b3b3b3;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`;

export const SongRow = styled.div<{ isPlaying?: boolean }>`
  display: grid;
  grid-template-columns: 40px 1fr 1fr 80px;
  gap: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease;
  background: ${props => props.isPlaying ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    
    .song-number {
      display: none;
    }
    
    .play-icon {
      display: block !important;
    }
    
    .more-btn {
      opacity: 1;
    }
  }
  
  .song-cell {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
  }
  
  .song-image {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    object-fit: cover;
    flex-shrink: 0;
  }
  
  .song-info {
    overflow: hidden;
    
    .song-title {
      font-size: 16px;
      font-weight: 500;
      color: ${props => props.isPlaying ? '#1db954' : '#fff'};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .song-artist {
      font-size: 14px;
      color: #b3b3b3;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      
      &:hover {
        color: #fff;
        text-decoration: underline;
      }
    }
  }
  
  .album-name {
    font-size: 14px;
    color: #b3b3b3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
    
    &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }
  
  .duration {
    font-size: 14px;
    color: #b3b3b3;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  
  .song-number {
    font-size: 16px;
    color: #b3b3b3;
  }
  
  .play-icon {
    display: none;
    color: #fff;
  }
  
  .more-btn {
    opacity: 0;
    color: #b3b3b3;
    transition: opacity 0.2s;
    
    &:hover {
      color: #fff;
    }
  }
`;

export const LikedBySection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  padding: 0 16px;
  
  .avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: linear-gradient(135deg, #1db954 0%, #191414 100%);
  }
  
  .text {
    font-size: 14px;
    color: #b3b3b3;
    
    a {
      color: #fff;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
