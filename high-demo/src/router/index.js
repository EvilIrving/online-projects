import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// import Layout from '@/layout'
const routes = [
  {
    path: '/map',
    component: () => import('@/views/map/HnMap'),
    name: 'HnMap',
    meta: { title: 'HnMap', }
  },
  {
    path: '/',
    component: () => import('@/views/topo/AlarmBubblesTopo'),
    name: 'AlarmBubblesTopo',
    meta: { title: 'AlarmBubblesTopo', }
  },
  {
    path: '/topo',
    name: 'topo',
    component: null,
    redirect: '/monitortopo',
    meta: { title: 'topo', },
    children: [
      {
        path: '/monitortopo',
        component: (resolve) => require(["../views/topo/MonitorTopo"], resolve),
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
        component: () => import('@/views/gante/WeeklyCalendarChart'),
        name: 'WeeklyCalendarChart',
        meta: { title: 'WeeklyCalendarChart', }
      },
      {
        path: 'gante/weeklyWorkOrderCalendar',
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
