import React, { useRef } from 'react';
import '../styles/chatInputBox.css';
import { connect } from 'react-redux';
import Question from './Question';

// 엔터 누르면 전송되도록
function ChatInputBox(props) {
    const textArea = useRef();

    const submitMessage = async (e) => {
        //console.log(e);
        if (e.nativeEvent.isComposing) { // isComposing 이 true 이면
            return;// 조합 중이므로 동작을 막는다.
        }

        if (e.key === 'Enter' && e.shiftKey) { // [shift] + [Enter] 치면 걍 리턴
            textArea.current.style.height = 'auto';
            textArea.current.style.height = textArea.current.scrollHeight + 'px';
            return;
        }
        else if (e.key === 'Enter') { // [Enter] 치면 메시지 보내기
            console.log(e.target.value);
            localStorage.setItem('question', e.target.value);
            props.onKeyDown(e.target.value);

            textArea.current.value = "";
            textArea.current.blur();
            textArea.current.style.height = 'auto';
        }
    };

    return (
        <div className='chat-input-box'>
            <textarea rows={1} className='chat-input-box-textarea'
                onKeyDown={submitMessage.bind(this)}
                /*onChange={resizeScrollHeight}*/
                ref={textArea} placeholder='궁금한 내용을 입력해주세요.'>
            </textarea>
            <button className='chat-input-box-btn'>전송</button>
        </div>
    );
}

async function getGPTAnswer(message) {
    try {
        const response = await fetch('http://localhost:3001/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message })
        });
        const data = await response.json();
        console.log(data.message);
        return { isError: false, data };
    } catch (error) {
        console.error(error);
        return { isError: true, error };
    }
}

export default connect(
    null,
    function (dispatch) {
        return {
            onKeyDown: function(question) {
                dispatch({ type: 'CHATTING', class: 'question', question });
            }
        }
    }
)(ChatInputBox);