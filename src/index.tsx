import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {Follower} from './screen/Follower';
import {Leader} from './screen/Leader';

const router = createBrowserRouter([
  {
    // NOTE: コンテンツ操作結果の反映画面（プロジェクタ投影画面）
    path: '/',
    element: <Follower />,
  },
  {
    // NOTE: コンテンツ操作の画面
    path: '/leader',
    element: <Leader />,
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
