/** @jsxImportSource @emotion/react */
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import start_bg_image from '../../asset/start_bg_image.png';
import {LeaderScreenProps} from '../../screen/Leader';

export function Standby({changeState}: LeaderScreenProps) {
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
      <img
        src={start_bg_image}
        alt="background"
        css={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <button
        onClick={() => {
          changeState();
        }}
        css={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          margin: 'auto',
          backgroundColor: 'transparent',
        }}>
        <PlayCircleFilledWhiteOutlinedIcon
          sx={{
            height: '25vh',
            width: '25vw',
            color: 'white',
          }}
        />
      </button>
    </div>
  );
}
