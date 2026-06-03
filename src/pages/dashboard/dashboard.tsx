import React, { useState } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import { DashBoardContainer, TopBarContainer, ContentWrapper } from "./styles/dashboard.style";
import Sidebar from "../../components/sidebar/sidebar";
import PlayerBar from "../../shared/player-bar/player-bar";
import { useKeyboardShortcuts } from "../../hooks/useKeyboardShortcuts";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SidebarWidth = 280;

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const navigate = useNavigate();

    useKeyboardShortcuts();

    const handleGoBack = () => {
        navigate(-1);
    }

    const handleGoForward = () => {
        navigate(1);
    }

    return (
        <DashBoardContainer>
            <Sidebar
                width={SidebarWidth}
                isOpen={sidebarOpen}
                onToggle={() => setSidebarOpen(!sidebarOpen)}
            />

            <div className="main-content">
                <TopBarContainer>
                    <div className="nav-buttons">
                        <button
                            className="nav-btn"
                            onClick={handleGoBack}
                            aria-label="Go back"
                        >
                            <ChevronLeftIcon />
                        </button>
                        <button
                            className="nav-btn"
                            onClick={handleGoForward}
                            aria-label="Go forward"
                        >
                            <ChevronRightIcon />
                        </button>
                    </div>

                    <div className="user-menu">
                        <button className="user-btn">
                            <div className="avatar">K</div>
                            <span>Thinley</span>
                            <ExpandMoreIcon className="dropdown-icon" />
                        </button>
                    </div>
                </TopBarContainer>

                <ContentWrapper>
                    <Outlet />
                </ContentWrapper>
            </div>

            <PlayerBar />
        </DashBoardContainer>
    );
}

export default Dashboard;
