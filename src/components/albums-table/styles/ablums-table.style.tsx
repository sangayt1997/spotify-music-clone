import styled from "styled-components";
import TableContainer from "@mui/material/TableContainer";

export const AlbumsTableContainer = styled(TableContainer)`
  .artist-title {
    font-size: 14px;
  }
  th {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 12px 6px;
  }

  td {
    border: none;
    padding: 8px;
  }
  
  tr {
    &:hover {
      background-color: rgba(255,255,255,0.1);
    }
  }
`;
