/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import {
  useRef,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import balloon1 from '../../asset/balloon_1.png';
import balloon2 from '../../asset/balloon_2.png';
import balloon3 from '../../asset/balloon_3.png';
import balloon4 from '../../asset/balloon_4.png';
import balloon5 from '../../asset/balloon_5.png';
import balloon6 from '../../asset/balloon_6.png';
import balloon7 from '../../asset/balloon_7.png';
import game from '../../asset/game.mp4';
import { getRandomIndex } from '../../utils/getRandom';

type BalloonProps = {
  id: string;
  xPosition: number;
  imageSrc: string;
  sizeIndex: number;
};

const balloonImages = [
  balloon1,
  balloon2,
  balloon3,
  balloon4,
  balloon5,
  balloon6,
  balloon7,
];

export type LeaderScreenProps = {
  changeState: (state: string) => void;
};

export const Play = forwardRef<
  {
    addBalloon: () => void;
  },
  LeaderScreenProps
>(({ changeState }: LeaderScreenProps, ref) => {
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

  // addBalloon関数をref経由で呼び出せるようにする
  const addBalloon = () => {
    if (getRandomIndex(100) > 10) {
      return;
    }
    const balloonIndex = getRandomIndex(balloonImages.length);
    const newBalloon: BalloonProps = {
      id: uuidv4(),
      xPosition: Math.random() * 100,
      imageSrc: balloonImages[balloonIndex],
      sizeIndex: getRandomIndex(3),
    };
    if (balloons.length < 90) {
      setBalloons(prev => [...prev, newBalloon]);
    }
    const sleeptime = 3000 - getRandomIndex(500);
    setTimeout(() => {
      setBalloons(prev => prev.filter(b => b.id !== newBalloon.id));
    }, sleeptime);
  };

  // useImperativeHandleを使用して、refからaddBalloonを呼び出せるようにする
  useImperativeHandle(ref, () => ({
    addBalloon,
  }));
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
            imageSrc={balloon.imageSrc}
            sizeIndex={balloon.sizeIndex}
          />
        ))}
      </div>
    </div>
  );
});

const Balloon: React.FC<BalloonProps> = ({ xPosition, imageSrc, sizeIndex }) => {
  return (
    <img
      src={imageSrc}
      alt="balloon"
      css={css`
        ${sizeIndex === 0 ? balloonStyle_small : sizeIndex === 1 ? balloonStyle_medium : balloonStyle_large};
        left: ${xPosition}%;
        --balloon-x: ${Math.random() * 40 - 20}%;
      `}
    />
  );
};

const floatAnimation = keyframes`
  0% {
    transform: translateY(100vh);
  }
  100% {
    transform: translateY(-100vh);
  }
`;

const balloonStyle_small = css`
  position: absolute;
  bottom: 0;
  width: 100px;
  height: 150px;
  border-radius: 50%;
  animation: ${floatAnimation} 3s linear infinite;
`;
const balloonStyle_medium = css`
  position: absolute;
  bottom: 0;
  width: 150px;
  height: 200px;
  border-radius: 50%;
  animation: ${floatAnimation} 3s linear infinite;
`;
const balloonStyle_large = css`
  position: absolute;
  bottom: 0;
  width: 250px;
  height: 350px;
  border-radius: 50%;
  animation: ${floatAnimation} 3s linear infinite;
`;
