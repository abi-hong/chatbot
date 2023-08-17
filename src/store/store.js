import { createStore } from 'redux';

const initState = {
    mode: 'Welcome',
    show_questionId: 0,
    max_questionId: 0,
    questions: [
        //{ id: 1, question: '챗봇질문1'},
    ],
    show_answerId: 0,
    max_answerId: 0,
    answers: [
        //{ id: 1, answer: '챗봇질문1에 대한 답변1'},
    ],
}

function reducer(state=initState, action) {
    if (action.type === 'WELCOME') {
    }
    if (action.type === 'CHATTING') { // 질문 발화할 때,
        console.log('state', state);

        return {
            ...state,
            mode: 'CHATTING'
        }; //발화 데이터 추가하기
    }
    if (action.type === 'CHATTING_SHOW') { // 질문 발화 후, 화면에 보여줄 때
        console.log('state', state);
    }
    return state;
}

export default createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);