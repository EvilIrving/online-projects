import { createApp } from "vue";
import "@/assets/styles/global.css";
import "@/assets/styles/fonts.css";
import App from "./App.vue";
import globalComponents from "@/components/global";

const app = createApp(App);

// 注册全局组件
app.use(globalComponents);

app.mount("#app");
