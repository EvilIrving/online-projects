<template>
  <div ref="cabinetview" :class="'page-wrapper'">
  </div>
</template>

<script>
export default {
  name: 'CabinetView',
  props: {

  },
  components: {

  },
  data() {
    return {

    };
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      ht.Default.setImage('cabinet', require('assets/img/bg-cabinet.png'));
      ht.Default.setImage('logo', require('assets/logo.png'));
      let dataModel = new ht.DataModel();
      let graphView = new ht.graph.GraphView(dataModel);
      let view = graphView.getView();

      view.className = 'main';
      this.$refs.cabinetview.appendChild(view)
      window.addEventListener('resize', function (e) {
        graphView.invalidate();
      }, false);

      let grid = new ht.Grid();
      grid.setSize(500, 240);
      grid.setStyle('grid.row.count', 1);
      grid.setStyle('grid.column.count', 1);
      grid.setStyle('grid.border', 8);
      grid.setStyle('grid.gap', 10);
      grid.setStyle('grid.depth', -5);
      grid.setStyle('grid.cell.depth', -1);
      grid.setStyle('grid.cell.border.color', null);
      grid.setStyle('grid.background', '#E5BB77');
      grid.setStyle('select.width', 0);
      dataModel.add(grid);

      let node = new ht.Node();
      node.setImage('logo');
      node.setStyle('attach.row.index', 1);
      node.setStyle('attach.column.index', 1);
      node.setStyle('attach.padding', -2);
      node.setStyle('select.width', 0);
      node.setHost(grid);
      dataModel.add(node);


      graphView.translate(280, 150);
      graphView.fitContent(true)
    }
  },
};
</script>

<style lang="scss">
.page-wrapper {
  position: relative;
  width: 100%;
  height: 600px;
  background-color: antiquewhite;
  .main {
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
