import React, { useEffect, useRef, useState } from 'react';
import '../styles/chatBody.css';
import Welcome from './Welcome';
import Answer from './Answer';
import Question from './Question';
import { useDispatch, useSelector } from 'react-redux';


export default function ChatBody() {
    const [messages, setMessages] = useState([]);
    const text = useSelector(state=>state.chatting.message);

    let date = new Date();
    let hours = date.getHours();
    let ampm = hours < 12 ? "오전" : "오후";
    let hour = hours < 12 ? hours : hours - 12;
    let minute = date.getMinutes();

    let timestring = `${ampm} ${hour}:${minute}`;

    useEffect(() => {
        //messages && messages.map((message) => console.log(message));
        console.log('useEffect message', text);
        setMessages(text);
        console.log('main으로 빠짐, useEffect 종료');
    }, [text]);

    return (
        <>
            <Welcome></Welcome>
            <div className="chat-body">
                {messages && messages.map((message) => (
                    message.class === 'question' ?
                    <Question key={message.id} question={message.text} time={timestring} />
                    : <Answer key={message.id} answer={message.text} time={timestring} />
                ))}
            </div>
        </>
    );
}
