import React, { useRef, useState, useEffect } from 'react';
import '../styles/chatInputBox.css';
import { useDispatch } from 'react-redux';
import { question } from '../store/slice';
import { asyncAnswerFetch } from '../store/slice';
import CloseImg from '../constants/close-quick-menu.png';
import Img from '../constants/quick-menu.png';

// 엔터 누르면 전송되도록
export default function ChatInputBox() {
    const [isClicked, setIsClicked] = useState(false);
    const dispatch = useDispatch();
    const textArea = useRef();
    const quickBtn = useRef(null);

    const submitMessage = async (e) => {
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

            textArea.current.value = "";
            textArea.current.blur();
            textArea.current.style.height = 'auto';
        }
    };

    const showQuickMenu = (e) => {
        isClicked ? setIsClicked(!isClicked) : setIsClicked(!isClicked);
    };

    useEffect(() => {
        if (isClicked) {
            quickBtn.current.style.height = 249 + 'px';
            quickBtn.current.scrollIntoView({ behavior: "smooth" });
        } else {
            quickBtn.current.style.height = 0 + 'px';
        }
    }, [isClicked])

    return (
        <>
            <div ref={quickBtn} ></div>
            <div className='chat-bottom'>
                <div id='chat-input-box' className={isClicked ? 'show-menu' : ''}>
                    <button className='chat-menu-btn'
                        onClick={showQuickMenu}>
                        {isClicked ? <img src={CloseImg} width={18} height={15} />
                            : <img src={Img} width={18} height={15} />}
                    </button>
                    <div id='chat-input-box' className='chat-send-form'>
                        <textarea rows={1} className='chat-textarea'
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
                        <button className='chat-submit-btn'>전송</button>
                    </div>
                    <div id='quick-btn-group' className={isClicked ? '' : 'hide-menu'}>
                        <button className='quick-btn'>처음으로</button>
                        <button className='quick-btn'>챗봇사용법</button>
                        <button className='quick-btn'>상담이력</button>
                        <button className='quick-btn'>챗봇종료</button>
                    </div>
                </div>
            </div>
        </>
    );
}