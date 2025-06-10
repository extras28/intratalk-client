import { useSelector } from "react-redux";
import styles from "../pages/ChatLayout.module.scss";

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
];

const ChatSidebar = ({ onSelectChat, selectedChatId }) => {
    const theme = useSelector((state) => state.app.theme);
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
                                : theme === "dark"
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
