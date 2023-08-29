import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const asyncAnswerFetch = createAsyncThunk(
    'chattingSlice/asyncAnswerFetch',
    async (message) => {
        const response = await fetch('http://localhost:3001/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message })
        });
        const data = await response.json();
        console.log('answer', data.message);
        return data.message;
    }
);

const chattingSlice = createSlice({
    name: 'chattingSlice',
    initialState: {
        message: [],
        status: 'loading'
    },
    reducers: {
        question: (state, action) => {
            state.message.push({ class: 'question', text: action.payload });
        },
    },
    extraReducers: (builder) => {
        builder.addCase(asyncAnswerFetch.pending, (state, action) => {
            state.status = 'loading';
        })
        builder.addCase(asyncAnswerFetch.fulfilled, (state, action) => {
            state.status = 'success';
            state.message.push({ class: 'answer', text: action.payload });
        })
        builder.addCase(asyncAnswerFetch.rejected, (state, action) => {
            state.status = 'fail';
        })
    }
});

export default chattingSlice;
export const { question } = chattingSlice.actions;
export { asyncAnswerFetch }