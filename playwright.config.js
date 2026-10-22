import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  forbidOnly: true,
  workers: 1,
  use: {
    baseURL: "http://127.0.0.1:3821",
    channel: process.env.PLAYWRIGHT_CHROME_CHANNEL === "chrome" ? "chrome" : undefined,
  },
  webServer: {
    command: "npm exec -- vite preview --outDir storybook-static --host 127.0.0.1 --port 3821 --strictPort",
    url: "http://127.0.0.1:3821",
  },
});
