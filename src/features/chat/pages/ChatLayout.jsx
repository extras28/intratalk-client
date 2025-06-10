import React, { useState } from "react";
import ChatSidebar from "../components/ChatSidebar";
import ChatBox from "../components/ChatBox";
import styles from "./ChatLayout.module.scss";

const ChatLayout = () => {
    const [selectedChatId, setSelectedChatId] = useState(1);
    return (
        <div className={styles.chatLayout + " d-flex h-100 w-100"}>
            <ChatSidebar onSelectChat={setSelectedChatId} selectedChatId={selectedChatId} />
            <ChatBox selectedChatId={selectedChatId} />
        </div>
    );
};

export default ChatLayout;
