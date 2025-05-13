import React, { useState, useEffect, useRef } from "react";
import { Chart } from "@antv/g2";
import { getLineChartData } from "@/mock/lineChartData";

const G2Charts = () => {
  const container = useRef(null);
  const chart = useRef(null);
  const [chartData, setChartData] = useState([]);

  // 性能数据收集
  const [perfMetrics, setPerfMetrics] = useState({
    renderTime: 0, // 渲染时间
    fetchTime: 0, // 数据获取时间
    dataPoints: 0, // 数据点数
  });

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
    const fetchData = async () => {
      try {
        performance.mark("startFetchMark");
        const { data } = getLineChartData();

        performance.mark("endFetchMark");
        performance.measure("fetchTime", "startFetchMark", "endFetchMark");

        // 获取数据获取时间并更新性能指标
        const fetchEntries = performance.getEntriesByName("fetchTime");
        if (fetchEntries.length > 0) {
          const latestFetchEntry = fetchEntries[fetchEntries.length - 1];
          setPerfMetrics((prev) => ({
            ...prev,
            fetchTime: latestFetchEntry.duration,
            dataPoints: data.length,
          }));

          performance.clearMarks("startFetchMark");
          performance.clearMarks("endFetchMark");
          performance.clearMeasures("fetchTime");
        }

        setChartData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // 更新图表
  useEffect(() => {
    const renderChart = async () => {
      try {
        if (!chart.current || chartData.length === 0) {
          return;
        }

        chart.current.clear();
        performance.mark("startPaintMark");

        await chart.current
          .line()
          .data(chartData)
          .encode("x", "date")
          .encode("y", "value")
          .scale("x", { nice: true });

        // 添加渲染事件监听器
        chart.current.on("afterrender", (e) => {
          console.log(e, "afterrender");

          performance.mark("afterPaintMark");
          performance.measure(
            "totalRenderTime",
            "startPaintMark",
            "afterPaintMark"
          );

          // 获取总渲染时间并更新性能指标
          const renderEntries = performance.getEntriesByName("totalRenderTime");
          if (renderEntries.length > 0) {
            const latestRenderEntry = renderEntries[renderEntries.length - 1];
            setPerfMetrics((prev) => ({
              ...prev,
              renderTime: latestRenderEntry.duration,
            }));
          }

          performance.clearMarks("startPaintMark");
          performance.clearMarks("afterPaintMark");
          performance.clearMeasures("totalRenderTime");
        });

        chart.current.on("afterpaint", (e) => {
          console.log(e, "afterpaint");
        });

        await chart.current.render();
      } catch (error) {
        console.error("Error rendering chart:", error);
      }
    };

    renderChart();
  }, [chartData]);

  return (
    <div className="w-full flex  min-h-screen p-4 bg-gray-50">
      {/* 图表区域 */}
      <section
        className="flex-4/5 mr-4 w-full h-[600px] bg-white rounded-lg"
        ref={container}
      ></section>

      {/* 性能指标面板 */}
      <section className="flex-1/5 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">性能指标</h3>
        <div className="grid grid-cols-1 gap-4">
          {Object.entries(perfMetrics).map(([key, value]) => (
            <div
              key={key}
              className="p-3 bg-gray-50 rounded-md border border-gray-200"
            >
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                {key}
              </div>
              <div className="mt-1 text-lg font-semibold text-blue-600">
                {typeof value === "number" ? `${value.toFixed(2)} ms` : value}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default G2Charts;
