import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    include: ['src/**/*.test.tsx'],
    exclude: [...configDefaults.exclude, 'e2e/*'],
    coverage: {
      reporter: ['text', 'json', 'html'], 
      reportsDirectory: './coverage',   
    },
  },
});
