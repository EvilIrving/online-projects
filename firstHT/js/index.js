// init graphView
var dm = new ht.DataModel();
var gv = new ht.graph.GraphView(dm);
console.log(dm.getName(),'--');
dm.setBackground('#000');
gv.addToDOM();
var node = new ht.Node();
dm.add(node);
node.setSize(100, 50);
node.setPosition(200, 100);
