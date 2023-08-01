import gasp from 'gsap';
import '../styles/question.css';

const chatContent = []; // 발화 컴포넌트들

export default function Question(props) {
    chatContent.push({questionId: props.questionId, question: props.question});
    
    console.log('chatContent', chatContent);
    
    const sendText = (e, question_message) => {
        props.isShow = true;

        const tl = gasp.timeline();
    }

    console.log('Question props', props);

    return (
        <div className="question-box">
            <p className="question-text">{props.question}</p>
        </div>
    );
}