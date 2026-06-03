import styled from 'styled-components';

interface SidebarContainerProps {
    width: number;
}

export const SidebarContainer = styled.aside<SidebarContainerProps>`
    width: ${props => props.width}px;
    min-width: ${props => props.width}px;
    height: 100vh;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    transition: width 0.3s ease, min-width 0.3s ease;
    
    .sidebar-content {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 8px;
        overflow: hidden;
    }
    
    .logo-link {
        display: flex;
        align-items: center;
        padding: 16px 8px;
        margin-bottom: 8px;
        
        .logo {
            height: 40px;
            width: auto;
        }
    }
    
    .main-nav {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    
    .nav-item {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 8px 12px;
        border-radius: 4px;
        text-decoration: none;
        color: #b3b3b3;
        transition: all 0.2s ease;
        cursor: pointer;
        
        &:hover {
            color: #ffffff;
            background: rgba(255, 255, 255, 0.1);
        }
        
        &.active {
            color: #ffffff;
            background: rgba(255, 255, 255, 0.1);
            
            .icon {
                color: #ffffff;
            }
        }
        
        .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #b3b3b3;
            
            svg {
                font-size: 24px;
            }
        }
        
        .label {
            font-size: 15px;
            font-weight: 600;
        }
    }
    
    .library-section {
        margin-top: 16px;
        
        .library-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 12px;
            
            .nav-item {
                flex: 1;
                padding: 8px 0;
            }
            
            .library-actions {
                display: flex;
                gap: 8px;
            }
            
            .icon-btn {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                border: none;
                background: transparent;
                color: #b3b3b3;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s ease;
                
                &:hover {
                    color: #ffffff;
                    background: rgba(255, 255, 255, 0.1);
                }
                
                svg {
                    font-size: 20px;
                }
            }
        }
    }
    
    .playlist-filters {
        padding: 8px;
        
        .filter-input {
            width: 100%;
            padding: 8px 12px;
            background: rgba(255, 255, 255, 0.1);
            border: none;
            border-radius: 4px;
            color: #ffffff;
            font-size: 14px;
            outline: none;
            
            &::placeholder {
                color: #b3b3b3;
            }
            
            &:focus {
                background: rgba(255, 255, 255, 0.2);
            }
        }
    }
    
    .playlists-scroll {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 8px 0;
        
        &::-webkit-scrollbar {
            width: 8px;
        }
        
        &::-webkit-scrollbar-track {
            background: transparent;
        }
        
        &::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.3);
            border-radius: 4px;
            
            &:hover {
                background: rgba(255, 255, 255, 0.5);
            }
        }
    }
    
    .playlist-item {
        padding: 8px 12px;
        
        .playlist-icon {
            width: 48px;
            height: 48px;
            min-width: 48px;
            border-radius: 4px;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            
            &.liked-songs {
                background: linear-gradient(135deg, #450a5a 0%, #1db954 100%);
            }
            
            &.create-icon {
                background: rgba(255, 255, 255, 0.1);
            }
        }
        
        .playlist-info {
            display: flex;
            flex-direction: column;
            gap: 2px;
            overflow: hidden;
            
            .playlist-name {
                font-size: 16px;
                font-weight: 500;
                color: #ffffff;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            
            .playlist-meta {
                font-size: 13px;
                color: #b3b3b3;
                display: flex;
                align-items: center;
                gap: 4px;
                
                svg {
                    margin-right: 2px;
                }
            }
        }
    }
`;

export const SidebarSection = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PlaylistItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 12px;
    cursor: pointer;
    transition: background 0.2s ease;
    
    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }
`;
