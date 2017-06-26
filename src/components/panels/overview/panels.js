import {PanelGroup} from '@/router/base'
import Overview from './Overview.vue'

export default new PanelGroup('Overview', [], {
  icon: 'view_quilt',
  single: true,
  route: {
    name: 'overview',
    path: '/home/overview',
    component: Overview
  }
})
