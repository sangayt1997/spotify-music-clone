import styled from 'styled-components';

export const SearchContainer = styled.div`
  padding: 24px;
  min-height: 100vh;
  background: linear-gradient(180deg, #294352 0%, #121212 20%);
  
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

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 500px;
  padding: 12px 16px;
  margin-bottom: 32px;
  max-width: 400px;
  transition: background 0.2s;
  
  &:focus-within {
    background: rgba(255, 255, 255, 0.25);
  }
  
  svg {
    color: #fff;
    font-size: 24px;
  }
  
  input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-size: 16px;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

export const BrowseCategories = styled.div`
  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 20px;
  }
`;

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 24px;
`;

export const CategoryCard = styled.div<{ bgColor?: string }>`
  position: relative;
  aspect-ratio: 1.1;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.02);
    
    .category-image {
      transform: scale(1.1);
    }
  }
  
  .category-image {
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 60%;
    object-fit: cover;
    transform: rotate(25deg) translate(10%, -10%);
    transition: transform 0.3s ease;
    filter: blur(0px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }
  
  .category-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.bgColor || '#1a73e8'};
  }
  
  .category-name {
    position: absolute;
    bottom: 16px;
    left: 16px;
    right: 16px;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    z-index: 1;
  }
`;

export const SearchResults = styled.div`
  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 20px;
  }
`;

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 24px;
`;

export const ResultCard = styled.div`
  background: #181818;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #282828;
    
    .play-btn {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .image-container {
    position: relative;
    margin-bottom: 16px;
    
    img {
      width: 100%;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 6px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
    }
    
    .play-btn {
      position: absolute;
      bottom: 8px;
      right: 8px;
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
  }
  
  .card-info {
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
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  
  .MuiCircularProgress-root {
    color: #1db954;
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  color: #b3b3b3;
  text-align: center;
  
  svg {
    font-size: 80px;
    margin-bottom: 16px;
    opacity: 0.5;
  }
  
  h3 {
    font-size: 24px;
    color: #fff;
    margin-bottom: 8px;
  }
  
  p {
    font-size: 16px;
  }
`;
