## パッケージマネージャ

このプロジェクトではパッケージマネージャに[npm](https://docs.npmjs.com/cli/v10/commands/npm)を利用しています。

## Reactプロジェクトの環境構築

このプロジェクトはReactを使用しており、以下の方法でReactの環境構築を行なっています。  
[Create React App](https://github.com/facebook/create-react-app).  
[React documentation](https://reactjs.org/).

# 利用可能なスクリプト

Reactの環境を構築後にプロジェクトのトップで以下のコマンドを実行します。

# `npm start`

上記のコマンドを実行後、以下のリンクにアクセスするとブラウザ上でReactのサンプル画面が表示されます。  
[http://localhost:3000](http://localhost:3000)

##　　WebSocketを利用したイベント操作について
今回開発するコンテンツは大きく以下の役割に分かれて実行されます。  
また、以下のロールはWebSocketを通じて、様々なイベント操作をやりとりします。

# Role

- Leader
  大画面に表示するメインコンテンツを表示する端末向けのロール(N=1想定)
- Follower
  モバイル端末など、サブコンテンツを表示する端末向けのロール(N=many)
- Admin: PC
  開始、終了などの命令をLeader, Follower に送る管理者向けのロール(N=1想定)

# commands

- CHROLE <Role: "Leader" | "Admin">
  このメッセージを送信したFollowerのRoleを変更する
- SENDMSG <DST: "Self" | "Leader" | "Followers"> <BODY: string>
  指定した宛先に対して、任意の文字列を送信する
  DST: どこに対してメッセージを送信するか。
  BODY: 送信したい文字列(スペースは含められない)
- SET <KEY: string> <VALUE: string>
  Leader/Admin のみ実行可能
  DB上にVALUEを保存する
  KEY: キー情報。GETの際に必要。既に同一KEYでDBに保存していた場合は上書きする。
  VALUE: 保存する情報
- GET <KEY: string>
  SETで保存されたVALUEを取得する。存在しないKEYに対してGETを実行しても何も起きない。
  KEY: SETコマンドを参照

# onMessage で受信するメッセージの型

```typescript
interface Message {
  command: 'CONNECT' | 'SENDMSG' | 'SET' | 'GET' | 'CHROLE'; // どのコマンドによるメッセージか。 CONNECT はwebsocket接続時。
  body: string; // メッセージの内容。エラー時はエラーメッセージ。
  success: boolean; // 自身が実行したコマンドが成功したかどうか。失敗時は false でエラーメッセージが body に格納される。
}
```

# Example

```typescript
interface Message {
  command: "CONNECT" | "SENDMSG" | "SET" | "GET" | "CHROLE";
  body: string;
  success: boolean;
}

export function Example() {
  const [count, setCount] = useState<number>(0);
  const wsRef = useRef<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket('wss://hogehoge.com/');
    function onMessage(event: MessageEvent<string>) {
      const {command, body, success}: Message = JSON.parse(event.data);
      if (!success) {
        console.error('command failed', {command, body});
        return;
      }

      if (command === 'SENDMSG' && body.startsWith('addCount:')) {
        const cnt = Number(body.split(':')[1]);
        setCount(prev => prev + cnt);
        return;
      }

    }
    ws.addEventListener('message', onMessage);
    wsRef.current = ws;
    return () => {
      ws.close();
      ws.removeEventListener('message', onMessage);
    };
  }, []);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => {
        wsRef.current?.send('SENDMSG Self addCount:1');
      }} >
        add
      </button>
    </div>
  );
}
```

## おにぎりせんべいアプリのメッセージやり取り例

# Leader app

1. connect webSocket // この時点では Follower
2. CHROLE Leader
3. SENDMSG Followers state:introduction // 導入動画再生のタイミング
4. SENDMSG Followers state:playing // 導入動画終了後のタイミング
5. onMessage({command: "SENDMSG", body: "state:success", success: true})
6. SENDMSG Followers state:reward

# Followers app

1. connect webSocket // この時点では Follower
2. SENDMSG Followers state:introduction // 導入動画再生のタイミング
3. SENDMSG Followers state:playing // 導入動画終了後のタイミング
4. onMessage({command: "SENDMSG", body: "state:success", success: true})
5. SENDMSG Followers state:reward

# Admin cli

1. CHROLE Admin
2. SENDMSG Leader state:success // Leader app 4 で良いタイミングになってから

## その他

本リポジトリでは以下のサードパーティライブラリを使用しています。  
Material UI（リッチなUIアセットを提供）： [Material UI documentation](https://mui.com/material-ui/).  
Emotion（React用のcssライブラリ）： [Emotion documentation](https://emotion.sh/docs/introduction).  
React Router（React用ページルーティング）： [React Router documentation](https://reactrouter.com/en/main).
