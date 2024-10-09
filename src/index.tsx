import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Contents} from './screen/Contents';
import {Introduction} from './screen/Introduction';
import {Result} from './screen/Result';
import {Success} from './screen/Success';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/introduction',
    element: <Introduction />,
  },
  {
    path: '/contents',
    element: <Contents />,
  },
  {
    path: '/success',
    element: <Success />,
  },
  {
    path: '/result',
    element: <Result />,
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
