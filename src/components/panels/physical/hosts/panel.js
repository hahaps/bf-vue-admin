import {Panel} from '@/router/base'

import HostIndex from './index.vue'
import HostDetail from './detail.vue'
import HostCreate from './create.vue'

export default new Panel('Hosts', {
  name: 'physical_hosts',
  path: '/home/physical/hosts',
  component: HostIndex,
  children: [{
    path: '/home/physical/hosts/:id',
    component: HostDetail
  }, {
    path: '/home/physical/hosts/post/create',
    component: HostCreate
  }]
})
