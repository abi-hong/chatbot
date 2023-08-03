import '../styles/question.css';

export default function Question(props) {
    //debugger;

    return (
        <div className="question-box">
            <p className="question-text">
                {props.question}
            </p>
        </div>
    );
}