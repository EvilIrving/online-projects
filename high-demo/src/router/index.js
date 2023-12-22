import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// import Layout from '@/layout'
/* Layout */
import Layout from '@/layout'

export const routes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/map/HnMap'),
        name: 'index',
        meta: { title: '河南地图', icon: 'index', }
      }
    ]
  },
  {
    path: '/three',
    component: Layout,
    redirect: '/three/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/three/Three'),
        name: 'three',
        meta: { title: 'three', icon: 'index', }
      }
    ]
  },
  // {
  //   path: '/cabint',
  //   component: Layout,
  //   redirect: '/cabint/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/topo/MonitorTopo'),
  //       name: 'index',
  //       meta: { title: '机柜视图', icon: 'index', }
  //     }
  //   ]
  // },
  {
    path: '/topo',
    component: Layout,
    redirect: '/topo/index',
    alwaysShow: true,
    meta: { title: 'High Topo', icon: 'index', },
    children: [
      {
        path: 'index',
        component: () => import('@/views/topo/MonitorTopo'),
        name: 'topo',
        meta: { title: '监测', icon: 'topo', }
      },
      {
        path: 'alarm',
        component: () => import('@/views/topo/AlarmBubblesTopo'),
        name: 'topo',
        meta: { title: 'demo2', icon: 'topo', }
      },
      {
        path: 'cabinet',
        component: () => import('@/views/topo/CabinetView'),
        name: 'cabinet',
        meta: { title: '机柜视图', icon: 'topo', }
      },
    ]
  },

  {
    path: '/gante',
    name: 'gante',
    component: Layout,
    redirect: '/gante/weeklyCalendarChart',
    alwaysShow: true,
    meta: { title: '甘特图', icon: 'index', },
    children: [
      {
        path: 'weeklyCalendarChart',
        component: () => import('@/views/gante/WeeklyCalendarChart'),
        name: 'WeeklyCalendarChart',
        meta: { title: 'demo1', alwaysShow: true, }
      },
      {
        path: 'weeklyWorkOrderCalendar',
        component: () => import('@/views/gante/WeeklyWorkOrderCalendar'),
        name: 'WeeklyWorkOrderCalendar',
        meta: { title: 'demo2', }
      }
    ]
  },
  {
    path: '/design',
    component: Layout,
    redirect: '/design/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/designPatterns/DesignPattern'),
        name: 'DesignPattern',
        meta: { title: '设计模式', icon: 'topo', }
      }
    ]
  },
  {
    path: '/twaver',
    component: Layout,
    redirect: '/twaver/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/TWaver/index.vue'),
        name: 'DesignPattern',
        meta: { title: 'TWaver', icon: 'TWaver', }
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
