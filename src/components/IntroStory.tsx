/** @jsxImportSource @emotion/react */
import {useRef, useEffect} from 'react';
import story from '../asset/story.mp4';
import {LeaderScreenProps} from '../screen/Leader';

export function IntroStory({changeState}: LeaderScreenProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    video.play();
    video.addEventListener('ended', () => {
      changeState();
    });
    return () => {
      video.removeEventListener('ended', () => {
        changeState();
      });
    };
  }, [changeState]);
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
        src={story}
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
