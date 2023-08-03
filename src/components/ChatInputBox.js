import React, { useRef } from 'react';
import '../styles/chatInputBox.css';
import { connect } from 'react-redux';

// 엔터 누르면 전송되도록
function ChatInputBox(props) {
    const textArea = useRef();
    const btn = useRef();

    const submitMessage = (e) => {
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
            props.onKeyDown(e.target.value);
            
            textArea.current.value = "";
            textArea.current.blur();
            textArea.current.style.height = 'auto';
        }
    };

    /*const resizeScrollHeight = (e) => {
        let row = e.target.value.split('\n').length;
        if () {
            console.log('row', row);
            textArea.current.style.height = 'auto';
            textArea.current.style.height = textArea.current.scrollHeight + 'px';
            console.log('textArea.current.scrollHeight', textArea.current.scrollHeight);
        }
    }*/

    return (
        <div className='chat-input-box'>
            <button className='chat-input-box-btn' ref={btn}></button>
            <textarea rows={1} className='chat-input-box-textarea'
                onKeyDown={submitMessage.bind(this)} 
                /*onChange={resizeScrollHeight}*/
                ref={textArea} placeholder='궁금한 내용을 입력해주세요.'>
            </textarea>
        </div>
    );
}

export default connect(
    null,
    function(dispatch) {
        return {
            onKeyDown: function (question) {
                dispatch({ type: 'CHATTING', question: question });
            }
        }
    }
)(ChatInputBox);