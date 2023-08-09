import './App.css';
import ChatHeader from './components/ChatHeader';
import ChatInputBox from './components/ChatInputBox';
import ChatBody from './components/ChatBody';


export default function App() {
  return (
    <div className="App">
      <ChatHeader></ChatHeader>
      {/*<div className="chat-body">*/}
        <ChatBody></ChatBody>
        <ChatInputBox></ChatInputBox>
      {/*</div>*/}
    </div>
  );
}