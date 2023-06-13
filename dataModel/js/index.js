// init graphView
var dm = new ht.DataModel();
var gv = new ht.graph.GraphView(dm);
var treeView = new ht.widget.TreeView(dm);
gv.setEditable(true);
dm.setBackground('#000');
gv.addToDOM();
// init formPane and add event bindings
var formPane = window.createFormPane();
formPane.getViewById('Add').onClicked = addNode;
formPane.getViewById('Remove').onClicked = removeLastNode;
formPane.getViewById('Clear').onClicked = clearAllNode;
dm.addDataModelChangeListener(function (e) {
    if (e.kind === 'add') {
        formPane.getItemById('data_name').element.setText(e.data.getName());
        formPane.getItemById('data_kind').element.setText('added');
    }
    else if (e.kind === 'remove') {
        formPane.getItemById('data_name').element.setText(e.data.getName());
        formPane.getItemById('data_kind').element.setText('removed');
    }
    else {
        formPane.getItemById('data_name').element.setText('dataModel');
        formPane.getItemById('data_kind').element.setText('cleared');
    }
});
dm.addDataPropertyChangeListener(function (e) {
    if (!e.data || e.property === '*')
        return;
    formPane.getItemById('data_name_1').element.setText(e.data.getName());
    formPane.getItemById('data_property').element.setText(e.property);
    formPane.getItemById('data_event').element.setText('changed');
});
var nodeOut = new ht.Node();
nodeOut.setPosition(100, 100);
nodeOut.setSize(100, 100);
nodeOut.setTag('nodeOut1');
nodeOut.setName('nodeOut1');
nodeOut.s('label', 'nodeOut1');
dm.add(nodeOut);
function addNode() {
    var node = new ht.Node();
    node.setSize(100, 100);
    var roots = dm.getRoots().toArray();
    node.setTag('Node' + (roots.length + 1));
    node.setName('Node' + (roots.length + 1));
    node.s('label', 'Node' + (roots.length + 1));
    var lastData = roots[roots.length - 1];
    var x = lastData ? lastData.getPosition().x + 150 : 150;
    node.setPosition(x, 100);
    node.setParent(nodeOut)
    dm.add(node);

    console.log(node.getParent(),dm.getDatas(),dm.getView());
}
function removeLastNode() {
    var lastData = dm.getSelectionModel().getLastData();
    lastData && dm.remove(lastData);
}
function clearAllNode() {
    dm.clear();
}
// init graph3dView
var graph3dView = init3d();
var leftSplit = new ht.widget.SplitView(gv, graph3dView, 'vertical', 0.6);
var mainSplit = new ht.widget.SplitView(leftSplit, treeView, 'horizontal', 0.7);
mainSplit.addToDOM();
var node = new ht.Node();
node.setPosition(100, 150);
node.setSize(100, 100);
node.setTall(100);
node.setTag('Node1');
node.s('label', 'Node1');
node.setName('Node1');
dm.add(node);
function init3d() {
    if (!ht.graph3d) {
        return;
    }
    var graph3dView = new ht.graph3d.Graph3dView(dm);
    graph3dView.setGridVisible(true);
    return graph3dView;
}
function addNode() {
    var node = new ht.Node();
    node.setSize(100, 100);
    node.setTall(100);
    var roots = dm.getRoots().toArray();
    node.setTag('Node' + (roots.length + 1));
    node.s('label', 'Node' + (roots.length + 1));
    node.setName('Node' + (roots.length + 1));
    var lastData = roots[roots.length - 1];
    var x = lastData ? lastData.getPosition().x + 150 : 150;
    node.setPosition(x, 150);
    dm.add(node);
}
function removeNode() {
    var lastData = dm.getSelectionModel().getLastData();
    lastData && dm.remove(lastData);
}
function clearNode() {
    dm.clear();
}