// init graphView

// console.log(topoData,'-----');
var dm = new ht.DataModel();
var gv = new ht.graph.GraphView(dm);
gv.fitContent(false, 100);
gv.addToDOM();
dm.setBackground('#fff');


// 上边
let text = new ht.Text();
text.s({
    'text': '数据同步',
    'text.color': '#666',
    'text.vertical': true,
    'text.vertical.gap': 4,
    'text.font': '20px arial, sans-serif',
});
text.setPosition(180, 110);
text.setSize(150, 100);
dm.add(text);
let topNode = new ht.Node();
topNode.setSize(20, 20);
topNode.setPosition(300, 100);
topNode.setStyle('label', '一级资源库')
dm.add(topNode);

let topGroup = new ht.Group();
topGroup.setExpanded(true);
topGroup.s({
    "group.padding.left": "100",
    "group.padding.right": "100",

})
console.log(topGroup);
topGroup.addChild(topNode)
dm.add(topGroup);

// 中间

let middleNode = new ht.Node();
middleNode.setSize(20, 20);
middleNode.setPosition(300, 300);
middleNode.setStyle('label', '省公司TMS')
dm.add(middleNode);

// 下边
var group = new ht.Group();
group.setExpanded(true);
dm.add(group);
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [12, 13, 14]]
let bottomText = new ht.Text();
bottomText.s({
    'text': '数据采集',
    'text.color': '#666',
    'text.vertical': true,
    'text.vertical.gap': 4,
    'text.font': '20px arial, sans-serif',
});
bottomText.setPosition(130, 580);
bottomText.setSize(150, 100);
dm.add(bottomText);

for (let index = 1; index < 5; index++) {
    let node1 = new ht.Node();
    dm.add(node1);
    node1.setSize(20, 20);
    node1.setPosition(index * 100 + 40, 600);
    node1.setStyle('label', `node${arr[index - 1][0]}`)

    let node2 = new ht.Node();
    dm.add(node2);
    node2.setSize(20, 20);
    node2.setPosition(index * 100 + 100, 600);
    node2.setStyle('label', `node${arr[index - 1][1]}`)

    let node3 = new ht.Node();
    dm.add(node3);
    node3.setSize(20, 20);
    node3.setPosition(index * 100 + 70, 550);
    node3.setStyle('label', `node${arr[index - 1][2]}`)

    let edge1t3 = new ht.Edge(node1, node3);

    edge1t3.s({
        'edge.type': 'points',
        "edge.points": new ht.List([
            {
                'x': index * 100 + 40,
                'y': 600
            },
            {
                'x': index * 100 + 40,
                'y': 550
            },
            {
                'x': index * 100 + 70,
                'y': 550
            },
        ]),
        'edge.color': 'transparent',

    })
    dm.add(edge1t3);

    let edge2t3 = new ht.Edge(node2, node3);
    edge2t3.s({
        'edge.type': 'points',
        "edge.points": new ht.List([
            {
                'x': index * 100 + 100,
                'y': 600
            },
            {
                'x': index * 100 + 100,
                'y': 550
            },
            {
                'x': index * 100 + 100,
                'y': 550
            },
        ]),
        'edge.color': 'transparent',
    })
    dm.add(edge2t3);

    let edge3tmdNode = new ht.Edge(node3, middleNode);
    edge3tmdNode.s({
        'edge.color': '#ccc',
        "edge.segments": new ht.List([
            {
                'x': index * 100 + 70,
                'y': 600
            },
            {
                'x': index * 100 + 70,
                'y': 450
            },
            {
                'x': index * 100 + 170,
                'y': 450
            },
        ]),
    'edge.color': 'transparent',
    })
    dm.add(edge3tmdNode)
    // middleNode

    group.addChild(node1);
    group.addChild(node2);
    group.addChild(node3);
}

// 右边

let rightText = new ht.Text();
rightText.s({
    'text': '数据录入',
    'text.color': '#666',
    'text.vertical': true,
    'text.vertical.gap': 4,
    'text.font': '20px arial, sans-serif',
});
rightText.setPosition(870, 400);
rightText.setSize(150, 100);
dm.add(rightText);

let array = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]

var group2 = new ht.Group();
group2.setExpanded(true);
dm.add(group2);

for (let index = 0; index < array.length; index++) {
    let node1 = new ht.Node();
    dm.add(node1);
    node1.setSize(20, 20);
    node1.setPosition(680, 450 - (index * 150));
    node1.setStyle('label', `nodeF`)

    let node2 = new ht.Node();
    dm.add(node2);
    node2.setSize(20, 20);
    node2.setPosition(730, 400 - (index * 150));
    node2.setStyle('label', `node${array[index][1]}`)

    let node3 = new ht.Node();
    dm.add(node3);
    node3.setSize(20, 20);
    node3.setPosition(730, 450 - (index * 150));
    node3.setStyle('label', `node${array[index][2]}`)

    let node4 = new ht.Node();
    dm.add(node4);
    node4.setSize(20, 20);
    node4.setPosition(730, 500 - (index * 150));
    node4.setStyle('label', `node${array[index][3]}`)

    let edge1t1 = new ht.Edge(node4, node1);
    edge1t1.s({
        'edge.type': 'points',
        "edge.points": new ht.List([
            {
                'x': 680,
                'y': 500 - (index * 150),
            },
        ]),
        'edge.dash': true,
        'edge.dash.flow': true,
        'edge.color': 'transparent',
        'edge.dash.color': '#ccc',

    })
    dm.add(edge1t1);

    let edge2t1 = new ht.Edge(node2, node1);
    edge2t1.s({
        'edge.type': 'points',
        "edge.points": new ht.List([
            {
                'x': 680,
                'y': 400-(index * 150),
            },
        ]),
        'edge.dash': true,
        'edge.dash.flow': true,
        'edge.color': 'transparent',
        'edge.dash.color': '#ccc',

    })
    dm.add(edge2t1);

    let edge3t1 = new ht.Edge(node3, node1);
    edge3t1.s({
        'edge.dash': true,
        'edge.dash.flow': true,
        'edge.color': 'transparent',
        'edge.dash.color': '#ccc',

    })
    dm.add(edge3t1);

    group2.addChild(node1);
    group2.addChild(node2);
    group2.addChild(node3);
    group2.addChild(node4);
}





// 节点连线
let topMiddleEdge = new ht.Edge(topNode, middleNode)
dm.add(topMiddleEdge)


