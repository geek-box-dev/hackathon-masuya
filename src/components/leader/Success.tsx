/** @jsxImportSource @emotion/react */
import {useEffect, useRef} from 'react';
import success from '../../asset/success.mp4';

export function Success() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    video.play();
  }, []);
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
        muted // NOTE: ミュートにしておかないと、ブラウザ側のセキュリティポリシーにより自動再生しない（https://developer.chrome.com/blog/autoplay?hl=ja）
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
