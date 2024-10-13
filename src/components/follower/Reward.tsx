/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import React from 'react';
import OnigiriSenbei from '../../asset/rice_ball_senbei.png';

const Reward = () => {
  return (
    <div css={containerStyle}>
      <h1 css={headingStyle}>ふうせんをあつめてくれて<br />ありがとう！</h1>
      <div css={boxStyle}>
        <img
          src={OnigiriSenbei}
          alt="おにぎりせんべい"
          css={imageStyle}
        />
        <p css={paragraphStyle}>
          おにぎり坊やからお礼をくれたよ。<br />
          ブースでおにぎりせんべいをうけとってね
        </p>
      </div>
    </div>
  );
};

// コンテナのスタイル
const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '16px',
  boxSizing: 'border-box', // 余白も含めて調整
});

// 見出しのスタイル (白い文字で、ボックスの外に表示)
const headingStyle = css({
  color: '#FFFFFF', // 白い文字
  fontWeight: 'bold',
  fontSize: '1.8rem',
  marginBottom: '16px',
  textAlign: 'center',
});

// ボックスのスタイル（左右に余白を追加）
const boxStyle = css({
  padding: '16px',
  backgroundColor: '#FFF0A5', // 薄黄色 (LemonChiffon)
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '500px',
  textAlign: 'center', // テキストを中央揃え
  marginLeft: '16px', // 左右の余白
  marginRight: '16px',
  boxSizing: 'border-box',
  '@media (orientation: landscape)': {
    maxWidth: '80vw', // 横向きのときは画面幅の80%に制限
  },
});

// 画像のスタイル
const imageStyle = css({
  maxWidth: '100%',
  maxHeight: '350px',
  borderRadius: '8px',
  height: 'auto', // 画像の比率を保つ
  objectFit: 'contain', // はみ出しを防ぐための調整
});

// 段落のスタイル
const paragraphStyle = css({
  marginTop: '16px',
  fontWeight: 'bold',
  fontSize: '1.1rem',
});

export default Reward;
