import styled from 'styled-components';

export const CreatePlaylistContainer = styled.div`
  padding: 24px;
  min-height: 100%;
  background: #121212;
`;

export const PageHeader = styled.div`
  margin-bottom: 32px;

  h1 {
    font-size: 48px;
    font-weight: 800;
    color: #fff;
    margin: 0 0 16px 0;
  }
`;

export const CreateForm = styled.form`
  max-width: 500px;
`;

export const FormGroup = styled.div`
  margin-bottom: 24px;

  label {
    display: block;
    font-size: 12px;
    font-weight: 600;
    color: #b3b3b3;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 8px;
  }

  input, textarea {
    width: 100%;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    font-family: inherit;
    outline: none;
    transition: border-color 0.2s;

    &::placeholder {
      color: #b3b3b3;
    }

    &:focus {
      border-color: #1db954;
    }
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px 32px;
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
    transform: scale(1.02);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const CancelButton = styled.button`
  padding: 12px 32px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 500px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-left: 16px;
  transition: all 0.2s;

  &:hover {
    border-color: #fff;
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
    font-size: 80px;
    margin-bottom: 16px;
    opacity: 0.5;
  }

  h3 {
    font-size: 24px;
    color: #fff;
    margin-bottom: 8px;
  }
`;
