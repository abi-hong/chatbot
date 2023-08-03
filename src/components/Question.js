import gasp from 'gsap';
import '../styles/question.css';


export default function Question(props) {
    console.log('Question props', props);

    return (
        <div className="question-box">
            <p className="question-text">{props.question}</p>
        </div>
    );
}