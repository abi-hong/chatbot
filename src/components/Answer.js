import '../styles/answer.css';
import { useSelector } from 'react-redux';

export default function Answer(props) {
    const status = useSelector(state=>state.chatting.status);

    return (
        <div className="answer-box">
            <div className="time-div">
                <span className="time-span">{props.time}</span>
            </div>
            <p className="answer-text">{status === 'loading' ? 'loading' : props.answer}</p>
        </div>
    );
}