import {css, keyframes} from '@emotion/react';

export type BalloonProps = {
  id: number;
  xPosition: number;
  imageSrc: string;
};

export const FloatingBalloon: React.FC<BalloonProps> = ({
  xPosition,
  imageSrc,
}) => {
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
