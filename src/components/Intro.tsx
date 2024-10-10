/** @jsxImportSource @emotion/react */
import {css, keyframes} from '@emotion/react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import {FC} from 'react';

export const Intro: FC = () => {
  return (
    <div css={containerStyle}>
      <p
        css={{
          fontSize: '10vw',
          fontWeight: 700,
          textAlign: 'center',
          color: 'white',
        }}>
        会場のスクリーンに
        <br />
        注目!!
      </p>
      <ArrowCircleUpIcon
        sx={{
          height: '20vh',
          width: '25vw',
          color: '#ffd700',
          animation: `${floatAnimation} 2s ease-in-out infinite`,
        }}
      />
    </div>
  );
};

const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage:
    'repeating-linear-gradient(90deg, #DE5511 0, #DE5511 80px, #1B9443 80px, #1B9443 160px)',
});

const floatAnimation = keyframes`
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
