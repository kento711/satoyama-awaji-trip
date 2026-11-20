# 淡路島修学旅行｜里山みらくる小学校

2026年12月26日・27日の淡路島修学旅行の案内ページです。

公開URL: https://kento711.github.io/satoyama-awaji-trip/

## ローカル確認

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

http://127.0.0.1:4173/ を開きます。ビルド不要のHTML / CSS / JavaScriptです。

## 更新・公開

`main` へのpushでGitHub Actionsがページ本体と画像のみをGitHub Pagesへ公開します。

- `index.html`: 掲載内容
- `style.css`: デザインとスマホ表示
- `script.js`: 資料画像の拡大表示
- `images/`: 画像資料・ロゴ

元HP: https://kento711.github.io/satoyama-miracle-lp/

## 応援・寄付ページ

`donate.html` は学校全体への応援・寄付の案内です。既存のNotion公開ページの内容・振込先を引き継いでいます。専用スタイルは `donate.css`、振込先コピーボタンは `donate.js`。修学旅行ページから相互リンクしています。
