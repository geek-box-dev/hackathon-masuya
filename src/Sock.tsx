import {useEffect} from "react";

let ws: WebSocket;
function onMessage(event: MessageEvent<string>) {
  console.log('onMessage', event.data);
}

function connect() {
  ws = new WebSocket('wss://1yrnwabx76.execute-api.ap-northeast-1.amazonaws.com/dev/');
  ws.addEventListener('message', onMessage);
}
window.addEventListener('load', connect);

export function Sock() {
  useEffect(() => {
    return () => {
      ws?.close();
      ws?.removeEventListener('message', onMessage);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => {
        console.log('send', ws);
        ws?.send('SENDMSG Leader piyopiyo')
      }}
    >
      送信
    </button>
  );
}