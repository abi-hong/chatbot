import '../styles/question.css';

export default function Question(props) {
    //debugger;

    return (
        <div className="question-box">
            <div className="question-time-div">
                <span className="question-time-span">{props.time}</span>
            </div>
            <p className="question-text">
                {props.question}
            </p>
        </div>
    );
}