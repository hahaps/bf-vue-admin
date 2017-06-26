import Vue from 'vue'
import VueRouter from 'vue-router'
import {Dashboard} from '@/router/base'
import Frame from '@/components/common/frame/Frame.vue'
import Overview from '@/components/panels/overview/panels'
import Physical from '@/components/panels/physical/panels'
import Virtual from '@/components/panels/virtual/panels'
import Setting from '@/components/panels/setting/panels'

Vue.use(VueRouter)

let dashboard = new Dashboard([
  Overview, Physical, Virtual, Setting
])

export default new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/home/overview'
  }, {
    path: '/',
    name: 'home',
    component: Frame,
    children: dashboard.toRouter()
  }]
})
