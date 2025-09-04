import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sentryVitePlugin } from '@sentry/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    base: command === 'serve' ? '/' : '/apple-clone-website/',
    plugins: [
      react(),
      sentryVitePlugin({
        org: 'jsm-x9',
        project: 'javascript-react',
      }),
    ],
    build: {
      sourcemap: true,
    },
  };
});

