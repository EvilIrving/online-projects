// hooks/useECharts.js
import { useEffect, useRef } from "react";
import * as echarts from "echarts/core";
import { LineChart,ScatterChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

// 确保只注册一次
if (!echarts.getCoordinateSystemDimensions) {
  echarts.use([
    LineChart,
    ScatterChart,
    GridComponent,
    TooltipComponent,
    TitleComponent,
    LegendComponent,
    CanvasRenderer,
  ]);
}

export const useECharts = (options, theme = null) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // 初始化图表
  useEffect(() => {
    if (!chartRef.current) return;

    const renderChart = () => {
      // 检查实例是否已存在
      if (chartInstance.current) {
        chartInstance.current.dispose();
      }

      // 初始化
      chartInstance.current = echarts.init(chartRef.current, theme);

      // 设置选项
      if (options) {
        chartInstance.current.setOption(options);
      }
    };

    renderChart();

    // 处理窗口大小调整
    const handleResize = () => {
      if (chartInstance.current) {
        chartInstance.current.resize();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // 清理
      window.removeEventListener("resize", handleResize);
      if (chartInstance.current) {
        chartInstance.current.dispose();
        chartInstance.current = null;
      }
    };
  }, [options, theme]);

  // 提供更新图表选项的方法
  const updateOptions = (newOptions) => {
    if (chartInstance.current) {
      chartInstance.current.setOption(newOptions);
    }
  };

  return { chartRef, chartInstance: chartInstance.current, updateOptions };
};
