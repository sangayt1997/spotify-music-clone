import styled from "styled-components";
import Box from "@mui/material/Box";

export const FooterContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  padding-bottom: 42px;

  .current-year {
    font-size: 14px;
    color: #B3B3B3
  }

  // TODO: Apply hover styling also hover directly doesn't work
  .social-fab {
    background-color: rgb(255, 255, 255, 0.1) !important;
  }

  a {
    color: rgb(179, 179, 179);
    font-size: 16px;
    font-weight: 400;

    &:hover {
      color: white;
    }
`;
