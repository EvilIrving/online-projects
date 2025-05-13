import React, { useState, useEffect, useRef } from "react";
import * as echarts from "echarts";
import { getLineChartData } from "@/mock/lineChartData";

const LargeDataChart = () => {
  const [chartData, setChartData] = useState([]);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  // 性能数据收集
  const [perfMetrics, setPerfMetrics] = useState({
    fetchTime: 0, // 数据加载时间
    renderTime: 0, // 渲染时间
    dataPoints: 0, // 数据点数量
  });

  // 优化配置项
  const optimizationConfigs = [
    { key: "animation", label: "禁用动画", value: false },
    { key: "silent", label: "禁用交互", value: true },
    { key: "large", label: "大数据模式", value: true },
    { key: "useDirtyRect", label: "脏矩形优化", value: false },
  ];
  const [optimizations, setOptimizations] = useState(
    Object.fromEntries(optimizationConfigs.map((c) => [c.key, false]))
  );

  // 渲染方法配置
  const renderMethods = [
    {
      id: "virtual",
      label: "虚拟渲染",
      desc: "使用 DataZoom 进行虚拟滚动",
      handlerName: "renderVirtual",
    },
    {
      id: "chunked",
      label: "分片加载",
      desc: "使用 progressive 加载数据",
      handlerName: "renderChunked",
    },
    {
      id: "lttb",
      label: "LTTB降采样",
      desc: "官方降采样算法",
      handlerName: "renderLTTB",
    },
    {
      id: "minmax",
      label: "MinMax降采样",
      desc: "官方降采样算法",
      handlerName: "renderMinMax",
    },
  ];
  const [activeMethod, setActiveMethod] = useState(renderMethods[0]);

  // 数据获取
  useEffect(() => {
    performance.mark("dataFetchStart");
    const { data } = getLineChartData();

    performance.mark("dataFetchEnd");
    performance.measure("fetchTime", "dataFetchStart", "dataFetchEnd");

    performance.getEntriesByName("fetchTime").forEach((entry) => {
      setPerfMetrics((prev) => ({
        ...prev,
        fetchTime: entry.duration,
      }));
    });

    // 清除性能记录，避免内存泄漏
    performance.clearMarks("dataFetchStart");
    performance.clearMarks("dataFetchEnd");
    performance.clearMeasures("fetchTime");

    const formatted = data
      .map((item) => [item.date, item.value])
      .sort((a, b) => new Date(a[0]) - new Date(b[0]));

    setChartData(formatted);
  }, []);

  // 图表基础配置
  const baseChartConfig = {
    title: { text: "大数据量优化示例", left: "center" },
    tooltip: {
      trigger: "item",
      formatter: (params) =>
        `${params.data[0]}<br/>值: ${params.data[1].toFixed(2)}`,
    },
    xAxis: { type: "category", boundaryGap: false },
    yAxis: { type: "value", axisLabel: { formatter: "{value} 元" } },
    grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
  };

  // 初始化图表
  const initChart = () => {
    const chart = echarts.init(chartRef.current, null, {
      renderer: "canvas",
      useDirtyRect: optimizations.useDirtyRect, // 使用优化配置中的值
    });

    chart.setOption({
      ...baseChartConfig,
      series: [
        {
          type: "scatter",
          data: [],
          itemStyle: { opacity: 0.7 },
          ...optimizations,
        },
      ],
    });

    chart.on("finished", () => {
      // 结束渲染时间记录并计算
      performance.mark("renderTimeEnd");
      performance.measure("renderTime", "renderTimeStart", "renderTimeEnd");

      // 获取最新的性能记录
      const renderEntries = performance.getEntriesByName("renderTime");
      if (renderEntries.length > 0) {
        // 只取最新的一条记录
        const latestRenderEntry = renderEntries[renderEntries.length - 1];
        setPerfMetrics((prev) => ({
          ...prev,
          renderTime: latestRenderEntry.duration,
        }));

        // 清除性能记录，避免内存泄漏
        performance.clearMarks("renderTimeStart");
        performance.clearMarks("renderTimeEnd");
        performance.clearMeasures("renderTime");
      }

      // 更新数据点数量
      setPerfMetrics((prev) => ({
        ...prev,
        dataPoints: chartData.length,
      }));
    });
    return chart;
  };

  // 虚拟渲染方法（DataZoom实现）
  const renderVirtual = () => {
    const chart = chartInstance.current;
    const start = 0,
      end = 20;

    // 开始记录渲染时间
    performance.mark("renderTimeStart");

    // DataZoom配置
    const dataZoomConfig = [
      {
        type: "slider",
        xAxisIndex: [0],
        start,
        end,
      },

      {
        type: "slider",
        yAxisIndex: [0],
        start: 0,
        end: 100,
      },
    ];

    chart.setOption({
      ...baseChartConfig,
      dataZoom: dataZoomConfig,
      series: [
        {
          type: "scatter",
          data: chartData,
          throttle: 2000,
          ...optimizations,
        },
      ],
      title: { text: `虚拟渲染` },
    });
  };
  // 分片加载方法
  const renderChunked = () => {
    const chart = chartInstance.current;
    const chunkSize = 10000;

    // 开始记录渲染时间
    performance.mark("renderTimeStart");

    chart.setOption({
      ...baseChartConfig,
      series: [
        {
          type: "scatter",
          data: chartData,
          progressive: chunkSize,
          progressiveThreshold: 2000,
          ...optimizations,
        },
      ],
      title: { text: "分片加载" },
    });
  };
  // LTTB降采样方法
  const renderLTTB = () => {
    const chart = chartInstance.current;

    // 开始记录渲染时间
    performance.mark("renderTimeStart");

    chart.setOption({
      ...baseChartConfig,
      series: [
        {
          type: "line",
          data: chartData,
          sampling: "lttb",
          lineStyle: { width: 1 },
          showSymbol: false,
          ...optimizations,
        },
      ],
      title: { text: "LTTB降采样（官方实现）" },
    });
  };

  // MinMax降采样方法
  const renderMinMax = () => {
    const chart = chartInstance.current;
    // 开始记录渲染时间
    performance.mark("renderTimeStart");
    chart.setOption({
      ...baseChartConfig,
      series: [
        {
          type: "line",
          data: chartData,
          sampling: "minmax",
          lineStyle: { width: 1 },
          showSymbol: false,
          ...optimizations,
        },
      ],
      title: { text: "MinMax降采样（官方实现）" },
    });
  };

  // 渲染方法切换
  useEffect(() => {
    console.log("初始化图表");
    if (!chartData.length) return;

    // 创建渲染函数映射表
    const handlerMap = {
      renderChunked,
      renderVirtual,
      renderLTTB,
      renderMinMax,
    };

    setIsLoading(true);

    if (chartInstance.current) chartInstance.current.dispose();

    chartInstance.current = initChart();
    // 通过函数名称查找对应的处理函数并执行
    const handler = handlerMap[activeMethod.handlerName];
    if (handler) {
      handler();
    } else {
      console.error(`未找到处理函数: ${activeMethod.handlerName}`);
    }

    setIsLoading(false);
  }, [activeMethod, chartData, optimizations]);

  // 优化配置切换
  const handleOptimizationChange = (key) => {
    setOptimizations((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="w-full flex min-h-screen p-4 bg-gray-50">
      {/* 展示区域 */}
      <section className="flex-4/5 mr-4">
        {/* 控制区域 */}
        <div className="mb-6 space-y-4">
          {/* 方法选择按钮 */}
          <div className="flex flex-wrap gap-2">
            {renderMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setActiveMethod(method)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
              ${
                activeMethod.id === method.id
                  ? "bg-blue-600 text-white shadow-md hover:bg-blue-700"
                  : "bg-white text-gray-600 shadow-sm hover:bg-gray-50 border border-gray-200"
              }`}
              >
                {method.label}
              </button>
            ))}
          </div>

          {/* 优化配置选项 */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              性能选项配置
            </h3>
            <div className="flex flex-wrap gap-4">
              {optimizationConfigs.map((config) => (
                <label
                  key={config.key}
                  className="flex items-center space-x-2 text-sm text-gray-600"
                >
                  <input
                    type="checkbox"
                    checked={optimizations[config.key]}
                    onChange={() => handleOptimizationChange(config.key)}
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <span>{config.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          {isLoading ? (
            <div className="h-full w-full flex items-center justify-center bg-gray-50/50">
              <div className="text-center space-y-2">
                <div className="animate-spin inline-block w-6 h-6 border-2 border-current border-t-transparent text-blue-600 rounded-full" />
                <p className="text-gray-600 text-sm">数据加载中...</p>
              </div>
            </div>
          ) : (
            <div ref={chartRef} className="w-full h-[610px]" />
          )}
        </div>
      </section>

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

export default LargeDataChart;
