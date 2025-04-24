import React, { useState, useEffect, useRef } from "react";
import { Chart } from "@antv/g2";
import { getLineChartData } from "@/mock/lineChartData";

const G2Charts = () => {
  const container = useRef(null);
  const chart = useRef(null);
  const [chartData, setChartData] = useState([]);

  // 创建图表实例
  useEffect(() => {
    if (!chart.current) {
      chart.current = new Chart({
        container: container.current,
        autoFit: true,
      });
    }
    return () => chart.current?.destroy();
  }, []);

  // 获取数据
  useEffect(() => {
    const { data } = getLineChartData();
    setChartData(data);
  }, []);

  // 更新图表
  useEffect(() => {
    if (!chart.current || !chartData.length) return;
    chart.current.clear();
    chart.current
      .interval()
      .data(chartData)
      .encode("x", "date")
      .encode("y", "value");
    chart.current.render();
  }, [chartData]);

  return (
    <div
      className="w-full flex min-h-screen p-4 bg-gray-50"
      ref={container}
    ></div>
  );
};

export default G2Charts;
