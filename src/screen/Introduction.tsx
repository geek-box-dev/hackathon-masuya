import {useNavigate} from 'react-router-dom';
import '../App.css';
import logo from '../logo.svg';

// NOTE: 導入ストーリーの画面
export function Introduction() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>導入ストーリーの画面</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <button
          onClick={() => {
            navigate('/contents');
          }}>
          コンテンツ体験
        </button>
      </header>
    </div>
  );
}
