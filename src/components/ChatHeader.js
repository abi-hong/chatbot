import '../styles/chatHeader.css';

export default function ChatHeader() {
    return (
        <div className='chat-header'>
            <div className='chat-header-title'>Chatbot</div>
            <div className='chat-header-btn'>
                <input type="button" value="상담종료" />
            </div>
        </div>
    );
}