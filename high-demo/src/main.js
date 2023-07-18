import Vue from 'vue'
import App from './App.vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'



import _ from 'lodash'


import './registerServiceWorker'
import router from './router'
import store from './store'
import olMapUtil from './utils/olMapUtils.js'

Vue.prototype.$olMapUtil = olMapUtil;

import './icons' // icon

Vue.config.productionTip = false
Vue.prototype._ = _

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
})
Vue.use(dataV)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
