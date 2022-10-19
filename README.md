# learning-cors

## 使い方

これは、CORSの挙動を学ぶためのリポジトリです。

プログラムはサーバー用とクライアント用に分かれています。

動かすには別々のターミナルで、それぞれ下記のとおり実行してください。

```bash
# server
cd server
## cors設定あり
npm run cors
## cors設定なし
npm run start

# client
cd client
npm run start
```

サーバーがcors設定ありの状態でかつ、クライアント両方とも起動したら<http://localhost:8080>にアクセスしてください。

アクセスした後、Clickをクリックするとクライアントのjavascriptが<http://localhost:3000>から"Hello World!"という文字列を取得し、画面に表示します。
