import { type ConfigEnv, loadEnv, type UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import vueJsx from "@vitejs/plugin-vue-jsx";

/** 当前执行 node 命令时文件夹的地址（工作目录） */
const root: string = process.cwd();

/** 路径拼接函数，简化代码 */
const pathResolve = (path: string): string => resolve(root, path);

// https://vite.dev/config/
export default ({ mode }: ConfigEnv): UserConfigExport => {
  const env = loadEnv(mode, root) as ImportMetaEnv;
  const { VITE_PUBLIC_PATH } = env;
  return {
    /** 打包时根据实际情况修改 base */
    base: VITE_PUBLIC_PATH,

    plugins: [
      vue(),
      vueJsx({
        // options are passed on to @vue/babel-plugin-jsx: https://github.com/vuejs/babel-plugin-jsx/blob/HEAD/packages/babel-plugin-jsx/README-zh_CN.md
      }),
    ],
    resolve: {
      alias: [
        { find: "@@", replacement: resolve(__dirname, "src") },
        { find: "@", replacement: resolve(__dirname, "base") },
        { find: "#", replacement: resolve(__dirname, "domain") },
      ],
    },
  };
};
