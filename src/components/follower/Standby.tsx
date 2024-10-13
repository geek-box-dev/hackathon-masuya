/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import React, {useState} from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // カルーセルのCSSをインポート
import Bouya from '../../asset/01.png';
import Christine from '../../asset/02.png';
import Shionosuke from '../../asset/03.png';
import Charlotte from '../../asset/04.png';
import Logo2 from '../../asset/cozmic_horizontal_primary.png'; // ロゴ画像2をインポート
import Logo1 from '../../asset/masuya_logo.png'; // ロゴ画像1をインポート

// 画像、キャラクター名、説明を含むオブジェクトの配列
const characters = [
  {
    image: Bouya,
    name: 'おにぎり坊や',
    desc1: '三角形が大好き！',
    desc2: '見た目とちがってまる～い性格。',
    desc3: '将来の夢はスーパーヒーローになること！',
  },
  {
    image: Christine,
    name: 'クリスティーヌ',
    desc1: 'パリッとした性格。',
    desc2: 'チャームポイントは大きなリボン！',
    desc3: '将来の夢はハリウッド女優になること♬',
  },
  {
    image: Shionosuke,
    name: 'しおのすけ',
    desc1: 'あっさりした性格。',
    desc2: '本当は優しいがときどき塩対応。',
    desc3: 'ひとりごとをよく言う。',
  },
  {
    image: Charlotte,
    name: 'シャルロット',
    desc1: 'おっとりした性格。',
    desc2: 'しかし、いざとなるとものごとを',
    desc3: 'ザクザク進められるしっかり者。',
  },
];

const Standby = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // 現在のスライドのインデックスを保持する

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>
        イベント開始まで
        <br />
        しばらくお待ちください
      </p>
      <div css={boxStyle}>
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          dynamicHeight={false}
          css={{borderRadius: '8px'}}
          onChange={(index) => setCurrentSlide(index)} // スライドが切り替わるときにインデックスを更新
        >
          {characters.map((char, index) => (
            <div key={index}>
              <img
                src={char.image}
                alt={`${char.name}の画像`}
                css={imageStyle} // 画像のスタイルも調整
              />
            </div>
          ))}
        </Carousel>

        {/* 現在のスライドのキャラクター名と説明を表示 */}
        <div css={characterInfoStyle}>
          <h4 css={characterNameStyle}>{characters[currentSlide].name}</h4>
          <p css={characterDescriptionStyle}>
            {characters[currentSlide].desc1}
            <br />
            {characters[currentSlide].desc2}
            <br />
            {characters[currentSlide].desc3}
          </p>
        </div>

        <div css={logoContainerStyle}>
          <a href="http://www.masuya.co.jp/" target="_blank" rel="noopener noreferrer">
            <img src={Logo1} alt="株式会社マスヤ" css={logoStyle} />
          </a>
          <a href="https://www.cozmic.io/" target="_blank" rel="noopener noreferrer">
            <img src={Logo2} alt="株式会社cozmic" css={logoStyle} />
          </a>        </div>
      </div>
    </div>
  );
};

// スタイル設定
const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem', // 画面に余白を持たせる
});

const titleStyle = css({
  fontSize: '7vw', // スマホでもPCでも自動調整
  fontWeight: 700,
  textAlign: 'center',
  color: 'white',
  '@media (min-width: 768px)': { // タブレット・PC向けのフォントサイズ調整
    fontSize: '3vw',
  },
});

const boxStyle = css({
  width: '100%', // モバイルでは画面幅いっぱい
  padding: '1.6rem',
  backgroundColor: '#FFF0A5', // 薄黄色 (LemonChiffon)
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media (min-width: 1024px)': {
    width: '70%', // PCでは幅を縮める
  },
});

// キャラクター画像のスタイル
const imageStyle = css({
  width: '100%',
  maxHeight: '400px',
  objectFit: 'contain',
  borderRadius: '8px',
});

// キャラクター情報のスタイル
const characterInfoStyle = css({
  marginTop: '0.8rem',
  textAlign: 'left',
});

const characterNameStyle = css({
  textAlign: 'center',
  fontSize: '5vw',
  fontWeight: 'bold',
  color: '#333',
  '@media (min-width: 768px)': {
    fontSize: '2.5vw',
  },
});

const characterDescriptionStyle = css({
  fontSize: '4vw',
  color: '#666',
  '@media (min-width: 768px)': {
    fontSize: '2vw',
  },
});

// ロゴ表示部分のスタイル
const logoContainerStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap', // モバイルでも表示が崩れないようにする
  marginTop: '2rem',
  gap: '1rem', // ロゴの間に隙間をつける
});

const logoStyle = css({
  width: '8rem',
  height: 'auto',
  '@media (min-width: 768px)': {
    width: '10rem', // PCでは少し大きく
  },
});

export default Standby;
