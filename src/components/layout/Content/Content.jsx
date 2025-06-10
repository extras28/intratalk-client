import React from "react";
import { Outlet } from "react-router-dom";
import ChatLayout from "../../../features/chat/pages/ChatLayout";

const Content = () => {
    const path = window.location.pathname;
    if (path.startsWith("/chat")) {
        return (
            <main className="flex-grow-1 overflow-auto bg-body">
                <ChatLayout />
            </main>
        );
    }
    return (
        <main className="flex-grow-1 p-4 overflow-auto bg-body">
            <Outlet />
        </main>
    );
};

export default Content;
