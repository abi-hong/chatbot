export const getGPTAnswer = (message) => {
    return async (dispatch) => {
        console.log('첫번째 async 함수');
        dispatch({ type: 'LOADING' });

        const sendRequest = async () => {
            console.log('두번째 async 함수');
            const response = await fetch('http://localhost:3001/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message })
            });
            const data = await response.json();
            console.log('answer', data.message);
            return data;
        }

        try {
            const response = await sendRequest();
            console.log('두번째 async 함수 종료');
            dispatch({ type: 'CHATTING', class: 'answer', answer: response.message });
        }
        catch (error) {
            return { isError: true, error };
        }
        console.log('첫번째 async함수 정상종료');
    };
};
