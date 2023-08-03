import '../styles/answer.css';

export default function Answer(props) {
    return (
        <div className="answer-box">
            <p className="answer-text">{props.answer}</p>
        </div>
    );
}