import { createStore } from 'redux';

const initState = {
    mode: 'CHATTING_SHOW',
    welcome_content: "안녕하세요. 챗봇입니다!",
    show_questionId: 0,
    max_questionId: 1,
    questions: [
        { id: 1, question: '챗봇질문1'},
        //{ id: 2, question: '챗봇질문2'},
    ],
    //show_answerId: 0,
    max_answerId: 2,
    answers: [
        { id: 1, answer: '챗봇질문1에 대한 답변1'},
        { id: 2, answer: '챗봇질문2에 대한 답변2'},
    ],
}

function reducer(state=initState, action) {
    if (action.type === 'WELCOME') {
        return {...state, mode: 'CHATTING_SHOW' };
    }
    if (action.type === 'CHATTING') { // 질문 발화할 때,
        let newId = state.max_questionId + 1;
        let newShowId = state.show_questionId + 1;
        let newQuestions = [
            ...state.questions,
            {
                id: newId,
                question: action.question
            }
        ];

        return {
            ...state,
            max_questionId: newId,
            show_questionId: newShowId,
            questions: newQuestions,
            mode: 'CHATTING_SHOW'
        }; //발화 데이터 추가하기
    }
    if (action.type === 'CHATTING_SHOW') { // 질문 발화 후, 화면에 보여줄 때
        console.log(state);
    }
    return state;
}

export default createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);