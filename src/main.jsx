import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// 按需引入 echarts
// import * as echarts from "echarts/core";
// import { CanvasRenderer } from "echarts/renderers";
// import { LineChart, ScatterChart } from "echarts/charts";
// import {
//   TitleComponent,
//   TooltipComponent,
//   GridComponent,
// } from "echarts/components";

// // 注册必须的组件
// echarts.use([
//   TitleComponent,
//   TooltipComponent,
//   GridComponent,
//   LineChart,
//   ScatterChart,
//   CanvasRenderer,
// ]);

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
