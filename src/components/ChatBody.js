import React, { useEffect, useRef, useState } from 'react';
import '../styles/chatBody.css';
import Welcome from './Welcome';
import Answer from './Answer';
import Question from './Question';
import { useSelector } from 'react-redux';


export default function ChatBody() {
    const [messages, setMessages] = useState([]);
    const text = useSelector(state=>state.chatting.message);
    const status = useSelector(state=>state.chatting.status);
    const messageEndRef = useRef(null);

    let date = new Date();
    let hours = date.getHours();
    let ampm = hours < 12 ? "오전" : "오후";
    let hour = hours < 12 ? hours : hours - 12;
    let minute = date.getMinutes();
    let timestring = `${ampm} ${hour}:${minute}`;

    useEffect(() => {
        console.log('useEffect before message', text);
        if(status === 'loading') {
            setMessages([...text, {class: "answer", text: 'loading...'}])
        } else {
            setMessages(text)
        }
        console.log('main으로 빠짐, useEffect 종료');
        console.log('useEffect after message', text);
    }, [status, text]);
    
    // 맨 아래로 스크롤
    useEffect(() => {
        // scrollIntoView() : 자신이 호출된 요소가 사용자에게 표시되도록 상위 컨테이너를 스크롤
        messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [messages])

    return (
        <>
            <Welcome></Welcome>
            <div className="chat-body">
                {messages && messages.map((message, index) => (
                    message.class === 'question' ?
                    <Question key={message.id} question={message.text} time={timestring} />
                    : <Answer key={message.id} answer={message.text} time={timestring} />
                ))}
                <div ref={messageEndRef}></div>
            </div>
        </>
    );
}
