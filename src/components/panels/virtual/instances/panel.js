import {Panel} from '@/router/base'

import InstanceIndex from './index.vue'
import InstanceDetail from './detail.vue'
import InstanceCreate from './create.vue'

export default new Panel('Instances', {
  name: 'virtual_instances',
  path: '/home/virtual/instances',
  component: InstanceIndex,
  children: [{
    path: '/home/virtual/instances/detail',
    component: InstanceDetail
  }, {
    path: '/home/virtual/instances/post/create',
    component: InstanceCreate
  }]
})
