import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import {Box, IconButton, Stack} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import start_bg_image from '../src/asset/start_bg_image.png';
import './App.css';

function App() {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Box
        component="img"
        sx={{
          height: '100vh',
          width: '100vw',
          objectFit: 'cover',
        }}
        src={start_bg_image}
      />
      <IconButton
        onClick={() => {
          navigate('/introduction');
        }}
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          margin: 'auto',
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&:click': {
            backgroundColor: 'transparent',
          },
        }}>
        <PlayCircleFilledWhiteOutlinedIcon
          sx={{
            height: '25vh',
            width: '25vw',
            color: 'white',
          }}
        />
      </IconButton>
    </Stack>
  );
}

export default App;
