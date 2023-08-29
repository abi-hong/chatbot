import React, { useEffect, useRef, useState } from 'react';
import '../styles/chatBody.css';
import Welcome from './Welcome';
import Answer from './Answer';
import Question from './Question';
import Loading from './Loading.js';
import { useDispatch, useSelector } from 'react-redux';


export default function ChatBody() {
    const [messages, setMessages] = useState([]);
    //const dispatch = useDispatch();
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
        //dispatch(getGPTAnswer(current_q));
        console.log('main으로 빠짐, useEffect 종료');
    }, [text]); // Or [] if effect doesn't need props or state



    return (
        <>
            <Welcome></Welcome>
            <div className="chat-body">
                {messages && messages.map((message) => (
                    message.class === 'question' ?
                    <Question key={message.id} question={message.text} time={timestring} />
                    : message.class === 'answer' ?
                    <Answer key={message.id} question={message.text} time={timestring} /> 
                    : <Loading key={message.id} time={timestring} />
                ))}
            </div>
        </>
    );
}
/*
export default connect(
    function (state) {
        if (state.mode === 'WELCOME') {
            console.log('ChatBody state.mode === WELCOME');
        }
        if (state.mode === 'CHATTING') {
            console.log('ChatBody state.mode === CHATTING');
            return {
                message: state.message,
                question: localStorage.getItem('question')
            }
        }
        if (state.mode === 'LOADING') {
            console.log('ChatBody state.mode === LOADING');
            return {
                message: state.message
            }
        }
    },
    null
)(ChatBody);
*/