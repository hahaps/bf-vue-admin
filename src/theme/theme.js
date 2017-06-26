import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import defaultTheme from '!raw-loader!muse-ui/dist/theme-default.css'
import lightTheme from '!raw-loader!muse-ui/dist/theme-light.css'
import darkTheme from '!raw-loader!muse-ui/dist/theme-dark.css'
import carbonTheme from '!raw-loader!muse-ui/dist/theme-carbon.css'
import teaTheme from '!raw-loader!muse-ui/dist/theme-teal.css'

const themes = {
  default: {
    raw: defaultTheme
  },
  light: {
    raw: lightTheme
  },
  dark: {
    raw: darkTheme
  },
  carbon: {
    raw: carbonTheme
  },
  teal: {
    raw: teaTheme
  }
}

const MaterialSetting = {
  all: function () {
    let all = []
    for (let key in themes) {
      all.push({
        name: key
      })
    }
    return all
  },
  init: function (Vue) {
    Vue.use(MuseUI)
  },
  getTheme: function (theme) {
    return themes[theme].raw
  }
}

export default MaterialSetting
