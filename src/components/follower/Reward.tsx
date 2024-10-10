/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from '@emotion/react';
import {Box, Typography} from '@mui/material';
import OnigiriSenbei from '../../asset/rice_ball_senbei.png';

const Reward = () => {
  return (
    <div css={containerStyle}>
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
        <Typography variant="h5" sx={{marginTop: 2, marginBottom: 2, fontWeight: 'bold'}}>
          ふうせんをあつめてくれてありがとう！
        </Typography>
        <img
          src={OnigiriSenbei}
          alt={`おにぎりせんべい`}
          style={{maxHeight: '60%', borderRadius: '8px'}} // スタイルを追加
        />
        <Typography variant="body1" sx={{marginTop: 2, fontWeight: 'bold'}}>
          おにぎり坊やからお礼をくれたよ。
          ブースでおにぎりせんべいをうけとってね
        </Typography>
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

export default Reward;
