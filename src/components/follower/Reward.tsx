/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import ShioPackage from '../../asset/shio_package.png';
import ShoyuPackage from '../../asset/shoyu_package.png';

const Reward = () => {
  return (
    <div css={containerStyle}>
      <h1 css={headingStyle}>
        ふうせんをあつめてくれて
        <br />
        ありがとう！
      </h1>
      <div css={boxStyle}>
        <img
          src={ShoyuPackage}
          alt="おにぎりせんべい(しょうゆ)"
          css={imageStyle}
        />
        <img src={ShioPackage} alt="おにぎりせんべい(しお)" css={imageStyle} />
        <p css={paragraphStyle}>
          おにぎり坊やがお礼をくれたよ。
          <br />
          ブースでおにぎりせんべいをうけとってね
        </p>
      </div>
    </div>
  );
};

const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '8px',
  boxSizing: 'border-box',
});

const headingStyle = css({
  color: '#FFFFFF',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  marginBottom: '12px',
  textAlign: 'center',
});

const boxStyle = css({
  padding: '8px',
  backgroundColor: '#FFF0A5',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '400px',
  textAlign: 'center',
  marginLeft: '8px',
  marginRight: '8px',
  boxSizing: 'border-box',

  '@media (max-width: 600px)': {
    padding: '4px',
    margin: '4px',
  },
});

const imageStyle = css({
  maxWidth: '100%',
  maxHeight: '320px',
  borderRadius: '8px',
  height: 'auto',
  objectFit: 'contain',
  '@media (max-height: 700px)': {
    maxHeight: '240px',
  },
});

const paragraphStyle = css({
  marginTop: '12px',
  fontWeight: 'bold',
  fontSize: '1rem',

  '@media (max-width: 600px)': {
    fontSize: '0.9rem',
  },
});

export default Reward;
