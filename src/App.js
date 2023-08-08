import React from 'react';
import './App.css';
import ChatHeader from './components/ChatHeader';
import ChatInputBox from './components/ChatInputBox';
import ChatBody from './components/ChatBody';

const topCss = {
  position: "absolute",
  top: "0",
  zIndex: "2",
  width: "100%",
  height: "100%",
  display: "block"
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