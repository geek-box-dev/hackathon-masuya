import {useNavigate} from 'react-router-dom';
import '../App.css';
import logo from '../logo.svg';

export function Contents() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>コンテンツ操作の画面</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <button
          onClick={() => {
            navigate('/success');
          }}>
          コンテンツ成功
        </button>
      </header>
    </div>
  );
}
