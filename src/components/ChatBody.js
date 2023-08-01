import '../styles/chatBody.css';
import Answer from './Answer';
import Question from './Question';

export default function ChatBody(props) {
    let isShow = false;


    console.log('ChatBody props', props);


    return (
        <div className="chat-body">
            {/*{chatContent}*/}
            <Question isShow={isShow} questionId={props.questionId} question={props.question}/>
            {/*<Answer className="answer-box-animation" isShow={isShow} />*/}
        </div>
    );
}