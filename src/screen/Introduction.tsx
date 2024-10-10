/** @jsxImportSource @emotion/react */
import {useRef, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import story from '../asset/story.mp4';

export function Introduction() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    video.play();
    video.addEventListener('ended', () => {
      navigate('/game');
    });
    return () => {
      video.removeEventListener('ended', () => {
        navigate('/game');
      });
    };
  }, [navigate]);
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
