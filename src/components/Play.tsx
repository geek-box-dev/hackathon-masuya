/** @jsxImportSource @emotion/react */
import {css, keyframes} from '@emotion/react';
import {FC, useCallback, useState} from 'react';
import balloon1 from '../asset/balloon1.png';
import char1 from '../asset/char1.png';
import char2 from '../asset/char2.png';

type BalloonProps = {
  id: number;
  xPosition: number;
  imageSrc: string;
};

export const Play: FC = () => {
  const [balloons, setBalloons] = useState<BalloonProps[]>([]);
  const addBalloon = useCallback(() => {
    const newBalloon: BalloonProps = {
      id: Date.now(),
      xPosition: Math.random() * 100,
      imageSrc: balloon1,
    };
    setBalloons(prev => [...prev, newBalloon]);
    setTimeout(() => {
      setBalloons(prev => prev.filter(b => b.id !== newBalloon.id));
    }, 1500);
  }, []);
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
      <Balloon onClick={addBalloon} />
      <div
        css={{
          display: 'inline-block',
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
          imageSrc={balloon1}
        />
      ))}
    </div>
  );
};

const Balloon: FC<{onClick: () => void}> = ({onClick}) => {
  return (
    <button
      onClick={onClick}
      css={{
        border: 'none',
        backgroundColor: 'transparent',
      }}>
      <img
        src={balloon1}
        alt="balloon"
        css={{
          animation: `${balloonAnimation} 3s linear infinite`,
          width: '50vh',
          height: '50vh',
        }}
      />
    </button>
  );
};

const FloatingBalloon: React.FC<BalloonProps> = ({xPosition, imageSrc}) => {
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
  width: 30vq;
  height: 30vh;
  border-radius: 50%;
  animation: ${floatingBalloonAnimation} 1.5s linear infinite;
`;
