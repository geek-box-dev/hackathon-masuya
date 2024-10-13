/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import { FC, useCallback, useMemo, useState } from 'react';
import balloon1 from '../../asset/balloon_1.png';
import balloon2 from '../../asset/balloon_2.png';
import balloon3 from '../../asset/balloon_3.png';
import balloon4 from '../../asset/balloon_4.png';
import balloon5 from '../../asset/balloon_5.png';
import balloon6 from '../../asset/balloon_6.png';
import balloon7 from '../../asset/balloon_7.png';
import char1 from '../../asset/char1.png';
import char2 from '../../asset/char2.png';
import { getRandomIndex } from '../../utils/getRandom';

type BalloonProps = {
  id: number;
  xPosition: number;
  imageSrc: string;
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

export const Play: FC<{ onTapBalloon?: () => void }> = ({ onTapBalloon }) => {
  const [balloons, setBalloons] = useState<BalloonProps[]>([]);
  const balloonImageIndex = useMemo(() => getRandomIndex(balloonImages.length), []);
  const addBalloon = useCallback(() => {
    const balloonIndex = getRandomIndex(balloonImages.length);
    const newBalloon: BalloonProps = {
      id: Date.now(),
      xPosition: Math.random() * 100,
      imageSrc: balloonImages[balloonIndex],
    };
    setBalloons(prev => [...prev, newBalloon]);
    onTapBalloon?.();
    setTimeout(() => {
      setBalloons(prev => prev.filter(b => b.id !== newBalloon.id));
    }, 1500);
  }, [onTapBalloon]);
  return (
    <div css={containerStyle}>
      <p
        css={{
          fontSize: '10vw',
          fontWeight: 700,
          textAlign: 'center',
          color: 'white',
        }}>
        風船を押して
        <br />
        風船を飛ばそう!!
      </p>
      <Balloon index={balloonImageIndex} onClick={addBalloon} />
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '10vh',
        }}>
        <img
          src={char1}
          alt="character1"
          css={{
            width: '20vh',
            height: '20vh',
          }}
        />
        <img
          src={char2}
          alt="character2"
          css={{
            width: '20vh',
            height: '20vh',
          }}
        />
      </div>
      {balloons.map(balloon => (
        <FloatingBalloon
          key={balloon.id}
          id={balloon.id}
          xPosition={balloon.xPosition}
          imageSrc={balloon.imageSrc}
        />
      ))}
    </div>
  );
};

const Balloon: FC<{ index: number, onClick: () => void }> = ({ index, onClick }) => {
  return (
    <button
      onClick={onClick}
      css={{
        border: 'none',
        backgroundColor: 'transparent',
      }}>
      <img
        src={balloonImages[index]}
        alt="balloon"
        css={{
          animation: `${balloonAnimation} 3s linear infinite`,
          width: '35vh',
          height: '50vh',
        }}
      />
    </button>
  );
};

const FloatingBalloon: React.FC<BalloonProps> = ({ xPosition, imageSrc }) => {
  return (
    <img
      src={imageSrc}
      alt="balloon"
      css={css`
        ${floatingBalloonStyle};
        left: ${xPosition - 40}%;
        --balloon-x: ${Math.random() * 40 - 20}%;
      `}
    />
  );
};

const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

const balloonAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const floatingBalloonAnimation = keyframes`
  0% {
    transform: translateY(100vh) translateX(0);
  }
  100% {
    transform: translateY(-100vh) translateX(var(--balloon-x));
  }
`;

const floatingBalloonStyle = css`
  position: absolute;
  bottom: 0;
  width: 40vw;
  height: 30vh;
  border-radius: 50%;
  animation: ${floatingBalloonAnimation} 1.5s linear infinite;
`;
