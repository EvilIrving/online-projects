/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Node.js 的内置模块，用于处理路径
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 将 @ 指向 src 目录
      "@assets": path.resolve(__dirname, "./src/assets/"), // 将 @ 指向 src 目录
    },
  },
});
