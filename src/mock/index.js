import Mock from 'mockjs'

// 模拟 projects 数据
Mock.mock('/api/projects', 'get', {
  'projects|5-10': [{
    'id|+1': 1,
    'name': '@ctitle(3, 5)',
    'description': '@cparagraph(1, 3)',
    'status|1': ['进行中', '已完成', '已延期']
  }]
})

export default Mock