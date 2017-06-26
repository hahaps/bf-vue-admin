import Dialog from './Modal'
import DialogView from './DialogView'
import FormModalView from './FormModalView.vue'
import WizardView from './WizardView.vue'

export default {
  install (Vue) {
    Vue.component('bf-dialog', Dialog)
    Vue.component('bf-dialog-view', DialogView)
    Vue.component('bf-form-view', FormModalView)
    Vue.component('bf-wizard-view', WizardView)
  }
}
