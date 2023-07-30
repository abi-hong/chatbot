import React, { useRef } from 'react';
import '../styles/chatInputBox.css';

// 엔터 누르면 전송되도록
export default function ChatInputBox() {
    //const question_message = "";
    const textArea = useRef();
    const btn = useRef();

    const submitMessage = (e) => {
        //console.log(e);
        if (e.nativeEvent.isComposing) { // isComposing 이 true 이면
            textArea.current.style.height = 'auto';
            textArea.current.style.height = textArea.current.scrollHeight + 'px';
            return;// 조합 중이므로 동작을 막는다.
        }

        if (e.key === 'Enter' && e.shiftKey) { // [shift] + [Enter] 치면 걍 리턴
            return;
        } else if (e.key === 'Enter') { // [Enter] 치면 메시지 보내기
            console.log(e.target.value);
            e.target.value = "";
            //sendText(e);
        }
    };

    const handleResizeHeight = (e) => {
        console.log(e);
        textArea.current.style.height = 20+'px';
        textArea.current.style.height = textArea.current.scrollHeight + 'px';
        //console.log('before btn.current.style.height', btn.current.style.height);
        //btn.current.style.height = btn.current.style.height + textArea.current.scrollHeight + 'px';
        //console.log('after btn.current.style.height', btn.current.style.height);
    }

    return (
        <div className='chat-input-box'>
            <button className='chat-input-box-btn' ref={btn}></button>
            <textarea rows={1} className='chat-input-box-textarea'
                onKeyDown={submitMessage}
                /*onChange={handleResizeHeight}*/
                ref={textArea} placeholder='궁금한 내용을 입력해주세요.'></textarea>
        </div>
    );
}