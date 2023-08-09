import React, { useEffect, useRef } from 'react';
import '../styles/chatBody.css';
import Answer from './Answer';
import Question from './Question';
import { connect } from 'react-redux';

function ChatBody(props) {
    let date = new Date();
    let hours = date.getHours();
    let ampm = hours < 12 ? "오전" : "오후";
    let hour = hours < 12 ? hours : hours - 12;
    let minute = date.getMinutes();

    let timestring = `${ampm} ${hour}:${minute}`;


    const question_answers = [];
    //const scrollRef = useRef();
    //console.log('scrollRef.current', scrollRef.current);

    for (let i = 0; i < props.maxQuestionId; i++) {
        question_answers.push(
            <>
                <Question data-id={i + 1} question={props.questions[i].question} time={timestring}/>
                <Answer data-id={i + 1} answer={props.answers[i].answer} time={timestring}/>
            </>
        );
    }

    /*useEffect(() => {
        console.log('useEffect');
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [question_answers]);*/

    return (
        <div className="chat-body">
            {question_answers}
            {/*<div ref={scrollRef} ></div>*/}
        </div>
    );
}

export default connect(
    function (state) {
        if (state.mode === 'CHATTING_SHOW') {
            console.log('ChatBody state.mode === CHATTING_SHOW');
            return {
                maxQuestionId: state.max_questionId,
                maxAnswerId: state.max_answerId,
                questions: state.questions,
                answers: state.answers
            }
        }
    },
    null
)(ChatBody);