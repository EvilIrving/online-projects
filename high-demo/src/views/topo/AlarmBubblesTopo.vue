<template>
  <div v-loading='loading' style="height:100%">
    <topo-template :uid='1234' ref='topoTemplate' :contextMenus="contextMenus" :onMenuShow="onMenuShow" @load-success='topoLoad' />
  </div>
</template>

<script>
import topoArr from './js/data'
import TopoTemplate from './coms/TopoTemplate.vue'
export default {
  name: 'AlarmBubblesTopo',
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
      topoDataArr: [],
      tableDataArr: []
    };
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.initAxios()
    this.initImage()
  },
  mounted() {

  },
  methods: {
    initImage() {
      // const Images = require.context('../../assets/svgIcon/', false, /\.svg$/)
      // Images.keys().forEach(image => {
      //   const Img = Images[image]
      //   const Names = image.split('/')
      //   const ImgName = Names[Names.length - 1].slice(0, -4)
      //   // console.log(imgName, 'image');
      //   ht.Default.setImage(ImgName, Img)
      // });


      ht.Default.setImage('kafei', require('../../assets/svgIcon/kafei.svg'))
      ht.Default.setImage('huoguo', require('../../assets/svgIcon/huoguo.svg'))
      ht.Default.setImage('jituizhaji', require('../../assets/svgIcon/jituizhaji-13.svg'))
      ht.Default.setImage('mianbao', require('../../assets/svgIcon/mianbao.svg'))
      ht.Default.setImage('shalaqingshi', require('../../assets/svgIcon/shalaqingshi.svg'))
    },

    onMenuShow() { return true },

    initAxios() {
      return new Promise((resolve, reject) => {
        let condition = true
        if (condition) {
          resolve(topoArr)
        } else {
          reject('error')
        }
      })
    },
    queryListData() { },
    topoLoad({ GraphView: graphView, DataModel: dataModel, listView, listViewDataModel, ContextMenu }) {
      this.graphView = graphView
      this.dataModel = dataModel
      this.listView = listView
      this.listViewDataModel = listViewDataModel

      // TODO  查询数据
      this.topoDataArr = this.initAxios()
      // 下边
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
      dataModel.add(text);
      let topNode = new ht.Node();
      topNode.setSize(30, 30);
      topNode.setPosition(300, 100);
      topNode.setImage('kafei')
      topNode.setStyle('label', '一级资源库')
      dataModel.add(topNode);

      let topGroup = new ht.Group();
      topGroup.setExpanded(true);
      topGroup.s({
        "group.padding.left": "100",
        "group.padding.right": "100",

      })
      console.log(topGroup);
      topGroup.addChild(topNode)
      dataModel.add(topGroup);

      graphView.setMovableFunc = () => true
      // graphView.fitContent(true)
      graphView.setSelectableFunc = ((data) => data.a('objId'))

      listView.setRowHeight(50)
      listView.getIcon = () => 'iconName'
      listView.getIconWidth = () => 200
      listView.onDataDoubleClicked = (data) => {
        const { ID } = data.getAttrObject()
        if (ID) this.tableDataArr = this.initAxios() // TODO 查询列表数据
      }
    },
    renderCC() { },
    renderParent() { },
    renderChildrenGrid() { },
    renderChild() { },

    clearData() {
      this.graphView.reset()
      this.dataModel.clear()
    },
    resize() {
      this.$$refs.topoTemplate.resize()
    }
  },
};
</script>

<style scoped lang="scss">
</style>
