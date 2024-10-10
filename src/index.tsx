import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Follower} from './screen/Follower';
import {Game} from './screen/Game';
import {Introduction} from './screen/Introduction';
import {Success} from './screen/Success';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    // NOTE: 導入ストーリーの画面
    path: '/introduction',
    element: <Introduction />,
  },
  {
    // NOTE: コンテンツ操作の画面
    path: '/follower',
    element: <Follower />,
  },
  {
    // NOTE: コンテンツ終了後の画面
    path: '/success',
    element: <Success />,
  },
  {
    // NOTE: コンテンツ操作結果の反映画面（プロジェクタ投影画面）
    path: '/game',
    element: <Game />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
