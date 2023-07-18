<template>
  <div :id="'topo'+uid" style="height:100%;width:100%;position:relative"> </div>
</template>

<script>
import TipsRes from '@/utils/tipsRes.js'
import _ from 'lodash'
const func = function () { }
export default {
  name: 'TopoTemplate',
  props: {
    showListView: {
      type: Boolean,
      default: true,
    },
    contextMenus: {
      type: Array,
      default: () => {
        return []
      }
    },
    onMenuShow: {
      type: Function,
      default: func
    },
    uid: {
      type: [Number, String],
      default: '1234'
    }
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
      // this.init()

    setTimeout(() => {
      this.initTopo()
      this.initTips()
    }, 500)
    window.addEventListener('resize', () => {
      this.resize()
    })
  },
  methods: {
    init() {
      let dataModel = new ht.DataModel();
      let graphView = new ht.graph.GraphView(dataModel);
      let view = graphView.getView();

      view.className = 'main';
      document.body.appendChild(view);
      window.addEventListener('resize', function (e) {
        graphView.invalidate();
      }, false);

      var group = new ht.Group();
      group.setName('Double click on me');
      group.setExpanded(true);
      dataModel.add(group);

      var node1 = new ht.Node();
      node1.setImage('huoguo')
      node1.setName('Node1');
      node1.setPosition(500, 50);
      group.addChild(node1);
      dataModel.add(node1);

      var node2 = new ht.Node();
      node2.setName('Node2');
      node2.setPosition(180, 80);
      node2.setParent(group);
      dataModel.add(node2);

      var node3 = new ht.Node();
      node3.setPosition(130, 140);
      node3.s({
        'label.font': 'bold 21px arial',
        'label.color': 'white',
        'label.offset.y': 8,
        'label.background': '#E74C3C'
      });
      node3.setName('HT for Web');
      node3.setParent(group);
      dataModel.add(node3);

      var node4 = new ht.Node();
      node4.setName('The Special One');
      node4.setStyle('ingroup', false);
      console.log(group.getRect(), '----');
      node4.setPosition(290, 100);
      group.addChild(node4);
      dataModel.add(node4);

      var oldFunc = graphView.getBoundsForGroup;
      graphView.getBoundsForGroup = function (child) {
        if (child === node3) {
          return node3.getRect();
        }
        return oldFunc.call(this, child);
      };
    },
    initTopoBar() {
      const items = [

        {
          id: 'zoomIn',
          icon: 'icon-enlarge',
          name: '放大',
          action: () => {
            this.graphView.zoomIn()
          }
        },
        {
          id: 'zoomOut',
          icon: 'icon-narrow',
          name: '缩小',
          action: () => {
            this.graphView.zoomOut()
          }
        },
        {
          id: 'zoomIn',
          icon: 'icon-enlarge',
          name: '放大',
          action: () => {
            this.graphView.zoomIn()
          }
        },

      ]
      const toolbarItems = []
      items.forEach(({ id, icon, name, action }) => {
        const Bar = { id, name }
        const Element = document.createElement('i')
        Element.className = icon
        Element.title = name
        Element.style.fontSize = '16px'
        bar.element = Element
        Element.addEventListener('click', function () {
          action instanceof Function && action()
        })
        toolbarItems.push(bar)
      })
      return new ht.widget.Toolbar(toolbarItems)
    },
    initListView(listViewDataModel) {
      const ListViewDom = document.createElement('div')
      ListViewDom.style.cssText = 'position:absolute;'
      ListViewDom.className = 'topo-border-right'

      const ListView = new ht.widget.ListView(listViewDataModel)
      ListView.getView().style.cssText = 'margin:0;position:absolute;padding:0;top:0;bottom:0;left:0;right:0;'
      ListViewDom.appendChild(ListView.getView())
      ListView.setAutoHideScrollBar(false)

      return { ListView, ListViewDom }
    },
    initBoderPane(toolbar, listView, graphView) {
      const BorderPane = new ht.widget.BorderPane()
      if (toolbar) BorderPane.setTopView(toolbar)
      if (listView) BorderPane.setLeftView(listView, 201)
      BorderPane.setCenterView(graphView)
      return BorderPane
    },
    initContextMenu(graphView) {
      const menus = []
      this.contextMenus.forEach(({ label, action }) => {
        menus.push({
          label,
          action: (menuItem, event) => {
            const lastData = graphView.sm().ld()
            action && action(lastData, menuItem, event)
          }
        })
      });
      const ContextMenu = new ht.widget.ContextMenu(menus)

      ContextMenu.enableGlobalKey()
      ContextMenu.addTo(graphView.getView())
      ContextMenu.getView().style.zIndex = 9999
      ContextMenu.setVisibleFunc((item) => {
        return this.onMenuShow(item, graphView)
      })
      ContextMenu.afterShow = () => {
        this.tips.hide()
      }
      return ContextMenu

    },

    initTopo() {
      const DataModel = new ht.DataModel()
      const GraphView = new ht.graph.GraphView(DataModel)

      const ToolBar = null
      let listView = null, listViewDataModel = null, listViewDom = null

      if (this.showListView) {
        listViewDataModel = new ht.DataModel()
        const ListViewObj = this.initListView(listViewDataModel)

        listView = ListViewObj.ListView
        listViewDom = ListViewObj.ListViewDom
      }
      const BorderPane = this.borderPane = this.initBoderPane(ToolBar, listViewDom, GraphView)

      const BorderView = BorderPane.getView()
      const ContextMenu = this.initContextMenu(GraphView)
      BorderView.style.cssText = 'margin:0;position:absolute;padding:0;top:0;bottom:0;left:0;right:0;'
      document.querySelector('#topo' + this.uid).appendChild(BorderView)

      this.$emit('load-success', { GraphView, DataModel, listView, listViewDataModel, ContextMenu })

      this.graphView = GraphView
      this.listView = listView
      this.graphView.setAutoHideScrollBar(false)
      this.listView.setAutoHideScrollBar(true)

      this.initTopoListener()
    },
    initTopoListener() {
      this.graphView.adjustZoom = () => { }
      this.graphView.handleScroll = (e) => {
        this.graphView.ty(this.graphView.ty() + e.wheelDelta)
      }

      this.graphView.adjustTranslateX = (tx) => {
        const ContentRect = this.graphView.getContentRect()
        let newRect = _.merge({}, ContentRect)
        ht.Default.grow(newRect, 20)
        let viewRect = this.graphView.getViewRect()
        if (viewRect.width > newRect.width) return 0
        let min = viewRect.width - newRect.width - newRect.x
        return Math.min(0, Math.max(tx, min))
      }
      this.graphView.adjustTranslatey = (ty) => {
        const ContentRect = this.graphView.getContentRect()
        let newRect = _.merge({}, ContentRect)
        ht.Default.grow(newRect, 20)
        let viewRect = this.graphView.getViewRect()
        if (viewRect.height > newRect.height) return 0
        let min = viewRect.height - newRect.height - newRect.y
        return Math.min(0, Math.max(ty, min))
      }
    },
    calcRect(tx, ty) {
      const zoom = this.graphView.getZoom(),
        width = this.graphView.getWidth(),
        height = this.graphView.getHeight()
      return {
        x: -tx / zoom,
        y: -ty / zoom,
        width: width / zoom,
        height: height / zoom
      }
    },
    initTips() {
      const gv = this.graphView.getView()
      const lv = this.listView.getView()
      this.tips = new TipsRes({
        el: document.querySelector('#topo' + this.uid),
        options: {
          trigger: 'manual',
          zIndex: 999
        }
      })

      let tipsTimer = null, last = null


      gv.addEventListener('mouseout', (event) => {
        if (tipsTimer) {
          clearTimeout(tipsTimer)
          last = null
          tipsTimer = null
        }
        const RelatedTarget = event.relatedTarget
        if (!RelatedTarget || RelatedTarget.className.indexOf('tippy') < 0) this.tips.toggleDisable(false)
      })

      gv.addEventListener('mouseover', () => this.tips.toggleDisable(true))

      gv.addEventListener('mousemove', (e) => {
        const elem = this.graphView.getDataAt(e)
        if (elem) {
          const guid = elem.a('guid')
          const extTips = elem.a('extTips')
          if (tipsTimer !== null) {
            clearTimeout(tipsTimer)
            tipsTimer = null
          }
          tipsTimer = setTimeout(() => {
            if (last !== guid) {
              this.tips.hide()
              setTimeout(() => {
                this.tips.show({ guid, event: e, extTips })
              }, 0);
            }
          }, 800);
        } else {
          last = null
          this.tips.hide()
          if (tipsTimer !== null) {
            clearTimeout(tipsTimer)
            tipsTimer = null
          }
        }
      })

      if (this.listView) {
        lv.addEventListener('mouseout', (event) => {
          if (tipsTimer) {
            clearTimeout(tipsTimer)
            last = null
            tipsTimer = null
          }
          const RelatedTarget = event.relatedTarget
          if (!RelatedTarget || RelatedTarget.className.indexOf('tippy') < 0) this.tips.toggleDisable(false)
        })
        lv.addEventListener('mouseover', () => this.tips.toggleDisable(true))
        lv.addEventListener('mousemove', (e) => {
          const elem = this.listView.getDataAt(e)
          if (elem) {
            const guid = elem.a('guid')
            const extTips = elem.a('extTips')
            if (tipsTimer !== null) {
              clearTimeout(tipsTimer)
              tipsTimer = null
            }
            tipsTimer = setTimeout(() => {
              if (last !== guid) {
                this.tips.hide()
                setTimeout(() => {
                  this.tips.show({ guid, event: e, extTips })
                }, 0);
              }
            }, 800);
          } else {
            last = null
            this.tips.hide()
            if (tipsTimer !== null) {
              clearTimeout(tipsTimer)
              tipsTimer = null
            }
          }
        })
      }


    },
    resize() {
      this.borderPane.invalidate()
    }
  },
  activated() {
    this.resize()
  }
};
</script>

<style scoped lang="scss">
</style>
