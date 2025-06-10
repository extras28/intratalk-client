import { useSelector } from "react-redux";
import styles from "../pages/ChatLayout.module.scss";
import AppResource from "../../../shared/constant/AppResource";

// Dummy data for chat list
const chatList = [
    { id: 1, name: "Alice", lastMessage: "Hi there!" },
    { id: 2, name: "Bob", lastMessage: "How are you?" },
    { id: 3, name: "Charlie", lastMessage: "Let's meet up." },
    { id: 4, name: "David", lastMessage: "Did you finish the project?" },
    { id: 5, name: "Eve", lastMessage: "Can we reschedule our call?" },
    { id: 6, name: "Frank", lastMessage: "I sent you the files." },
    { id: 7, name: "Grace", lastMessage: "Looking forward to your feedback." },
    { id: 8, name: "Hannah", lastMessage: "Thanks for your help!" },
    { id: 9, name: "Ian", lastMessage: "Let's catch up soon." },
    { id: 10, name: "Jack", lastMessage: "I have a question about the report." },
    { id: 11, name: "Kathy", lastMessage: "Can you review my code?" },
    { id: 12, name: "Leo", lastMessage: "What time is the meeting?" },
    { id: 13, name: "Mia", lastMessage: "I love your new project!" },
    { id: 14, name: "Nina", lastMessage: "Let's collaborate on this." },
    { id: 15, name: "Oscar", lastMessage: "Great job on the presentation!" },
    { id: 16, name: "Paul", lastMessage: "I need your input on this." },
    // { id: 17, name: "Quinn", lastMessage: "Can you send me the details?" },
    // { id: 18, name: "Rachel", lastMessage: "I'm available for a call." },
    // { id: 19, name: "Sam", lastMessage: "Thanks for the update." },
    // { id: 20, name: "Tina", lastMessage: "Let's finalize the plans." },
    // { id: 21, name: "Uma", lastMessage: "I appreciate your support." },
    // { id: 22, name: "Vera", lastMessage: "Can we discuss this later?" },
    // { id: 23, name: "Will", lastMessage: "I'm excited about the new project!" },
    // { id: 24, name: "Xena", lastMessage: "Let's brainstorm some ideas." },
    // { id: 25, name: "Yara", lastMessage: "I have some suggestions for you." },
    // { id: 26, name: "Zane", lastMessage: "Thanks for your patience." },
    // { id: 27, name: "Zoe", lastMessage: "I hope you're doing well." },
    // { id: 28, name: "Aaron", lastMessage: "Can you help me with this?" },
    // { id: 29, name: "Bella", lastMessage: "Let's catch up over coffee." },
    // { id: 30, name: "Cody", lastMessage: "I have a new idea to share." },
    // { id: 31, name: "Diana", lastMessage: "I need your feedback on this." },
    // { id: 32, name: "Ethan", lastMessage: "Let's schedule a meeting." },
    // { id: 33, name: "Fiona", lastMessage: "I found a great resource for you." },
    // { id: 34, name: "George", lastMessage: "Can we collaborate on this?" },
    // { id: 35, name: "Holly", lastMessage: "I appreciate your insights." },
    // { id: 36, name: "Ian", lastMessage: "Let's work together on this." },
];

const ChatSidebar = ({ onSelectChat, selectedChatId }) => {
    const theme = useSelector((state) => state.app.theme);
    return (
        <div
            className={`${styles.chatSidebar} border-end h-100 overflow-auto`}
            style={{
                maxHeight: `calc(100vh - var(--header-height-md, 64px))`,
                // Responsive header height for different breakpoints
                "--header-height-xs": "48px",
                "--header-height-sm": "56px",
                "--header-height-md": "64px",
                "--header-height-lg": "72px",
            }}
        >
            <h5 className="mb-3">Chats</h5>
            <ul className="list-unstyled">
                {chatList.map((chat, idx) => (
                    <li
                        key={chat.id}
                        className={`p-2 ${
                            selectedChatId === chat.id
                                ? "bg-primary text-white"
                                : theme === "dark"
                                ? "bg-dark-subtle text-light"
                                : "bg-light text-dark"
                        }`}
                        style={{ cursor: "pointer" }}
                        onClick={() => onSelectChat(chat.id)}
                    >
                        <div className="d-flex align-items-center gap-2">
                            <img
                                src={
                                    AppResource.keens.Avatars[
                                        `${String(idx + 1).padStart(3, "0")}_${
                                            chat.name.toLowerCase().includes("girl") ||
                                            chat.name.toLowerCase().includes("mia") ||
                                            chat.name.toLowerCase().includes("nina")
                                                ? "girl"
                                                : "boy"
                                        }`
                                    ] || AppResource.keens.Avatars["001_boy"]
                                }
                                alt={chat.name}
                                width={32}
                                height={32}
                                className="rounded-circle border"
                            />
                            <div>
                                <div className="fw-bold">{chat.name}</div>
                                <div className="small text-truncate">{chat.lastMessage}</div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatSidebar;
