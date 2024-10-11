/** @jsxImportSource @emotion/react */
import {useEffect, useRef, useState} from 'react';
import {Intro} from '../components/leader/Intro';
import {Play} from '../components/leader/Play';
import {Standby} from '../components/leader/Standby';
import {Success} from '../components/leader/Success';

// NOTE: WebSocket で受信したリーダ側のメッセージの状態
type LeaderScreenStatus = 'standby' | 'introduction' | 'playing' | 'success';

// NOTE: websocket 送信されてくるメッセージの型
interface Message {
  command: "CONNECT" | "SENDMSG" | "SET" | "GET" | "CHROLE";
  body: string;
  success: boolean;
}

export type LeaderScreenProps = {
  changeState: () => void;
};

export function Leader() {
  const [state, setState] = useState<LeaderScreenStatus>('standby');
  const wsRef = useRef<WebSocket>();
  const playingRef = useRef<{addBalloon: () => void}>(null);

  useEffect(() => {
    const ws = new WebSocket(process.env.REACT_APP_WSS_URL ?? '');
    function onMessage(event: MessageEvent<string>) {
      const {command, body, success}: Message = JSON.parse(event.data);

      if (!success) {
        console.error('failed to command', {command, body});
        return;
      }

      if (command === 'SENDMSG' && body === 'balloon:add') {
        playingRef.current?.addBalloon();
        return;
      }

      if (command === 'SENDMSG' && body === 'state:success') {
        const s = body.split(':')[1];
        setState(s as LeaderScreenStatus);
      }
    }
    function onOpen() {
      ws.send('CHROLE Leader');
    }
    ws.addEventListener('message', onMessage);
    ws.addEventListener('open', onOpen);
    wsRef.current = ws;

    return () => {
      ws.close();
      ws.removeEventListener('message', onMessage);
      ws.removeEventListener('open', onOpen);
    };
  }, []);

  const Screen = ({state}: {state: LeaderScreenStatus}) => {
    switch (state) {
      case 'standby':
        return (
          <Standby
            changeState={() => {
              setState('introduction');
              wsRef.current?.send('SENDMSG Followers state:introduction');
            }}
          />
        );
      case 'introduction':
        return (
          <Intro
            changeState={() => {
              setState('playing');
              wsRef.current?.send('SENDMSG Followers state:playing');
            }}
          />
        );
      case 'playing':
        return (
          <Play
            ref={playingRef}
            changeState={() => {
              setState('success');
              wsRef.current?.send('SENDMSG Followers state:reward');
            }}
          />
        );
      case 'success':
        return <Success />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Screen state={state} />
    </div>
  );
}
