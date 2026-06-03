import styled from 'styled-components';

export const AlbumsTableContainer = styled.div`
  padding: 24px 0;
`;

export const TableHeader = styled.div`
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
    display: flex;
    align-items: center;
    
    &:last-child {
      justify-content: flex-end;
    }
  }
`;

interface TableRowProps {
  isPlaying?: boolean;
  isHovered?: boolean;
}

export const TableRow = styled.div<TableRowProps>`
  display: grid;
  grid-template-columns: 40px 1fr 1fr 80px;
  gap: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease;
  background: ${props => props.isPlaying ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    
    .song-number {
      display: none;
    }
    
    .play-icon {
      display: block !important;
    }
    
    .actions {
      opacity: 1;
    }
    
    .duration {
      display: none;
    }
    
    .duration-actions {
      display: flex !important;
    }
  }
  
  .cell {
    display: flex;
    align-items: center;
    min-width: 0;
  }
  
  .song-cell {
    display: flex;
    align-items: center;
    gap: 12px;
    
    .song-image {
      width: 40px;
      height: 40px;
      border-radius: 4px;
      object-fit: cover;
      flex-shrink: 0;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
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
        margin-bottom: 2px;
        
        &:hover {
          text-decoration: ${props => props.isPlaying ? 'none' : 'underline'};
        }
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
  }
  
  .album-cell {
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
  
  .date-cell {
    font-size: 14px;
    color: #b3b3b3;
    display: flex;
    align-items: center;
  }
  
  .duration-cell {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    position: relative;
    
    .duration {
      font-size: 14px;
      color: #b3b3b3;
    }
    
    .duration-actions {
      display: none;
      align-items: center;
      gap: 8px;
      position: absolute;
      right: 0;
    }
    
    .action-btn {
      background: transparent;
      border: none;
      color: #b3b3b3;
      cursor: pointer;
      padding: 4px;
      display: flex;
      align-items: center;
      transition: color 0.2s;
      
      &:hover {
        color: #fff;
      }
      
      &.liked {
        color: #1db954;
      }
    }
  }
  
  .row-number {
    font-size: 16px;
    color: #b3b3b3;
    width: 28px;
    text-align: center;
  }
  
  .play-icon {
    display: none;
    color: #fff;
    width: 28px;
    text-align: center;
  }
  
  .album-icon {
    width: 28px;
    text-align: center;
    color: #b3b3b3;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .header-cell {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .sort-btn {
    background: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    opacity: 0;
    transition: opacity 0.2s;
  }
`;

export const SortButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  opacity: 0;
  transition: opacity 0.2s;
  
  ${TableRow}:hover & {
    opacity: 1;
  }
`;
