/** @jsxImportSource @emotion/react */
import {useRef, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import game from '../asset/game.mp4';

export function Game() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    video.play();
  }, [navigate]);
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        position: 'relative',
        overflow: 'hidden',
      }}>
      <video
        ref={videoRef}
        src={game}
        loop
        css={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
}
