import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  return {
    plugins: [react()],
    server: {
      port: 8000
    }
  };
});
