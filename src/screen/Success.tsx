import '../App.css';
import logo from '../logo.svg';

// NOTE: コンテンツ終了後の画面
export function Success() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>コンテンツ終了後の画面</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}
