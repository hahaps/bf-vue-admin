import {PanelGroup} from '@/router/base'

import hostPanel from './hosts/panel'

export default new PanelGroup('Physical', [
  hostPanel
], {
  icon: 'storage',
  slug: 'physical'
})
