import '../styles/answer.css';
import { useSelector } from 'react-redux';

export default function Answer(props) {
    return (
        <div className="answer-box">
            <div className="time-div">
                <span className="time-span">{props.time}</span>
            </div>
            <p className="answer-text">{props.answer}</p>
        </div>
    );
}