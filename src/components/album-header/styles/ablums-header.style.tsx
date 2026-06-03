import styled from 'styled-components';

export const AlbumsHeaderContainer = styled.div`
  position: relative;
  padding: 24px;
  background: linear-gradient(
    180deg,
    rgba(79, 49, 53, 0.95) 0%,
    rgba(79, 49, 53, 0.7) 50%,
    rgba(18, 18, 18, 1) 100%
  );

  .header-content {
    display: flex;
    gap: 24px;
    align-items: flex-end;
    margin-bottom: 24px;
    position: relative;
    z-index: 1;
  }

  .album-image {
    width: 232px;
    height: 232px;
    object-fit: cover;
    border-radius: 6px;
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.6);
    flex-shrink: 0;
  }

  .header-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex: 1;
    min-width: 0;

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
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .description {
      font-size: 14px;
      color: #fff;
      margin-bottom: 8px;
    }

    .meta {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      color: #b3b3b3;
      flex-wrap: wrap;

      a {
        color: #fff;
        text-decoration: none;
        font-weight: 500;

        &:hover {
          text-decoration: underline;
        }
      }

      .dot {
        font-size: 8px;
      }
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

  &.secondary {
    width: 40px;
    height: 40px;
    background: transparent;
    border: 2px solid #b3b3b3;
    box-shadow: none;

    &:hover {
      border-color: #fff;
      transform: scale(1.05);
    }

    svg {
      color: #fff;
      font-size: 20px;
    }
  }
`;

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #b3b3b3;
  transition: color 0.2s;
  padding: 8px;

  &:hover {
    color: #fff;
  }

  &.active {
    color: #1db954;
  }
`;

export const TableWrapper = styled.div`
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
