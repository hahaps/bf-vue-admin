// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueCookie from 'vue-cookie'
import App from './App'
import router from './router/index'

import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import table from '@/components/common/table/table'
import dialog from '@/components/common/dialog/dialog'

import 'animate.css/animate.min.css'
import 'material-design-icons/iconfont/material-icons.css'
import MaterialSetting from './theme/theme'
import '@/components/common/frame/frame.less'
import '@/components/common/table/table.less'
import '@/components/common/dialog/dialog.less'

/* Setting all theme. */
MaterialSetting.init(Vue)

Vue.config.productionTip = false
Vue.use(VueCookie)
Vue.use(table)
Vue.use(dialog)
Vue.component('bf-icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
