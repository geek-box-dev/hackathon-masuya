/** @jsxImportSource @emotion/react */
import React from 'react';
import {Box, Typography} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import {css} from '@emotion/react';

const images = [
  "http://www.masuya.co.jp/images/2024mentaimayo_banner.jpg",
  "http://www.masuya.co.jp/images/20240310mijumaru_on.jpg",
  "http://www.masuya.co.jp/images/main_onigiri_2023.jpg",
  "http://www.masuya.co.jp/images/main_ginsyari_2023.jpg",
  "http://www.masuya.co.jp/images/main_ginsyari_2.jpg",
  "http://www.masuya.co.jp/images/main_pique.jpg"
];

const Standby = () => {
  return (
    <div css={containerStyle}>
      <p
        css={{
          fontSize: '8vw',
          fontWeight: 700,
          textAlign: 'center',
          color: 'white',
        }}>
        イベント開始まで
        <br />
        しばらくお待ちください
      </p>
      <Box
        sx={{
          marginX: 6,
          padding: 2,
          backgroundColor: '#FFF0A5', // 薄黄色 (LemonChiffon)
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          height: '70%',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h5" textAlign='center' >株式会社マスヤ</Typography>
        <Carousel >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`マスヤ株式会社の画像 ${index + 1}`}
              style={{width: '100%', borderRadius: '8px'}} // スタイルを追加
            />
          ))}
        </Carousel>
        <p css={{
          fontSize: '3vw',
          fontWeight: 500,
          textAlign: 'left',
        }}>
          株式会社マスヤは、創業から長い歴史を持つ老舗企業で、品質にこだわった食品製造を行っています。<br />
          詳細は公式サイトをご覧ください <a href="http://www.masuya.co.jp/" target="_blank" rel="noopener noreferrer">www.masuya.co.jp</a>
        </p>

      </Box>
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
});

export default Standby;
