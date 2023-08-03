import '../styles/question.css';
import { connect } from 'react-redux';


function Question(props) {
    //debugger;
    console.log('Question props', props.questions);
    const questions = [];
    for(let i=0; i < props.questions.length; i++) {
        let question = props.questions[i];
        questions.push(
        <div className="question-box" >
            <p className="question-text">{question}</p>
        </div>
        );
    }

    return (
        <div>
            {questions}
        </div>
    );
}

export default connect(
    function(state) {
        /*if(state.mode === 'WELCOME') {
            return { questions: state.welcome_content};
        }*/
        return { questions: state.questions };
    },
    null
)(Question);