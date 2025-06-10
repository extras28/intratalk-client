import React, { useState } from "react";
import styles from "../pages/ChatLayout.module.scss";
import { useSelector } from "react-redux";

const dummyMessages = [
    { id: 1, sender: "Alice", content: "Hi there!" },
    { id: 2, sender: "Me", content: "Hello!" },
    { id: 3, sender: "Alice", content: "How are you?" },
];

const ChatBox = ({ selectedChatId }) => {
    const [messages, setMessages] = useState(dummyMessages);
    const [input, setInput] = useState("");
    const theme = useSelector((state) => state.app.theme);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setMessages([...messages, { id: messages.length + 1, sender: "Me", content: input }]);
        setInput("");
    };

    return (
        <div className={styles.chatBox + " flex-grow-1 d-flex flex-column h-100 p-3"}>
            <div className="flex-grow-1 overflow-auto mb-3">
                {messages.map((msg) => (
                    <div key={msg.id} className={"mb-2 " + (msg.sender === "Me" ? "text-end" : "text-start")}>
                        <span
                            className={
                                "d-inline-block p-2 rounded " +
                                (msg.sender === "Me"
                                    ? theme === "dark"
                                        ? "bg-primary text-white"
                                        : "bg-primary text-white"
                                    : theme === "dark"
                                    ? "bg-secondary text-dark"
                                    : "bg-light text-dark")
                            }
                        >
                            <b>{msg.sender !== "Me" ? msg.sender + ": " : null}</b>
                            {msg.content}
                        </span>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSend} className="d-flex gap-2">
                <input
                    className="form-control"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button className="btn btn-primary" type="submit">
                    Send
                </button>
            </form>
        </div>
    );
};

export default ChatBox;
