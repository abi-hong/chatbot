import '../styles/answer.css';

export default function Loading(props) {
    return (
        <div className="answer-box">
            <div className="time-div">
                <span className="time-span">{props.time}</span>
            </div>
            <p className="answer-text">Loading...</p>
        </div>
    );
}