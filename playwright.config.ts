import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    use: {
       // baseURL: 'https://backend.tallinn-learning.ee/',  // Adjust to your actual API base URL
        baseURL: 'http://localhost:3000/users',
    },
    workers: 1,
});
