import styled from "styled-components";

export const PeriodCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  min-width: 200px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  cursor: pointer;

  .show-fab {
    display: none;
  }

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    border-radius: 4px 0 0 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  }

  &:hover {
    opacity: 0.7;
    background-color: rgba(255, 255, 255, 0.2);

    .show-fab {
      display: block;
    }
  }
`;

export const PeriodCardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h2 {
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    margin: 0 10px;
  }
`;
