import './App.css';
import ChatHeader from './components/ChatHeader';
import ChatInputBox from './components/ChatInputBox';
import ChatBody from './components/ChatBody';

const topCss = {
  
}

function App() {
  return (
    <div style={topCss} className="App">
      <ChatHeader></ChatHeader>
      <div className="chat-body">
        <ChatBody></ChatBody>
        <ChatInputBox className="ChatInputBox"></ChatInputBox>
      </div>
    </div>
  );
}

export default App;
