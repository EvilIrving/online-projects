<template>
  <div v-loading='loading' style="width:100%;height:100%">
    <topo-template :uid='1234' :showListView="false" ref='topoTemplate' :contextMenus="contextMenus" :onMenuShow="onMenuShow" @load-success='topoLoad' />
  </div>
</template>

<script>
import topoArr from './js/data'
import { formatNode, createGroup, createNode, createLink, groupPosition } from "./js/util";
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
      topoDataObj: [],
      tableDataArr: []
    };
  },
  computed: {

  },
  watch: {

  },
  created() {
    // this.initAxios()
    this.initImage()
  },
  mounted() {

  },
  methods: {
    initImage() {
      // const Images = require.context('assets/svgIcon/', false, /\.svg$/)
      // Images.keys().forEach(image => {
      //   const Img = Images[image]
      //   const Names = image.split('/')
      //   const ImgName = Names[Names.length - 1].slice(0, -4)
      //   ht.Default.setImage(ImgName, Img)
      // });


      ht.Default.setImage('kafei', require('assets/svgIcon/kafei.svg'))
      ht.Default.setImage('huoguo', require('assets/svgIcon/huoguo.svg'))
      ht.Default.setImage('jituizhaji', require('assets/svgIcon/jituizhaji-13.svg'))
      ht.Default.setImage('mianbao', require('assets/svgIcon/mianbao.svg'))
      ht.Default.setImage('shalaqingshi', require('assets/svgIcon/shalaqingshi.svg'))
    },

    onMenuShow() { return true },

    initAxios() {
      return new Promise((resolve, reject) => {
        let condition = true
        if (condition) {
          const data = formatNode(topoArr)
          console.log(data, 'init');
          resolve(data)
        } else {
          reject('error')
        }
      })
    },
    queryListData() { },

    async topoLoad({ GraphView: graphView, DataModel: dataModel, listView, listViewDataModel, ContextMenu }) {
      this.graphView = graphView
      this.dataModel = dataModel
      this.listView = listView
      this.listViewDataModel = listViewDataModel

      // 渲染node
      const nodes = []
      this.topoDataObj = await this.initAxios()
      Object.keys(groupPosition).forEach(key => {
        // nodes.push({
        //   [key]: [...createNode(this.topoDataObj[key].nodes, {})]
        // })
         nodes.push(...createNode(this.topoDataObj[key].nodes, {}))
      })
      nodes.forEach(node => {
        node.a('groupId') === 'one' && node.setPosition(300, 100)

        if (node.a('groupId') === 'two') {
          node.setPosition(300, 400)
        }

        if (node.a('groupId') === 'three') {
          positionThreeNode(node)
          // node.setPosition(300, 700)
        }

        if (node.a('groupId') === 'four') {
          node.setPosition(700, 400)
        }
        dataModel.add(node)
      })


      // 渲染组以及文字
      const groups = createGroup(Object.keys(groupPosition))
      groups['g'].forEach(group => {
        nodes.forEach(node => {
          node.a('groupId') === group.a('id') && group.addChild(node)
        })
        dataModel.add(group)
      })
      nodes.forEach(node => {
        groups['g'].forEach(group => {
          node.a('groupId') === group.a('id') && group.addChild(node)
        })
      })
      groups['t'].forEach(text => dataModel.add(text))


      graphView.setMovableFunc = () => true
      graphView.fitContent(true)
      graphView.setSelectableFunc = ((data) => data.a('objId'))

      listView.setRowHeight(50)
      listView.getIcon = () => 'iconName'
      listView.getIconWidth = () => 200
      listView.onDataDoubleClicked = (data) => {
        const { ID } = data.getAttrObject()
        // if (ID) this.tableDataArr = this.initAxios() // TODO 查询列表数据
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
