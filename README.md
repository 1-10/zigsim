# ZIGSIM Document

## 開発方法

まずはこのレポジトリをcloneして実行出来るようにしてください

```
$ git clone https://github.com/1-10/zigsim
$ cd zigsim
$ npm i
```

### ドキュメントの編集方法

1. `npm start` で開発サーバーを起動
  - http://localhost:8080/zigsim で確認できます
1. `src/` 以下のMarkdownファイルを編集
1. `Ctrl-C` で開発サーバーを終了
1. `npm run build` を実行
1. `git commit して push`

### デザイン変更方法

1. `npm start` で開発サーバーを起動
  - http://localhost:8080/zigsim で確認できます
1. `src/.vuepress/theme/` 以下にVueコンポーネントやStylusファイルを編集
1. `Ctrl-C` で開発サーバーを終了
1. `npm run build` を実行
1. `git commit && git push`
