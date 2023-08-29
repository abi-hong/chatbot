import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import chattingSlice from './slice';

const store = configureStore({
    reducer: {
        //welcome: welcomeSlice.reducer,
        chatting: chattingSlice.reducer
    }
})

export default store;

/*const initState = {
    mode: 'WELCOME',
    showId: 0,
    message : [
        //{id: 1, class: 'question' or 'answer', text: 'text1111'},
    ]
}*/

/*
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
    if (action.type === 'LOADING') {
        console.log('state', state);

        return {
            ...state,
            mode: 'LOADING'
        };
    }
    return state;
}
*/

/*
export default createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
*/