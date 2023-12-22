<template>
  <div ref="topo" id="cabinetview" style="width:100%;height:100vh">

  </div>
</template>

<script>
export default {
  name: 'MonitorTopo',
  props: {

  },
  components: {
    TopoTemplate
  },
  data() {
    return {
      loading: false,
      contextMenus: [],
      graphView: null,
      listView: null,
      listViewDataModel: null,
      dataModel: null,
      colorOptions: {
        fontColor: '#282828'
      },
      topoDataObj: [],
      tableDataArr: []
    };
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {
    for (var i = 0; i < 8; i++) {
      ht.Default.setImage('book' + i, 'res/book' + i + '.jpg');
    }
    this.init()
  },
  methods: {
    init() {
      const dataModel = new ht.DataModel();
      const graphView = new ht.graph.GraphView(dataModel);
      const view = graphView.getView();

      console.log(dataModel,graphView,view, 'view');
      view.className = 'main';
      view.style.cssText = 'margin:0;position:absolute;padding:0;top:0;bottom:0;left:0;right:0;'
      document.getElementById('cabinetview').appendChild(view);
      window.addEventListener('resize', function (e) {
        graphView.invalidate();
      }, false);

      const grid = new ht.Grid();
      grid.setSize(500, 240);
      grid.setStyle('grid.row.count', 2);
      grid.setStyle('grid.column.count', 5);
      grid.setStyle('grid.border', 8);
      grid.setStyle('grid.gap', 8);
      grid.setStyle('grid.depth', -5),
        grid.setStyle('grid.cell.depth', -1),
        grid.setStyle('grid.cell.border.color', null);
      grid.setStyle('grid.background', '#E5BB77');
      grid.setStyle('select.width', 0);
      dataModel.add(grid);
      graphView.translate(280, 150);
    },
    onMenuShow() { return true },

  },
};
</script>

<style scoped lang="scss">
</style>
