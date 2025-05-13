// src/mock/lineChartData.js
import Mock from "mockjs";

export const getLineChartData = () => {
  // 生成30万条数据
  return Mock.mock({
    "data|500000": [
      {
        date: '@datetime("yyyy-MM-dd HH:mm")',
        // 金额随机，保留2位小数
        "value|1-1000.1": 1,
      },
    ],
  });
};
