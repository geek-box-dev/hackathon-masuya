/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {useEffect, useRef, useState} from "react";
import {Play} from '../components/follower/Play';
import Standby from "../components/follower/Standby";
import Reward from "../components/follower/Reward";
import {Intro} from '../components/follower/Intro';

// NOTE: WebSocket で受信したメッセージの状態
type Status = 'standby' | 'introduction' | 'playing' | 'reward';

export function Follower() {
  const [state, setState] = useState<Status>('reward');
  const wsRef = useRef<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket(process.env.REACT_APP_WSS_URL ?? '');
    function onMessage(event: MessageEvent<string>) {
      console.log('onMessage', event.data);
      // state 更新のメッセージかどうかの判定が必要
      if (event.data.startsWith('state:')) {
        const s = event.data.split(':')[1];
        setState(s as Status);
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
      {
        {
          'standby': <Standby />,
          'introduction': <Intro />,
          'playing': <Play />,
          'reward': <Reward />,
        }[state as Status] || null
      }
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
