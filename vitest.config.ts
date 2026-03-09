import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['app/components/Ui/**/*.vue']
    },
    projects: [
      {
        plugins: [vue()],
        test: {
          name: 'unit',
          environment: 'jsdom',
          globals: true,
          include: ['app/**/*.{test,spec}.{ts,js}'],
        }
      }
    ]
  }
});
