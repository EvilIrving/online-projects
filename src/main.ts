import { createApp } from "vue";
import "@/styles/global.css";
import "@/styles/fonts.css";
import App from "./App.vue";
import globalComponents from "@/components";

const app = createApp(App);

// 注册全局组件
app.use(globalComponents);

app.mount("#app");
