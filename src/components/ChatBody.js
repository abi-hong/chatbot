import React, { useEffect } from 'react';
import '../styles/chatBody.css';
import Welcome from './Welcome';
import Answer from './Answer';
import Question from './Question';
import Loading from './Loading.js';
import { connect } from 'react-redux';

const questions = [];

function ChatBody(props) {
    let date = new Date();
    let hours = date.getHours();
    let ampm = hours < 12 ? "오전" : "오후";
    let hour = hours < 12 ? hours : hours - 12;
    let minute = date.getMinutes();

    let timestring = `${ampm} ${hour}:${minute}`;
    
    useEffect(() => {
        if(props.question) {
            console.log('useEffect first');
        }
        console.log('useEffect props.question', props.question);
    }, [props.question])
    
    return (
        <>
            <Welcome></Welcome>
            <div className="chat-body">
                <Question question={props.question} time={timestring} />
                <Loading time={timestring} />
            </div>
        </>
    );
}

export default connect(
    function (state) {
        if (state.mode === 'WELCOME') {
            console.log('ChatBody state.mode === WELCOME');
        }
        if (state.mode === 'CHATTING') {
            console.log('ChatBody state.mode === CHATTING');
            return {
                question: localStorage.getItem('question')
            }
        }
    },
    null
)(ChatBody);