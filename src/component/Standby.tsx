import {Box, Typography} from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

const images = [
  'http://www.masuya.co.jp/images/2024mentaimayo_banner.jpg', // 追加の画像をここに追加
  'http://www.masuya.co.jp/images/20240310mijumaru_on.jpg',
];

const Standby = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundImage:
          'repeating-linear-gradient(90deg, #DE5511 0, #DE5511 80px, #1B9443 80px, #1B9443 160px)',
        backgroundSize: 'cover',
      }}>
      <Typography variant={'h4'} color="white" mb={4}>
        イベント開始までしばらくお待ちください
      </Typography>
      <Box
        sx={{
          marginX: 6,
          padding: 2,
          backgroundColor: '#FFF0A5', // 薄黄色 (LemonChiffon)
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          height: '70%',
          justifyContent: 'space-between',
        }}>
        <Typography variant="h5">株式会社マスヤ</Typography>
        <Carousel>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`マスヤ株式会社の画像 ${index + 1}`}
              style={{width: '100%', borderRadius: '8px'}} // スタイルを追加
            />
          ))}
        </Carousel>
        <Typography variant="body1" sx={{mt: 2, textAlign: 'left'}}>
          株式会社マスヤは、創業から長い歴史を持つ老舗企業で、品質にこだわった食品製造を行っています。
          <br />
          詳細は公式サイトをご覧ください:{' '}
          <a
            href="http://www.masuya.co.jp/"
            target="_blank"
            rel="noopener noreferrer">
            www.masuya.co.jp
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Standby;
