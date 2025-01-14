/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import { Intro } from '../components/follower/Intro';
import { Play } from '../components/follower/Play';
import Reward from '../components/follower/Reward';
import Standby from '../components/follower/Standby';

// NOTE: WebSocket で受信したフォロワー側のメッセージの状態
type FollowerScreenStatus = 'standby' | 'introduction' | 'playing' | 'reward';

// NOTE: websocket 送信されてくるメッセージの型
interface Message {
  command: "CONNECT" | "SENDMSG" | "SET" | "GET" | "CHROLE";
  body: string;
  success: boolean;
}

export function Follower() {
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState<FollowerScreenStatus>('standby');
  const wsRef = useRef<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket(process.env.REACT_APP_WSS_URL ?? '');
    function onMessage(event: MessageEvent<string>) {
      const { command, body, success }: Message = JSON.parse(event.data);
      console.log('received', { command, body, success });

      switch (command) {
        case 'SENDMSG':
          if (success && body.startsWith('state:')) {
            const s = body.split(':')[1];
            setState(s as FollowerScreenStatus);
          }
          return;
        case 'GET': {
          setIsLoading(false);
          if (!success) {
            return;
          }

          if (body === 'success') {
            setState('reward');
            return;
          }
          setState(body as FollowerScreenStatus);
          return;
        }
        default:
          break;
      }

      if (!success) {
        console.error('failed to command', { command, body });
        return;
      }
    }
    function onOpen() {
      ws.send('GET STATE');
    }
    ws.addEventListener('message', onMessage);
    ws.addEventListener('open', onOpen);
    wsRef.current = ws;
    return () => {
      ws.removeEventListener('open', onOpen);
      ws.removeEventListener('message', onMessage);
      ws.close();
    };
  }, []);

  const Screen = ({ state }: { state: FollowerScreenStatus }) => {
    if (isLoading) {
      return (
        <div css={loadingStyle}>
          <p>よみこみちゅう...</p>
        </div>
      );
    }

    switch (state) {
      case 'standby':
        return <Standby />;
      case 'introduction':
        return <Intro />;
      case 'playing':
        return (
          <Play
            onTapBalloon={() => {
              wsRef.current?.send('SENDMSG Leader balloon:add');
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

const loadingStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
});
