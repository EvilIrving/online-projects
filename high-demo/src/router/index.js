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
  {
    path: '/topo',
    component: Layout,
    redirect: '/topo/index',
    children: [
      {
        path: 'index',
        component: ()=>import('@/views/topo/MonitorTopo'),
        name: 'topo',
        meta: { title: '拓扑图', icon: 'topo', }
      }
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
        meta: { title: '甘特图',alwaysShow: true, }
      },
      {
        path: 'weeklyWorkOrderCalendar',
        component: () => import('@/views/gante/WeeklyWorkOrderCalendar'),
        name: 'WeeklyWorkOrderCalendar',
        meta: { title: '日历', }
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
        component: ()=>import('@/views/designPatterns/DesignPattern'),
        name: 'DesignPattern',
        meta: { title: '设计模式', icon: 'topo', }
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
