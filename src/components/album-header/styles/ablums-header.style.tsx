import styled from "styled-components";
import Stack from "@mui/material/Stack";

export const AlbumsHeaderContainer = styled(Stack)`
  .album-image {
    box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
  }

  .icon-hover {
    color: #B3B3B3;

    &:hover {
      color: #FFFFFF;
    }
  }
`;
