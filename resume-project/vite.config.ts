import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

/** 当前执行 node 命令时文件夹的地址（工作目录） */
const root: string = process.cwd();

/** 路径拼接函数，简化代码 */
const pathResolve = (path: string): string => resolve(root, path);

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: "@", replacement: pathResolve("src") },
      { find: "#", replacement: pathResolve("src/types") },
      { find: "&", replacement: pathResolve("src/views") },
    ],
  },
});
