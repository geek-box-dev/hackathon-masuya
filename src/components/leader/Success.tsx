/** @jsxImportSource @emotion/react */
import {useRef} from 'react';
import success from '../../asset/success.mp4';

export function Success() {
  const videoRef = useRef<HTMLVideoElement>(null);
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
        src={success}
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
