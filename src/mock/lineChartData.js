// src/mock/lineChartData.js
import Mock from "mockjs";

export const getLineChartData = () => {
  // 生成30万条数据
  return Mock.mock({
    "data|500000": [
      {
        date: '@datetime("yyyy-MM-dd HH:mm")',
        // 金额随机，保留2位小数
        "value|1-100000.1": 1,
      },
    ],
  });
};

export const getMockOrgData = () => {
  // 定义省份列表
  const provinces = ['河南省', '湖北省', '湖南省', '广东省', '浙江省'];
  
  // 生成总部数据
  const headquarters = {
    name: '总部',
    id: Mock.mock('@id'),
    children: [{
      name: '研发部',
      id: Mock.mock('@id'),
      children: [{
        name: '研发一部',
        id: Mock.mock('@id'),
        children: [{
          name: '研发小组',
          id: Mock.mock('@id'),
          children: []
        }]
      }]
    }]
  };

  // 生成省级数据
  const provincialData = provinces.map(province => ({
    name: `${province}总部`,
    id: Mock.mock('@id'),
    children: [
      {
        name: `${province}研发部`,
        id: Mock.mock('@id'),
        children: [{
          name: `${province}研发一部`,
          id: Mock.mock('@id'),
          children: [{
            name: `${province}研发小组`,
            id: Mock.mock('@id'),
            children: []
          }]
        }]
      },
      {
        name: `${province}测试部`,
        id: Mock.mock('@id'),
        children: [{
          name: `${province}测试一部`,
          id: Mock.mock('@id'),
          children: [{
            name: `${province}测试小组`,
            id: Mock.mock('@id'),
            children: []
          }]
        }]
      }
    ]
  }));

  // 合并总部和省级数据
  return [headquarters, ...provincialData];
};
