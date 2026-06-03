import styled from '@emotion/styled';
import Box from '@mui/material/Box';

export const PlayerBarContainer = styled(Box)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 90px;
  background-color: #181818;
  border-top: 1px solid #282828;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 1000;

  .player-left {
    display: flex;
    align-items: center;
    width: 30%;
    min-width: 180px;
    max-width: 300px;
  }

  .player-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    max-width: 720px;
  }

  .player-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 30%;
    min-width: 180px;
    max-width: 300px;
    gap: 8px;
  }

  .player-controls {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 8px;
  }

  .control-btn {
    color: #b3b3b3;
    transition: color 0.2s;

    &:hover {
      color: #fff;
      transform: scale(1.05);
    }

    &.active {
      color: #1db954;
    }
    
    &.active-green {
      color: #1db954 !important;
      
      &:hover {
        color: #1ed760 !important;
      }
    }
    
    &.play-btn {
      background-color: #fff !important;
      color: #000 !important;
      width: 32px !important;
      height: 32px !important;
      border-radius: 50% !important;
      
      &:hover {
        transform: scale(1.05);
        background-color: #fff !important;
      }
      
      svg {
        font-size: 18px;
      }
    }
  }

  .progress-container {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 8px;
  }

  .time-display {
    font-size: 11px;
    color: #b3b3b3;
    min-width: 40px;
    font-family: sans-serif;
    user-select: none;
  }

  .song-info {
    display: flex;
    align-items: center;
    gap: 12px;
    overflow: hidden;

    .song-cover {
      width: 56px;
      height: 56px;
      object-fit: cover;
      border-radius: 4px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    .song-details {
      display: flex;
      flex-direction: column;
      gap: 2px;
      overflow: hidden;
      
      .song-title {
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        margin: 0;
        cursor: pointer;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &:hover {
          text-decoration: underline;
        }
      }

      .song-artist {
        color: #b3b3b3;
        font-size: 12px;
        margin: 0;
        cursor: pointer;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &:hover {
          color: #fff;
          text-decoration: underline;
        }
      }
    }
  }

  .like-btn {
    color: #b3b3b3;
    transition: all 0.2s;
    padding: 8px;

    &:hover {
      color: #1db954;
      transform: scale(1.1);
    }
    
    &.liked {
      color: #1db954;
    }
  }

  .volume-container {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .volume-slider {
    width: 100px;
    color: #b3b3b3;
  }

  @media (max-width: 768px) {
    padding: 0 8px;
    
    .player-left {
      width: 35%;
      min-width: auto;
      
      .song-info {
        gap: 8px;
        
        .song-cover {
          width: 48px;
          height: 48px;
        }
      }
    }

    .player-center {
      width: 40%;
    }

    .player-right {
      width: 25%;
      min-width: auto;
      
      .volume-container {
        display: none;
      }
    }
    
    .player-controls {
      gap: 12px;
    }
  }
  
  @media (max-width: 480px) {
    .player-left {
      width: 50%;
    }
    
    .player-center {
      display: none;
    }
    
    .player-right {
      width: 50%;
    }
  }
`;
