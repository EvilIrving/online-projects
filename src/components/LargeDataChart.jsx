import React, { useState, useEffect, useRef } from "react";
import * as echarts from "echarts";
import { getLineChartData } from "@/mock/lineChartData";

const LargeDataChart = () => {
  const [chartData, setChartData] = useState([]);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [activeTab, setActiveTab] = useState("chunked");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch data
    const data = getLineChartData();
    // Format data for chart and sort by date
    const formattedData = data.data
      .map((item) => [item.date, item.value])
      .sort((a, b) => new Date(a[0]) - new Date(b[0])); // 按日期升序排序
    setChartData(formattedData);
  }, []);

  // Initialize chart base configuration
  const initChart = (containerRef) => {
    if (!containerRef) return null;

    // 渲染引擎 优化
    const chart = echarts.init(containerRef, null, { renderer: "canvas" });
    const option = {
      title: {
        text: "大数据量折线图优化示例 (30万数据点)",
        left: "center",
      },
      legend: {
        data: ["金额"],
        left: "left",
      },

      tooltip: {
        trigger: "axis",
        formatter: function (params) {
          const data = params[0];
          return `${data.name}<br/>${data.seriesName}: ${data.value[1].toFixed(
            2
          )} 元`;
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          formatter: function (value) {
            return value;
          },
        },
      },
      yAxis: {
        type: "value",
        scale: true,
        axisLabel: {
          formatter: "{value} 元",
        },
      },
      series: [
        {
          name: "金额",
          type: "line",
          sampling: "lttb",
          showSymbol: false,
          lineStyle: {
            width: 1,
          },
          emphasis: {
            focus: "series",
          },
          data: [],
        },
      ],
    };

    chart.setOption(option);
    return chart;
  };

  // Chunked loading implementation
  const loadChunkedData = async () => {
    setIsLoading(true);
    // const CHUNK_SIZE = 10000;
    // const totalChunks = Math.ceil(chartData.length / CHUNK_SIZE);

    // Initialize chart
    if (!chartInstance.current) {
      chartInstance.current = initChart(chartRef.current);
    }

    // Set initial empty chart
    chartInstance.current.setOption({
      series: [
        {
          data: chartData,
          progressive: 10000, // 渐进渲染
          progressiveThreshold: 5000, // 渐进渲染阈值
        },
      ],
      title: {
        text: `大数据量折线图 - 分片加载 (${chartData.length}个数据点)`,
      },
    });

    // Progressive rendering
    // for (let i = 0; i < totalChunks; i++) {
    //   const start = i * CHUNK_SIZE;
    //   const end = Math.min(start + CHUNK_SIZE, chartData.length);
    //   const chunk = chartData.slice(start, end);

    //   chartInstance.current.appendData({
    //     seriesIndex: 0,
    //     data: chunk,
    //   });

    //   // Update title to show loading progress
    //   chartInstance.current.setOption({
    //     title: {
    //       text: `大数据量折线图 - 分片加载 (${end}/${chartData.length}个数据点)`,
    //     },
    //   });

    //   // Add delay to observe progressive loading
    //   await new Promise((resolve) => setTimeout(resolve, 100));
    // }

    setIsLoading(false);
  };

  // Virtual rendering implementation
  const loadVirtualRenderingData = () => {
    setIsLoading(true);

    if (!chartInstance.current) {
      chartInstance.current = initChart(chartRef.current);
    }

    // Configure virtual rendering
    chartInstance.current.setOption({
      dataZoom: [
        {
          type: "inside",
          start: 0,
          end: 20, // Initially show 20% of data
          zoomLock: false,
        },
        {
          type: "slider",
          start: 0,
          end: 20,
        },
      ],
      series: [
        {
          data: chartData,
        },
      ],
      title: {
        text: `大数据量折线图 - 虚拟渲染 (初始显示20%数据)`,
      },
    });

    // Handle zoom events for virtual rendering
    let startIndex = 0;
    let endIndex = Math.floor(chartData.length * 0.2);

    chartInstance.current.on("datazoom", function () {
      const option = chartInstance.current.getOption();
      const startValue = option.dataZoom[0].startValue || 0;
      const endValue = option.dataZoom[0].endValue || endIndex;

      // Update visible range
      startIndex = Math.max(0, Math.floor(startValue));
      endIndex = Math.min(chartData.length, Math.ceil(endValue) + 1);

      // Update title to show current range
      chartInstance.current.setOption({
        title: {
          text: `大数据量折线图 - 虚拟渲染 (当前显示: ${startIndex}-${endIndex})`,
        },
      });
    });

    setIsLoading(false);
  };

  // Aggregation optimization implementation
  const loadAggregatedData = () => {
    setIsLoading(true);

    // Initialize chart
    if (!chartInstance.current) {
      chartInstance.current = initChart(chartRef.current);
    }

    // Data aggregation function - group data and calculate averages
    const aggregateData = (data, aggregationFactor) => {
      const result = [];
      const step = Math.max(1, Math.floor(data.length / aggregationFactor));

      for (let i = 0; i < data.length; i += step) {
        let sum = 0;
        let count = 0;
        let date = "";

        const end = Math.min(i + step, data.length);
        for (let j = i; j < end; j++) {
          sum += data[j][1];
          count++;
          // Take the middle point's date as representative
          if (j === Math.floor((i + end) / 2)) {
            date = data[j][0];
          }
        }

        if (count > 0) {
          result.push([
            date, // representative date
            sum / count, // average value
          ]);
        }
      }

      return result;
    };

    // Set aggregation factor - final number of points to display
    const aggregationFactor = 30000;
    const aggregatedData = aggregateData(chartData, aggregationFactor);

    // Update chart
    chartInstance.current.setOption({
      series: [
        {
          data: aggregatedData,
        },
      ],
      title: {
        text: `大数据量折线图 - 聚合优化 (${chartData.length}个点聚合为${aggregatedData.length}个点)`,
      },
    });

    setIsLoading(false);
  };

  // WebGL 渲染实现
  const loadWebGLData = () => {
    setIsLoading(true);

    if (!chartInstance.current) {
      chartInstance.current = initChart(chartRef.current);
    }

    // 格式化数据为 WebGL 所需格式 [时间索引, 值]
    const webglData = chartData.map((item, index) => [index, item[1]]);

    // 设置 WebGL 配置
    chartInstance.current.setOption({
      title: {
        text: `大数据量折线图 - WebGL渲染 (${chartData.length}个数据点)`,
      },
      xAxis: {
        type: "category",
        data: chartData.map((item) => item[0]),
        axisLabel: {
          formatter: function (value) {
            return value;
          },
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value} 元",
        },
      },
      series: [
        {
          name: "金额",
          type: "line", // 保持为线图类型
          data: webglData,
          renderItem: function (params, api) {
            // 使用renderItem自定义WebGL渲染
            return {
              type: "line",
              shape: {
                x1: api.coord([api.value(0), api.value(1)])[0],
                y1: api.coord([api.value(0), api.value(1)])[1],
                x2: api.coord([api.value(0) + 1, api.value(1)])[0],
                y2: api.coord([api.value(0) + 1, api.value(1)])[1],
              },
              style: {
                stroke: api.visual("color"),
                lineWidth: 1,
              },
            };
          },
          // 开启 WebGL 渲染模式
          progressive: 20000,
          progressiveThreshold: 30000,
          progressiveChunkMode: "mod",
          // 大数据集开启 large 模式
          large: true,
          largeThreshold: 10000,
        },
      ],
    });

    setIsLoading(false);
  };

  // Switch optimization method and reload data
  useEffect(() => {
    if (!chartData.length) return;

    // Clear previous chart instance
    if (chartInstance.current) {
      chartInstance.current.dispose();
      chartInstance.current = null;
    }

    switch (activeTab) {
      case "chunked":
        loadChunkedData();
        break;
      case "virtual":
        loadVirtualRenderingData();
        break;
      case "aggregated":
        loadAggregatedData();
        break;
      case "webgl":
        loadWebGLData();
        break;
      default:
        loadChunkedData();
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.dispose();
      }
    };
  }, [activeTab, chartData]);

  // Adjust chart when window size changes
  useEffect(() => {
    const handleResize = () => {
      if (chartInstance.current) {
        chartInstance.current.resize();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col w-full mx-auto p-4 text-black">
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">30万数据点加载优化方案</h2>
        <div className="flex space-x-2">
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "virtual" ? "bg-blue-500 text-black" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("virtual")}
            disabled={isLoading}
          >
            虚拟渲染
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "chunked" ? "bg-blue-500 text-black" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("chunked")}
            disabled={isLoading}
          >
            分片加载
          </button>

          <button
            className={`px-4 py-2 rounded ${
              activeTab === "aggregated"
                ? "bg-blue-500 text-black"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("aggregated")}
            disabled={isLoading}
          >
            聚合优化
          </button>
          <button
            className={`px-4 py-2 rounded mb-2 ${
              activeTab === "webgl" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("webgl")}
            disabled={isLoading}
          >
            WebGL渲染
          </button>
        </div>
      </div>

      {isLoading && (
        <div className="inset-0 flex items-center justify-center bg-white bg-opacity-70 z-10">
          <div className="text-xl font-bold">加载中...</div>
        </div>
      )}

      <div className="border border-gray-300 rounded p-2">
        <div ref={chartRef} className="w-full h-96" />
      </div>

      <div className="mt-4 p-4 bg-gray-100 rounded">
        <h3 className="font-bold mb-2">当前优化方案说明:</h3>
        {activeTab === "chunked" && (
          <div>
            <p className="mb-2">
              <strong>分片加载:</strong>{" "}
              将数据分割成多个片段，逐片加载并累积显示。
            </p>
            <p>优点: 分步处理减轻了浏览器负担，避免卡顿。</p>
            <p>缺点: 前期加载的数据可能不能代表整体趋势。</p>
          </div>
        )}
        {activeTab === "virtual" && (
          <div>
            <p className="mb-2">
              <strong>虚拟渲染:</strong>{" "}
              只渲染当前视口内的数据，滚动或缩放时动态加载数据。
            </p>
            <p>优点: 高效处理超大数据集，内存占用低。</p>
            <p>缺点: 实现较复杂，需要处理缩放事件。</p>
            <p className="mt-2 text-blue-600">
              提示: 使用鼠标滚轮或拖动下方滑块缩放查看不同区域数据
            </p>
          </div>
        )}
        {activeTab === "aggregated" && (
          <div>
            <p className="mb-2">
              <strong>聚合优化:</strong>{" "}
              对原始数据进行聚合计算，减少实际渲染的数据点数量。
            </p>
            <p>优点: 显著减少渲染压力，保持数据趋势。</p>
            <p>缺点: 细节信息可能丢失，不适合需要精确展示的场景。</p>
          </div>
        )}
        {activeTab === "webgl" && (
          <div>
            <p className="mb-2">
              <strong>WebGL渲染:</strong>{" "}
              使用图形硬件加速，直接在GPU上渲染图表。
            </p>
            <p>优点: 最佳性能表现，能流畅处理百万级数据点。</p>
            <p>缺点: 对老旧浏览器和设备兼容性较差，加载初始资源较大。</p>
            <p className="mt-2 text-blue-600">
              提示: 此模式充分利用显卡加速，对大数据集渲染效果最佳
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LargeDataChart;
