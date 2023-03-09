import styled from "styled-components";

export const Card = styled.div`
  background-color: #181818;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  width: 250px;

  img {
    object-fit: cover;
    height: 200px;
    width: 100%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  h2 {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0 0 10px;
  }

  p {
    color: #b3b3b3;
    font-size: 1rem;
    margin: 0 0 10px;
  }
`;
