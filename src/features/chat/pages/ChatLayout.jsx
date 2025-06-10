import React, { useState } from "react";
import ChatSidebar from "../components/ChatSidebar";
import ChatBox from "../components/ChatBox";
import styles from "./ChatLayout.module.scss";

const ChatLayout = () => {
    const [selectedChatId, setSelectedChatId] = useState(1);
    return (
        <div
            className={styles.chatLayout + " d-flex h-100 w-100"}
            style={{
                maxHeight: `calc(100vh - var(--header-height-md, 64px))`,
                // Responsive header height for different breakpoints
                "--header-height-xs": "48px",
                "--header-height-sm": "56px",
                "--header-height-md": "64px",
                "--header-height-lg": "72px",
            }}
        >
            <ChatSidebar onSelectChat={setSelectedChatId} selectedChatId={selectedChatId} />
            <ChatBox selectedChatId={selectedChatId} />
        </div>
    );
};

export default ChatLayout;
