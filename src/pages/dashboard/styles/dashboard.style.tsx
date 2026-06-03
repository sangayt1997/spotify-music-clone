import styled from "styled-components";

const SidebarWidth = 280;

export const DashBoardContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #121212;
  overflow: hidden;

  .main-content {
    flex: 1;
    margin-left: ${SidebarWidth}px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  }

  .navigation-fab {
    background-color: rgba(0, 0, 0, 0.7) !important;
    backdrop-filter: blur(10px);
    border-radius: 50% !important;

    &:hover {
      background-color: rgba(0, 0, 0, 0.9) !important;
      transform: scale(1.1);
    }
  }
`;

export const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background: linear-gradient(180deg, #1a1a1a 0%, #121212 100%);
  position: sticky;
  top: 0;
  z-index: 50;
  min-height: 48px;
  flex-shrink: 0;

  .nav-buttons {
    display: flex;
    gap: 8px;
  }

  .nav-btn {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.9);
      transform: scale(1.1);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }

  .user-menu {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .user-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 8px 4px 4px;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    border: none;
    cursor: pointer;
    color: #fff;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(40, 40, 40, 0.9);
    }

    .avatar {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: linear-gradient(135deg, #1db954 0%, #191414 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 700;
    }

    span {
      font-size: 14px;
      font-weight: 600;
    }

    .dropdown-icon {
      width: 16px;
      height: 16px;
    }
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 90px;

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
