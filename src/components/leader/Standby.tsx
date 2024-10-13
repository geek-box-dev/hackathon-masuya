/** @jsxImportSource @emotion/react */
import start from "../../asset/start.png";
import start_bg_image from '../../asset/start_bg_image.png';
import { LeaderScreenProps } from '../../screen/Leader';

export function Standby({ changeState }: LeaderScreenProps) {
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
          height: '25vh',
          width: '20vw',
          border: "none",
        }}>
        <div
          css={{
            display: 'flex',
            alignSelf: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}>
          <img
            src={start}
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
      </button>
    </div>
  );
}
