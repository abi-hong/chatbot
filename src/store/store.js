import { configureStore } from '@reduxjs/toolkit';
import chattingSlice from './slice';

const store = configureStore({
    reducer: {
        chatting: chattingSlice.reducer
    }
})

export default store;