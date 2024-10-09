import logo from '../logo.svg';
import '../App.css';

// NOTE: コンテンツ操作結果の反映画面（プロジェクタ投影画面）
export function Result() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>操作結果の反映画面（プロジェクタ投影画面）</p>
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
