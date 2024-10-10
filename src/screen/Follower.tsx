/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {useEffect, useRef, useState} from 'react';
import Reward from '../component/Reward';
import Standby from '../component/Standby';
import {Play} from '../components/follower/Play';

// NOTE: WebSocket で受信したメッセージの状態
type Status = 'standby' | 'introduction' | 'playing' | 'reward' | 'ended';

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
        const s = event.data.split(':')[1];
        setState(s);
      }
    }
    ws.addEventListener('message', onMessage);
    wsRef.current = ws;
    return () => {
      ws.close();
      ws.removeEventListener('message', onMessage);
    };
  }, []);

  if (state === 'standby') {
    return <Standby />;
  }

  if (state === 'reward') {
    return <Reward />;
  }

  return (
    <div css={screenStyle}>
      <Play />
    </div>
  );
}

const screenStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
  width: '100vw',
  height: '100vh',
  overflowX: 'hidden',
  backgroundImage:
    'repeating-linear-gradient(90deg, #DE5511 0, #DE5511 80px, #1B9443 80px, #1B9443 160px)',
});
