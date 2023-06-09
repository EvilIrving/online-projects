// init graphView
var dm = new ht.DataModel();
var gv = new ht.graph.GraphView(dm);
dm.setBackground('#000');
gv.addToDOM();
gv.setEditable(true);
createNode([100, 100], 'Node1');
createNode([250, 100], 'Node2');
createNode([400, 100], 'Node3');
// init formPane and add event bindings
var formPane = window.createFormPane();
var multiComboBox = formPane.getViewById('multi');
var stringComboBox = formPane.getViewById('single');
var selectionModel = dm.getSelectionModel();
selectionModel.addSelectionChangeListener(function (e) {
    var selectionArr = e.datas.toArray();
    if (e.kind === 'set') {
        var lastSelection = selectionModel.getLastData();
        lastSelection && formPane.getItemById('selection_name').element.setText(lastSelection.getTag());
        lastSelection && formPane.getItemById('selection_kind').element.setText('is selected');
    }
    else if (e.kind === 'append') {
        var nameStr_1 = formPane.getItemById('selection_name').element.getText();
        selectionArr.forEach(function (data) {
            if (nameStr_1 == '')
                nameStr_1 = data.getTag();
            nameStr_1 += ',' + data.getTag();
        });
        formPane.getItemById('selection_name').element.setText(nameStr_1);
        formPane.getItemById('selection_kind').element.setText('is selected');
    }
    else if (e.kind === 'all') {
        formPane.getItemById('selection_name').element.setText('all nodes');
        formPane.getItemById('selection_kind').element.setText('are selected');
    }
    else if (e.kind === 'clear') {
        formPane.getItemById('selection_name').element.setText('selectionModel');
        formPane.getItemById('selection_kind').element.setText('is cleared');
        stringComboBox.setValue('');
        multiComboBox.setValue('');
    }
});
multiComboBox.onValueChanged = function (oldValue, newValue) {
    if (oldValue !== newValue) {
        var nameArr_1 = newValue.split(',');
        dm.toDatas().each(function (data) {
            if (nameArr_1.indexOf(data.getTag()) >= 0) {
                selectionModel.appendSelection(data);
            }
        });
    }
};
stringComboBox.onValueChanged = function (oldValue, newValue) {
    if (oldValue !== newValue) {
        var selction = dm.getDataByTag(newValue);
        selction && selectionModel.setSelection(selction);
    }
};
var nameArr = [];
dm.toDatas().each(function (data) { return nameArr.push(data.getName()); });
stringComboBox.setValues(nameArr);
formPane.getViewById('All').onClicked = selectAll;
formPane.getViewById('Clear').onClicked = clearSelection;
function createNode(position, name) {
    var node = new ht.Node();
    node.setSize(100, 100);
    node.s('label', name);
    node.setTag(name);
    node.setName(name);
    node.setPosition(position[0], position[1]);
    dm.add(node);
}
function selectAll() {
    selectionModel.selectAll();
}
function clearSelection() {
    selectionModel.clearSelection();
}
