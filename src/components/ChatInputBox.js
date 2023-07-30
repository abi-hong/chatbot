import '../styles/chatInputBox.css';

// 엔터 누르면 전송되도록
export default function ChatInputBox() {
    return (
        <div className='chat-input-box'>
            <button className='chat-input-box-btn'></button>
            <textarea className='chat-input-box-textarea' ></textarea>
        </div>
    );
}