import React from 'react';
import './App.css';
import ChatHeader from './components/ChatHeader';
import ChatInputBox from './components/ChatInputBox';
import ChatBody from './components/ChatBody';

const topCss = {
  minHeight: "100vh"
}

export default function App() {
  return (
    <div style={topCss} className="App">
      <ChatHeader></ChatHeader>
      {/*<div className="chat-body">*/}
        <ChatBody></ChatBody>
        <ChatInputBox></ChatInputBox>
      {/*</div>*/}
    </div>
  );
}