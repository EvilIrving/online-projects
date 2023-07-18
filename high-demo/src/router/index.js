import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// import Layout from '@/layout'
const routes = [
  {
    path: '/gante',
    title: '甘特图',
    component: () => import('@/views/map/HnMap'),
    name: 'HnMap',
    meta: { title: 'HnMap', }
  },
  {
    path: '/alarm',
    title: '甘特图',
    component: () => import('@/views/topo/AlarmBubblesTopo'),
    name: 'AlarmBubblesTopo',
    meta: { title: 'AlarmBubblesTopo', }
  },
  {
    path: '/',
    title: 'three',
    component: () => import('@/views/three/Three'),
    name: 'three',
    meta: { title: 'three', }
  },
  {
    path: '/topo',
    name: 'topo',
    component: null,
    title: '甘特图',
    redirect: '/monitortopo',
    meta: { title: 'topo', },
    children: [
      // {
      //   path: '/topo/alarm',
      //   title: '甘特图',
      //   component: (resolve) => require(['views/topo/AlarmBubblesTopo'],resolve),
      //   name: 'AlarmBubblesTopo',
      //   meta: { title: 'AlarmBubblesTopo', }
      // },
      {
        path: '/topo/monitortopo',
        title: '甘特图',
        component: (resolve) => require(["views/topo/MonitorTopo"], resolve),
        name: 'MonitorTopo',
        meta: { title: 'MonitorTopo', }
      }
    ]
  },
  {
    path: '/gante',
    name: 'gante',
    redirect: '/weeklyCalendarChart',
    component: () => import('@/views/topo/AlarmBubblesTopo'),
    meta: { title: 'gante', },
    children: [
      {
        path: 'gante/weeklyCalendarChart',
        title: '甘特图',
        component: () => import('@/views/gante/WeeklyCalendarChart'),
        name: 'WeeklyCalendarChart',
        meta: { title: 'WeeklyCalendarChart', }
      },
      {
        path: 'gante/weeklyWorkOrderCalendar',
        title: '日历',
        component: () => import('@/views/gante/WeeklyWorkOrderCalendar'),
        name: 'WeeklyWorkOrderCalendar',
        meta: { title: 'WeeklyWorkOrderCalendar', }
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
