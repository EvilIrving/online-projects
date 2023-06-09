// init graphView
var dm = new ht.DataModel();
var gv = new ht.graph.GraphView(dm);
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
var node = new ht.Node();
node.setPosition(100, 100);
node.setSize(100, 100);
node.setTag('Node1');
node.setName('Node1');
node.s('label', 'Node1');
dm.add(node);
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
    dm.add(node);
}
function removeLastNode() {
    var lastData = dm.getSelectionModel().getLastData();
    lastData && dm.remove(lastData);
}
function clearAllNode() {
    dm.clear();
}
