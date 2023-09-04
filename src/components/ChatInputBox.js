import React, { useRef, useState } from 'react';
import '../styles/chatInputBox.css';
import { useDispatch } from 'react-redux';
import { question } from '../store/slice';
import { asyncAnswerFetch } from '../store/slice';
import CloseImg from '../constants/close-quick-menu.png';
import Img from '../constants/quick-menu.png';

// 엔터 누르면 전송되도록
export default function ChatInputBox() {
    const [imgQuickMenu, setImgQuickMenu] = useState(Img);
    const [isClicked, setIsClicked] = useState(false);

    const dispatch = useDispatch();
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
            //props.onKeyDown(e.target.value);

            textArea.current.value = "";
            textArea.current.blur();
            textArea.current.style.height = 'auto';
        }
    };

    return (
        <div className='chat-input-box'>
            <button className='chat-input-button' 
                onClick={(e) => {
                    if (isClicked) {
                        setImgQuickMenu(CloseImg)
                        setIsClicked(false)
                    } else {
                        setImgQuickMenu(Img)
                        setIsClicked(true)
                    }
                }}
            ><img src={imgQuickMenu} width={18} height={15}/></button>
            <textarea rows={1} className='chat-input-box-textarea'
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        console.log('e.target.value', e.target.value);
                        dispatch(question(e.target.value));
                        dispatch(asyncAnswerFetch(e.target.value));
                    }
                }
                }
                /*onChange={resizeScrollHeight}*/
                ref={textArea} placeholder='궁금한 내용을 입력해주세요.'>
            </textarea>
            <button className='chat-input-box-btn'>전송</button>
        </div>

    );
}