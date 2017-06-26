<template>
  <div>
    <mu-appbar title="OpenStack">
      <mu-icon-button icon="menu" slot="left" v-on:click="close" />
      <mu-icon-button @click.native="openDialog()" slot="right" icon="color_lens"/>
  </mu-appbar>

    <bf-dialog :open="dialog" title="Change Theme">
      <div>
          <div v-for="theme in themes" :key="theme.name" :class="'top-frame-list muse-theme-backgroud-theme-' + theme.name" @click="changeTheme(theme.name)">
            <mu-icon-button v-if='theme.selected' icon="check" slot="left"/>
            <mu-icon-button v-if='!theme.selected' icon="play_arrow" slot="left"/>
            <div class="mu-appbar-title">{{theme.name}}</div>
          </div>
      </div>

      <div>
        <mu-flat-button primary label="Cancel" @click="closeDialog()" slot="right"/>
      </div>
    </bf-dialog>
  </div>
</template>


<script>

import MaterialSetting from '@/theme/theme'

export default {
  name: 'top_bar',
  props: ['navOpen', 'navWidth'],
  data: function () {
    let themes = MaterialSetting.all()
    let theme = this.$cookie.get('ADMIN_THEME')
    if (!theme) {
      theme = 'default'
    }
    const styleEl = this.getThemeStyle()
    styleEl.innerHTML = MaterialSetting.getTheme(theme) || ''
    document.body.className = 'muse-theme-' + theme
    for (let index in themes) {
      if (theme === themes[index].name) {
        themes[index].selected = true
      } else {
        themes[index].selected = false
      }
    }
    return {
      theme: theme,
      themes: themes,
      dialog: false
    }
  },
  methods: {
    closeDialog () {
      this.dialog = false
    },
    openDialog () {
      this.dialog = true
    },
    changeTheme (theme) {
      if (this.theme !== theme) {
        for (let index in this.themes) {
          if (this.themes[index].name === theme) {
            this.themes[index].selected = true
          } else {
            this.themes[index].selected = false
          }
        }
        this.$cookie.set('ADMIN_THEME', theme)
        this.theme = theme
        const styleEl = this.getThemeStyle()
        styleEl.innerHTML = MaterialSetting.getTheme(theme) || ''
        document.body.className = 'muse-theme-' + theme
      }
    },
    getThemeStyle () {
      const themeId = 'muse-theme'
      let styleEl = document.getElementById(themeId)
      if (styleEl) return styleEl
      styleEl = document.createElement('style')
      styleEl.id = themeId
      document.body.appendChild(styleEl)
      return styleEl
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>
