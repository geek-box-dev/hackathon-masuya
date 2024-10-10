import {Box, Typography} from '@mui/material';
import React from 'react';

const Reward = () => {
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
      <Typography variant="h4" sx={{marginTop: 2, fontWeight: 'bold'}}>
        ご協力ありがとうございます！
      </Typography>

      <Box
        sx={{
          marginX: 8,
          padding: 2,
          backgroundColor: '#FFF0A5', // 薄黄色 (LemonChiffon)
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}>
        <Typography variant="body1">
          サービスをご利用いただき、誠にありがとうございます。皆様のご協力により、より良いサービスを提供できるよう努めております。
        </Typography>

        <Typography variant="body2" sx={{marginTop: 2}}>
          マスヤ株式会社では、引き続き高品質な製品の提供に努めています。詳細は公式サイトをご覧ください:{' '}
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

export default Reward;
