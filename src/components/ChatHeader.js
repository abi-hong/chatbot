import '../styles/chatHeader.css';

export default function ChatHeader() {
    return (
        <div className='chat-header'>
            <div className='chat-header-title'>Chatbot</div>
            <button className='chat-header-btn'>Close</button>
        </div>
    );
}