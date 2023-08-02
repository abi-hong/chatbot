import React, { useState } from 'react';
import './App.css';
import ChatHeader from './components/ChatHeader';
import ChatInputBox from './components/ChatInputBox';
import ChatBody from './components/ChatBody';

const topCss = {
  minHeight: "100vh"

}

function App() {
  const [questionId, setQuestionId] = useState(0);
  const [question, setQuestion] = useState("");

  const sendData = (data) => {
    console.log('sendData data', data);
    console.log('questionId', questionId);
    setQuestionId(questionId + 1);
    setQuestion(data);
  };

  return (
    <div style={topCss} className="App">
      <ChatHeader className="chat-header"></ChatHeader>
      {/*<div className="chat-body">*/}
        <ChatBody className="ChatBody" questionId={questionId} question={question}></ChatBody>
        <ChatInputBox className="ChatInputBox" sendData={sendData}></ChatInputBox>
      {/*</div>*/}
    </div>
  );
}

export default App;
