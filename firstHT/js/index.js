// init graphView
var dm = new ht.DataModel();
var gv = new ht.graph.GraphView(dm);
console.log(dm.getName(),'--');
dm.setBackground('#000');
var node = new ht.Node();
dm.add(node);
node.setSize(50, 50);
node.setPosition(200, 100);
gv.addToDOM();
