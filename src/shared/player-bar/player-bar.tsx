import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
import PictureInPictureAltIcon from '@mui/icons-material/PictureInPictureAlt';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import DevicesIcon from '@mui/icons-material/Devices';
import { PlayerBarContainer } from './styles/player-bar.style';
import { usePlayer } from '../../context/PlayerContext';
import { formatDuration } from '../../data/mockData';

const PlayerBar: React.FC = () => {
  const {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    shuffle,
    repeat,
    togglePlay,
    next,
    previous,
    seek: seekTrack,
    setVolume,
    toggleMute,
    toggleShuffle,
    toggleRepeat
  } = usePlayer();

  const [isLiked, setIsLiked] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  const handleVolumeChange = (_: Event, newValue: number | number[]) => {
    setVolume(newValue as number);
  };

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return <VolumeOffIcon fontSize="small" />;
    if (volume < 0.3) return <VolumeMuteIcon fontSize="small" />;
    if (volume < 0.7) return <VolumeDownIcon fontSize="small" />;
    return <VolumeUpIcon fontSize="small" />;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && duration > 0) {
      const rect = progressRef.current.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      seekTrack(percent * duration);
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <PlayerBarContainer>
      <Box className="player-left">
        {currentSong ? (
          <Box className="song-info">
            <img
              src={currentSong.coverImage}
              alt={currentSong.title}
              className="song-cover"
            />
            <Box className="song-details">
              <Typography className="song-title">
                {currentSong.title}
              </Typography>
              <Typography className="song-artist">
                {currentSong.artist.name}
              </Typography>
            </Box>
            <IconButton 
              className={`like-btn ${isLiked ? 'liked' : ''}`}
              onClick={() => setIsLiked(!isLiked)}
            >
              {isLiked ? (
                <FavoriteIcon fontSize="small" />
              ) : (
                <FavoriteBorderIcon fontSize="small" />
              )}
            </IconButton>
          </Box>
        ) : (
          <Box sx={{ color: '#b3b3b3', fontSize: 12 }}>
            Preview not available
          </Box>
        )}
      </Box>

      <Box className="player-center">
        <Box className="player-controls">
          <IconButton
            className={`control-btn ${shuffle ? 'active-green' : ''}`}
            onClick={toggleShuffle}
            size="small"
          >
            <ShuffleIcon fontSize="small" />
          </IconButton>

          <IconButton className="control-btn" onClick={previous} size="small">
            <SkipPreviousIcon />
          </IconButton>

          <IconButton
            className="control-btn play-btn"
            onClick={togglePlay}
          >
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>

          <IconButton className="control-btn" onClick={next} size="small">
            <SkipNextIcon />
          </IconButton>

          <IconButton
            className={`control-btn ${repeat !== 'off' ? 'active-green' : ''}`}
            onClick={toggleRepeat}
            size="small"
          >
            {repeat === 'one' ? <RepeatOneIcon fontSize="small" /> : <RepeatIcon fontSize="small" />}
          </IconButton>
        </Box>

        <Box className="progress-container">
          <Typography className="time-display">
            {formatDuration(currentTime)}
          </Typography>
          <Box 
            ref={progressRef}
            onClick={handleProgressClick}
            sx={{ 
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              px: 1
            }}
          >
            <Box sx={{ 
              position: 'relative', 
              width: '100%',
              height: '4px',
              bgcolor: 'rgba(255,255,255,0.3)',
              borderRadius: '2px',
              '&:hover': {
                '& .progress-bar': {
                  bgcolor: '#1db954',
                },
                '& .progress-thumb': {
                  opacity: 1,
                }
              }
            }}>
              <Box 
                className="progress-bar"
                sx={{ 
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  bgcolor: '#fff',
                  borderRadius: '2px',
                  width: `${progressPercent}%`,
                  transition: 'width 0.1s linear'
                }} 
              />
              <Box 
                className="progress-thumb"
                sx={{ 
                  position: 'absolute',
                  top: '50%',
                  left: `${progressPercent}%`,
                  transform: 'translate(-50%, -50%)',
                  width: '12px',
                  height: '12px',
                  bgcolor: '#fff',
                  borderRadius: '50%',
                  opacity: 0,
                  transition: 'opacity 0.2s',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }} 
              />
            </Box>
          </Box>
          <Typography className="time-display">
            {formatDuration(duration)}
          </Typography>
        </Box>
      </Box>

      <Box className="player-right">
        <IconButton className="control-btn" size="small">
          <MicExternalOnIcon fontSize="small" />
        </IconButton>
        <IconButton className="control-btn" size="small">
          <PictureInPictureAltIcon fontSize="small" />
        </IconButton>
        <IconButton className="control-btn" size="small">
          <PlaylistPlayIcon fontSize="small" />
        </IconButton>
        <IconButton className="control-btn" size="small">
          <DevicesIcon fontSize="small" />
        </IconButton>
        <Box 
          className="volume-container"
          onMouseEnter={() => setShowVolumeSlider(true)}
          onMouseLeave={() => setShowVolumeSlider(false)}
        >
          <IconButton className="control-btn" onClick={toggleMute} size="small">
            {getVolumeIcon()}
          </IconButton>
          {showVolumeSlider && (
            <Box sx={{ 
              position: 'absolute', 
              bottom: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              bgcolor: '#282828',
              borderRadius: '4px',
              p: 1,
              mb: 1,
              minWidth: '120px'
            }}>
              <Slider
                className="volume-slider"
                value={isMuted ? 0 : volume}
                min={0}
                max={1}
                step={0.01}
                onChange={handleVolumeChange}
                orientation="vertical"
                sx={{
                  color: '#b3b3b3',
                  height: '80px',
                  '& .MuiSlider-thumb': {
                    width: 12,
                    height: 12,
                    '&:hover, &.Mui-focusVisible': {
                      boxShadow: '0 0 0 8px rgba(29, 185, 84, 0.16)'
                    }
                  },
                  '& .MuiSlider-rail': {
                    backgroundColor: '#4d4d4d'
                  }
                }}
              />
            </Box>
          )}
          <IconButton className="control-btn" onClick={toggleMute} size="small">
            {getVolumeIcon()}
          </IconButton>
        </Box>
      </Box>
    </PlayerBarContainer>
  );
};

export default PlayerBar;
