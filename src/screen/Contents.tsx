import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import '../App.css';
import logo from '../logo.svg';

let ws: WebSocket;
function onMessage(event: MessageEvent<string>) {
  console.log('onMessage', event.data);
}
function connect() {
  ws = new WebSocket(process.env.REACT_APP_WSS_URL ?? '');
  ws.addEventListener('message', onMessage);
}
window.addEventListener('load', connect);

export function Contents() {
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      // ws?.close();
      ws?.removeEventListener('message', onMessage);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>コンテンツ操作の画面</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <button
          onClick={() => {
            navigate('/success');
          }}>
          コンテンツ成功
        </button>
        <button
          type="button"
          onClick={() => {
            console.log('send', ws);
            ws?.send("SENDMSG Leader HeyLeaderWhat'sup?");
          }}>
          送信
        </button>
      </header>
    </div>
  );
}
