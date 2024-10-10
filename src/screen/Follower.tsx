import {useEffect, useRef, useState} from "react";

export function Follower() {
  const [state, setState] = useState<string>('standby');
  const wsRef = useRef<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket(process.env.REACT_APP_WSS_URL ?? '');
    function onMessage(event: MessageEvent<string>) {
      console.log('onMessage', event.data);
      // state 更新のメッセージかどうかの判定が必要
      if(event.data.startsWith('state:')){
        setState(event.data);
      }
    }
    ws.addEventListener('message', onMessage);
    wsRef.current = ws;
    return () => {
      ws.close();
      ws.removeEventListener('message', onMessage);
    };
  }, []);

    return (
        <div>
            <h1>利用者向けコンテンツ</h1>
            <p>現在の状態: {state}</p>
        </div>
    )
}