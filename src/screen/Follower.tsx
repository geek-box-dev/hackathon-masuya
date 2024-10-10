/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {useEffect, useRef, useState} from 'react';
import {Intro} from '../components/Intro';

// NOTE: WebSocket で受信したメッセージの状態
type Status = 'notStart' | 'introduction' | 'play' | 'success' | 'end';

export function Follower() {
  const [state, setState] = useState<string>('standby');
  const wsRef = useRef<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket(process.env.REACT_APP_WSS_URL ?? '');
    function onMessage(event: MessageEvent<string>) {
      console.log('onMessage', event.data);
      // state 更新のメッセージかどうかの判定が必要
      if (event.data.startsWith('state:')) {
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
    <div css={screenStyle}>
      <Intro />
    </div>
  );
}

const screenStyle = css({
  display: 'flex',
  // backgroundColor: 'red',
  width: '100vw',
  height: '100vh',
});
