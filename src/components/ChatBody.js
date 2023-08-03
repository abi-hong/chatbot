import '../styles/chatBody.css';
import Answer from './Answer';
import Question from './Question';
import { connect } from 'react-redux';

function ChatBody(props) {
    console.log('ChatBody props', props);

    return (
        <div className="chat-body">
            <Question />
            {/*<Answer className="answer-box-animation" isShow={isShow} />*/}
        </div>
    );
}

export default connect(
    null,
    null
)(ChatBody);