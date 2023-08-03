import { createStore } from 'redux';

const initState = {
    mode: 'WELCOME',
    welcome_content: "안녕하세요. 챗봇입니다!",
    questions: ["챗봇질문1", "챗봇질문2"],
    answers: [],
}

function reducer(state=initState, action) {
    if (action.type === 'WELCOME') {
        return {...state, mode: 'WELCOME' };
    }
    if (action.type === 'CHATTING') {
        let newQuestions = [
            ...state.questions,
            action.question // 배열로 저장됨
        ];

        return {
            ...state,
            questions: newQuestions ,
            mode: 'SHOW'
        }; //발화 데이터 추가하기
    }
    if (action.type === 'SHOW') {

    }
    return state;
}

export default createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);