import { createStore } from 'redux';

const initState = {
    mode: 'WELCOME',
    showId: 0,
    message : [
        //{id: 1, class: 'question' or 'answer', text: 'text1111'},
    ]
}

function reducer(state=initState, action) {
    if (action.type === 'WELCOME') {
    }
    if (action.type === 'CHATTING') { // 질문 발화할 때,
        console.log('state', state);
        let newShowId = state.showId + 1;
        let newMessage = [
            ...state.message,
            {
                id: newShowId,
                class: action.class,
                text: action.question
            }
        ];

        return {
            ...state,
            showId: newShowId,
            message: newMessage,
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