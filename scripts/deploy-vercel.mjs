#!/usr/bin/env node
import { spawnSync } from 'node:child_process';

const token = process.env.VERCEL_TOKEN;

if (!token) {
  console.error('VERCEL_TOKEN が設定されていません。Vercel Dashboard でリポジトリを Import するか、VERCEL_TOKEN を設定して `npx vercel --prod --yes --token "$VERCEL_TOKEN"` を実行してください。');
  process.exit(1);
}

const result = spawnSync('npx', ['vercel', '--prod', '--yes', '--token', token], {
  stdio: 'inherit',
  env: process.env,
});

process.exit(result.status ?? 1);
