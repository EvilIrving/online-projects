// 全局组件
import { App } from "vue";

// 自动导入当前文件夹下的所有 .vue 组件
const components = import.meta.glob("./*.vue", { eager: true });

export default {
  install(app: App) {
    Object.values(components).forEach((module: any) => {
      const component = module.default;
      // 确保组件有 name 属性
      if (component.name) {
        app.component(component.name, component);
      } else {
        console.warn("组件缺少 name 属性:", component);
      }
    });
  },
};
