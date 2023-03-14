import styled from "styled-components";

export const AlbumCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
  background-color: #181818;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  cursor: pointer;
  padding: 16px;

  .show-fab {
    display: none;
  }

  .image-wrapper {
    position: relative;

    img {
      height: 190px;
      width: 190px;
      object-fit: fill;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    }
  }

  &:hover {
    background-color: #282828;

    .show-fab {
      display: block;
    }
  }
`;

export const AlbumCardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0;

  h2 {
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    margin: 0 0 10px;
  }

  p {
    color: #B3B3B3;
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
