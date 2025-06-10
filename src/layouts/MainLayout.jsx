import React, { useState } from "react";
import Header from "../components/layout/Header/Header";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import Content from "../components/layout/Content/Content";

const MainLayout = ({ toggleTheme, theme }) => {
    const [collapsed, setCollapsed] = useState(false);
    const currentPath = window.location.pathname;
    return (
        <div className="d-flex min-vh-100 bg-body">
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} currentPath={currentPath} />
            <div className="flex-grow-1 d-flex flex-column min-vh-100">
                <Header collapsed={collapsed} toggleTheme={toggleTheme} theme={theme} />
                <Content />
            </div>
        </div>
    );
};

export default MainLayout;
