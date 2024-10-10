/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {useEffect, useRef, useState} from 'react';
import {Intro} from '../components/follower/Intro';
import {Play} from '../components/follower/Play';
import Reward from '../components/follower/Reward';
import Standby from '../components/follower/Standby';

// NOTE: WebSocket で受信したフォロワー側のメッセージの状態
type FollowerScreenStatus = 'standby' | 'introduction' | 'playing' | 'reward';

export function Follower() {
  const [state, setState] = useState<FollowerScreenStatus>('standby');
  const wsRef = useRef<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket(process.env.REACT_APP_WSS_URL ?? '');
    function onMessage(event: MessageEvent<string>) {
      console.log('onMessage', event.data);
      // state 更新のメッセージかどうかの判定が必要
      if (event.data.startsWith('state:')) {
        const s = event.data.split(':')[1];
        setState(s as FollowerScreenStatus);
      }
    }
    ws.addEventListener('message', onMessage);
    wsRef.current = ws;
    return () => {
      ws.close();
      ws.removeEventListener('message', onMessage);
    };
  }, []);

  const Screen = ({state}: {state: FollowerScreenStatus}) => {
    switch (state) {
      case 'standby':
        return <Standby />;
      case 'introduction':
        return <Intro />;
      case 'playing':
        return (
          <Play
            onTapBalloon={() => {
              wsRef.current?.send('SENDMSG Leader addBalloon');
            }}
          />
        );
      case 'reward':
        return <Reward />;
      default:
        return null;
    }
  };

  return (
    <div css={screenStyle}>
      <Screen state={state} />
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
