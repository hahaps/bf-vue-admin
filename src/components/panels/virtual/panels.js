import {PanelGroup} from '@/router/base'

import instancePanel from './instances/panel'

export default new PanelGroup('Virtual', [
  instancePanel
], {
  icon: 'tv',
  slug: 'virtual'
})
