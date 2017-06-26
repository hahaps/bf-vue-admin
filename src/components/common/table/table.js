import Table from './Table.vue'
import TableView from './TableView'
import DetailView from './DetailView'

export default {
  install (Vue) {
    Vue.component('bf-table', Table)
    Vue.component('bf-table-view', TableView)
    Vue.component('bf-detail-view', DetailView)
  }
}
