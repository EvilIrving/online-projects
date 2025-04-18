import React, { useState, useEffect, useRef } from "react";
import * as echarts from "echarts";
import { getLineChartData } from "@/mock/lineChartData";

const LargeDataChart = () => {
  const [chartData, setChartData] = useState([]);
  const [chartLength, setChartLength] = useState(0);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const renderTypes = [
    {
      label: "分片加载",
      value: "chunked",
      desc: "使用 progressive 和 progressiveThreshold 设定片大小",
    },
    { label: "虚拟渲染", value: "virtual", desc: "DataZoom 设定 min & max" },
    { label: "聚合优化", value: "aggregated", desc: "自定义降采样方案" },
    { label: "Lttp", value: "lttp", desc: "官方降采样" },
    { label: "MinMax", value: "minmax", desc: "官方降采样" },
  ];
  const [activeTab, setActiveTab] = useState(renderTypes[0]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch data
    console.time("fetchData");
    const data = getLineChartData();
    setChartLength(data.data.length);
    // Format data for chart and sort by date
    console.timeEnd("fetchData");
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
        text: "大数据量散点图优化示例",
        left: "center",
      },
      legend: {
        data: ["金额"],
        left: "left",
      },
      tooltip: {
        trigger: "item",
        formatter: function (params) {
          return `${params.data[0]}<br/>金额: ${params.data[1].toFixed(2)} 元`;
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
          type: "scatter",
          symbolSize: function (data) {
            // 根据数值大小调整点的大小
            return Math.min(8, Math.max(2, data[1] / 10000));
          },
          itemStyle: {
            color: function (params) {
              // 根据数值大小调整颜色
              const value = params.data[1];
              return value > 50000
                ? "#c23531"
                : value > 30000
                ? "#2f4554"
                : "#61a0a8";
            },
            opacity: 0.7,
          },
          emphasis: {
            itemStyle: {
              color: "#c23531",
              borderColor: "#fff",
              borderWidth: 2,
            },
          },
          data: [],
        },
      ],
    };

    chart.setOption(option);
    return chart;
  };

  // 分片加载
  const loadChunkedData = async () => {
    setIsLoading(true);

    // Initialize chart
    if (!chartInstance.current) {
      chartInstance.current = initChart(chartRef.current);
    }

    // Set initial empty chart
    const progressive = chartLength / 10;
    chartInstance.current.setOption({
      series: [
        {
          data: chartData,
          progressive: progressive, // 渐进渲染
          progressiveThreshold: 5000, // 渐进渲染阈值
        },
      ],
      title: {
        text: `分片加载，每次${progressive}`,
      },
    });

    setIsLoading(false);
  };

  // Data Zoom 加载
  const loadVirtualRenderingData = () => {
    setIsLoading(true);

    if (!chartInstance.current) {
      chartInstance.current = initChart(chartRef.current);
    }

    const start = 0,
      end = 20;
    chartInstance.current.setOption({
      dataZoom: [
        {
          type: "inside",
          start,
          end,
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
        text: `DataZoom 加载${start}%-${end}%`,
      },
    });

    // Handle zoom events for virtual rendering
    let startIndex = 0;
    let endIndex = Math.floor(chartLength * 0.2);

    chartInstance.current.on("datazoom", function () {
      const option = chartInstance.current.getOption();
      const startValue = option.dataZoom[0].startValue || 0;
      const endValue = option.dataZoom[0].endValue || endIndex;

      // Update visible range
      startIndex = Math.max(0, Math.floor(startValue));
      endIndex = Math.min(chartLength, Math.ceil(endValue) + 1);

      // Update title to show current range
      chartInstance.current.setOption({
        title: {
          text: `DataZoom (当前显示: ${startIndex}-${endIndex})`,
        },
      });
    });

    setIsLoading(false);
  };

  // 降采样 lttb minmax
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
    const aggregationFactor = chartLength / 10;
    const aggregatedData = aggregateData(chartData, aggregationFactor);

    // Update chart
    chartInstance.current.setOption({
      series: [
        {
          data: aggregatedData,
        },
      ],
      title: {
        text: `聚合优化 (${chartLength}个点聚合为${aggregatedData.length}个点)`,
      },
    });

    setIsLoading(false);
  };

  // 使用官方降采样
  const loadSamplingData = (samplingType) => {
    setIsLoading(true);

    if (!chartInstance.current) {
      chartInstance.current = initChart(chartRef.current);
    }

    // Update chart
    chartInstance.current.setOption({
      series: [
        {
          type: "line",
          data: chartData,
          showSymbol: false,
          sampling: samplingType,
        },
      ],
      title: {
        text: `官方降采样:${samplingType}`,
      },
    });

    setIsLoading(false);
  };

  // Switch optimization method and reload data
  useEffect(() => {
    if (!chartLength) return;

    // Clear previous chart instance
    if (chartInstance.current) {
      chartInstance.current.dispose();
      chartInstance.current = null;
    }

    const renderTypeMap = {
      chunked: loadChunkedData,
      virtual: loadVirtualRenderingData,
      aggregated: loadAggregatedData,
      lttp: loadSamplingData,
      minmax: loadSamplingData,
    };

    if (renderTypeMap[activeTab.value]) {
      renderTypeMap[activeTab.value](activeTab.value);
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
        <h2 className="text-lg font-bold mb-2">渲染优化</h2>
        <div className="flex space-x-2">
          {renderTypes.map((type) => (
            <button
              key={type.value}
              className={`px-4 py-2 rounded ${
                activeTab.value === type.value
                  ? "bg-blue-500 text-black"
                  : "bg-gray-200"
              }`}
              onClick={() => setActiveTab(type)}
              disabled={isLoading}
            >
              {type.label}
            </button>
          ))}
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
        <div>{activeTab.desc}</div>
      </div>
    </div>
  );
};

export default LargeDataChart;
