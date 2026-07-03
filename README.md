# 解きナビAI

「答えを導き出すための数学コーチ」をコンセプトにした、高校生・大学受験生向けAI数学学習補助WebアプリのMVPです。外部AI APIや画像認識APIが未設定でも、モックデータで主要フローを操作できます。

## 主な機能
- 初回オンボーディングと設定保存（localStorage）
- 問題撮影・画像アップロード・直接入力
- 読み取り結果の確認・修正
- 分からない場所の選択
- 5段階のヒントを使うAI数学コーチ風チャット
- 詳しい解説表示前の確認ダイアログ
- 途中式解析、類題、間違いノート、復習予定日計算
- 苦手分析、テスト範囲モード、受験モード
- 存在しないURLはホームへ戻るSPAルーティング

## 使用技術
React / TypeScript / Vite / React Router / localStorage。数式はMVPでは安全なテキスト表示コンポーネントで扱い、KaTeX等を追加しやすい構成です。

## ローカル起動
```bash
npm install
npm run dev
```

## ビルド
```bash
npm run build
```
出力先は `dist` です。

## 環境変数
`.env.example` に将来利用する環境変数名のみ記載しています。APIキーはクライアントコードに直接書きません。

## AI API接続予定箇所
- `src/services/aiService.ts`
- `src/services/mockAiService.ts`
- `src/prompts/mathCoachSystemPrompt.ts`

## 画像解析API接続予定箇所
- `src/services/imageRecognitionService.ts`

## Netlify公開
1. Netlifyでリポジトリを選択
2. Build command: `npm run build`
3. Publish directory: `dist`
4. `public/_redirects` と `netlify.toml` によりSPA更新時の404を回避


## Vercel / その他の静的ホスティング
Vercelでは `vercel.json` により `npm run build` と出力先 `dist`、SPAリライトを指定しています。Netlify以外へ配置する場合も、ビルド後の `dist` を公開ディレクトリにしてください。

## 今後の拡張案
- 本番AI API接続
- 画像OCR/数式認識
- 認証・クラウドDB同期
- KaTeX/MathJaxによる高品質数式表示
- Vitest + React Testing Libraryの画面テスト拡充

## 既知の制限
- 外部APIは未接続で、解析・ヒント・類題はモックです。
- 画像はプレビューのみで大量保存しません。
