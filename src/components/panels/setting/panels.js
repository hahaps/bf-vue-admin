import {PanelGroup} from '@/router/base'
import Setting from './index.vue'

export default new PanelGroup('Settings', [], {
  icon: 'settings',
  single: true,
  route: {
    name: 'settings',
    path: '/home/settings',
    component: Setting
  }
})
