/** @jsxImportSource @emotion/react */
import {css, keyframes} from '@emotion/react';
import {useRef, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import balloon1 from '../asset/balloon1.png';
import game from '../asset/game.mp4';

type BalloonProps = {
  id: number;
  xPosition: number;
  imageSrc: string;
};

export function Game() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [balloons, setBalloons] = useState<BalloonProps[]>([]);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    video.play();
  }, [navigate]);

  const addBalloon = () => {
    const newBalloon: BalloonProps = {
      id: Date.now(),
      xPosition: Math.random() * 100,
      imageSrc: balloon1,
    };
    setBalloons(prev => [...prev, newBalloon]);

    setTimeout(() => {
      setBalloons(prev => prev.filter(b => b.id !== newBalloon.id));
    }, 3000);
  };

  return (
    <div>
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
            zIndex: 1,
          }}
        />
      </div>
      <div
        css={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          pointerEvents: 'none',
        }}>
        {balloons.map(balloon => (
          <Balloon
            key={balloon.id}
            id={balloon.id}
            xPosition={balloon.xPosition}
            imageSrc={balloon1}
          />
        ))}
      </div>
      {/*TODO: WebSocketのイベントを受けてaddBallonを実行する */}
      <button onClick={addBalloon}>飛ばす</button>
    </div>
  );
}

const Balloon: React.FC<BalloonProps> = ({xPosition, imageSrc}) => {
  return (
    <img
      src={imageSrc}
      alt="balloon"
      css={css`
        ${balloonStyle};
        left: ${xPosition}%;
        --balloon-x: ${Math.random() * 40 - 20}%;
      `}
    />
  );
};

const floatAnimation = keyframes`
  0% {
    transform: translateY(100vh) translateX(0);
  }
  100% {
    transform: translateY(-100vh) translateX(var(--balloon-x));
  }
`;

const balloonStyle = css`
  position: absolute;
  bottom: 0;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  animation: ${floatAnimation} 3s linear infinite;
`;
