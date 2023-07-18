import _ from 'lodash'
const groupPosition = {
    'one': '管理员',
    'two': '中心',
    'three': '用户',
    'four': '用户2'
}

const ps = {
    'one': { x: 300, y: 100 },
    'two': { x: 300, y: 400 },
    'three': { x: 300, y: 700 },
    'four': { x: 700, y: 400 },
}

const formatNode = function (data) {
    const groups = {}
    data.forEach(node => {
        let hasGroup = Object.keys(groups).includes(node.group)  //  _.includes(Object.keys(groups), node.group)
        groups[node.group]?.nodes.every(no => !(_.isEqual(no, node))) && groups[node.group].nodes.push(node)
        if (!hasGroup) {
            groups[node.group] = {
                groupName: node.groupName,
                nodes: [node]
            }
        }
    });
    return groups
}

const createGroup = function (groups, style) {
    const g = [], t = []
    groups.forEach((group, index) => {
        let groupView = new ht.Group();
        const style = {
            "group.padding": "20",
            "group.background": "transparent",
            "group.border.pattern": [5, 5],
            "group.border.color": "#ccc",
        }
        groupView.a({
            name: group,
            id: group
        })
        groupView.setExpanded(true);
        groupView.s(style)
        groupView.a('id') === 'one' && groupView.s({
            "group.padding.left": "100",
            "group.padding.right": "100",
        })

        // groupView.setPosition(ps[groupView.a('id')].x, ps[groupView.a('id')].y)

        let text = new ht.Text();
        text.s({
            'text': groupPosition[group],
            'text.color': '#666',
            'text.vertical': true,
            'text.vertical.gap': 4,
            'text.font': '20px arial, sans-serif',
        });

        text.setPosition(ps[groupView.a('id')].x - 100, ps[groupView.a('id')].y + 10);
        text.setSize(150, 100);
        t.push(text)
        g.push(groupView)
    })
    return { t, g }
}

const createNode = function (nodes, style) {
    const n = []
    nodes.forEach(node => {
        let nodeView = new ht.Node()
        nodeView.setSize(30, 30)
        nodeView.setImage('kafei')
        nodeView.a('id', node.id)
        nodeView.a('groupId', node.group)
        nodeView.s({
            'label': node.name,
            'name': node.name,
            'belongGroup': node.group
        })
        n.push(nodeView)
    })
    return n
}

const createLink = function (sourceNode, targetNode, style) {

}


const positionThreeNode = function (node) {

}

export { formatNode, createGroup, createNode, createLink, groupPosition }