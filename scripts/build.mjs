import { mkdirSync, copyFileSync, writeFileSync, rmSync, cpSync } from 'fs';

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist/src', { recursive: true });
copyFileSync('src/styles.css', 'dist/src/styles.css');
copyFileSync('src/static-app.js', 'dist/src/static-app.js');
cpSync('public', 'dist', { recursive: true });
writeFileSync(
  'dist/index.html',
  `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="解きナビAI - 答えを導き出すための数学コーチ" />
    <title>解きナビAI</title>
    <link rel="stylesheet" href="/src/styles.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/static-app.js"></script>
  </body>
</html>
`,
);
console.log('built dist');
