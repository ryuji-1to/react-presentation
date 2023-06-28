import { defineConfig } from 'vite';
import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES ? 'react-presentation' : './',
  plugins: [react(), mdx()]
});
