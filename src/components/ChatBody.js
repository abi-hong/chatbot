import '../styles/chatBody.css';
import Answer from './Answer';
import Question from './Question';
import { connect } from 'react-redux';

function ChatBody(props) {
    const question_answers = [];

    for (let i = 0; i < props.maxId; i++) {
        question_answers.push(
            <>
                <Question data-id={i+1} question={props.questions[i].question} />
                <Answer data-id={i+1} question={props.answers[i].answers} />
            </>
        );
    }

    return (
        <div className="chat-body">
            {question_answers}
        </div>
    );
}

export default connect(
    function (state) {
        if (state.mode === 'CHATTING_SHOW') {
            return {
                maxId: state.max_questionId,
                questions: state.questions,
                answers: state.answers
            }
        }
    },
    null
)(ChatBody);