import styled from 'styled-components';

export const MyPlaylistContainer = styled.div`
  padding: 24px;
  min-height: 100%;
  background: linear-gradient(180deg, #1a1a2e 0%, #121212 30%);
`;

export const PageHeader = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
  align-items: flex-end;
`;

export const PlaylistImage = styled.div`
  width: 232px;
  height: 232px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.6);

  svg {
    font-size: 80px;
    color: #b3b3b3;
  }
`;

export const PlaylistInfo = styled.div`
  .type {
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
  }

  h1 {
    font-size: 72px;
    font-weight: 800;
    color: #fff;
    margin: 8px 0;
    line-height: 1;
  }

  .description {
    font-size: 14px;
    color: #fff;
    margin-bottom: 8px;
  }

  .meta {
    font-size: 14px;
    color: #b3b3b3;

    span {
      color: #fff;
    }
  }
`;

export const ActionBar = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
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

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  color: #b3b3b3;

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
  }
`;

export const Button = styled.button`
  padding: 12px 24px;
  background: #1db954;
  border: none;
  border-radius: 500px;
  color: #000;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #1ed760;
  }
`;
