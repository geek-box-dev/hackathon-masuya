import {Box, Stack} from '@mui/material';
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
      navigate('/contents');
    });
    return () => {
      video.removeEventListener('ended', () => {
        navigate('/contents');
      });
    };
  }, [navigate]);
  return (
    <Stack
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Box
        ref={videoRef}
        component="video"
        src={story}
        sx={{
          height: '100vh',
          width: '100vw',
          objectFit: 'cover',
        }}
      />
    </Stack>
  );
}
