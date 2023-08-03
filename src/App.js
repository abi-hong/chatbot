import React, { useState } from 'react';
import './App.css';
import ChatHeader from './components/ChatHeader';
import ChatInputBox from './components/ChatInputBox';
import ChatBody from './components/ChatBody';

const topCss = {
  minHeight: "100vh"
}

function App() {
  return (
    <div style={topCss} className="App">
      <ChatHeader className="chat-header"></ChatHeader>
      {/*<div className="chat-body">*/}
        <ChatBody className="ChatBody"></ChatBody>
        <ChatInputBox className="ChatInputBox"></ChatInputBox>
      {/*</div>*/}
    </div>
  );
}

export default App;
