import React from "react";
import styles from "../pages/ChatLayout.module.scss";

// Dummy data for chat list
const chatList = [
    { id: 1, name: "Alice", lastMessage: "Hi there!" },
    { id: 2, name: "Bob", lastMessage: "How are you?" },
    { id: 3, name: "Charlie", lastMessage: "Let's meet up." },
];

const ChatSidebar = ({ onSelectChat, selectedChatId }) => {
    return (
        <div className={styles.chatSidebar + " p-3 border-end h-100"}>
            <h5 className="mb-3">Chats</h5>
            <ul className="list-unstyled">
                {chatList.map((chat) => (
                    <li
                        key={chat.id}
                        className={
                            "p-2 rounded mb-2 " +
                            (selectedChatId === chat.id
                                ? "bg-primary text-white"
                                : localStorage.getItem("theme") === "dark"
                                ? "bg-dark-subtle text-light"
                                : "bg-light text-dark")
                        }
                        style={{ cursor: "pointer" }}
                        onClick={() => onSelectChat(chat.id)}
                    >
                        <div className="fw-bold">{chat.name}</div>
                        <div className="small text-truncate">{chat.lastMessage}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatSidebar;
