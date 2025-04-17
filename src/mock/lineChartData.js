// src/mock/lineChartData.js
import Mock from "mockjs";

export const getLineChartData = () => {
  // 生成30万条数据
  return Mock.mock({
    "data|10000": [
      {
        date: '@datetime("yyyy-MM-dd HH:mm")',
        // 金额随机在1-10之间，保留2位小数
        "value|1-100000.1": 1,
      },
    ],
  });
};
