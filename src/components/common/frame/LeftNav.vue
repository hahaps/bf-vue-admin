<template>
<mu-drawer :open="true" :width="width" :zDepth="1" :docked="true">
  <div class="frm-nav-main" v-show="!open">

    <div class="frm-logo logo-small">
        <div id="frm_logo" class="logo"
             :style="{backgroundImage: 'url(' + logo.src + ')'}" />
    </div>
    <div class="frm-left-nav">
      <mu-list :value="nav" @change="changeItem">
        <div v-for="nav in navs" :key="nav.name">
          <mu-list-item tag="div">
            <mu-icon :class="nav.fire?'mu-flat-button-primary':''" :value="nav.icon" v-on:click="close"/>
          </mu-list-item>
        </div>
      </mu-list>
    </div>
  </div>

  <div class="frm-nav-main" v-show="open">
    <div class="frm-logo">
        <div id="frm_logo" class="logo"
             :style="{backgroundImage: 'url(' + logo.src + ')'}" />
    </div>
    <div class="frm-left-nav">
      <mu-list :value="nav" @change="changeItem">
        <div v-for="nav in navs" :key="nav.name">
          <mu-list-item v-if="nav.subs"
                        :title="nav.name"
                        toggleNested
                        tag="div" :open="nav.fire">
            <mu-icon slot="left" :value="nav.icon" />
            <mu-list-item inset slot="nested" v-for="sub in nav.subs"
                          :key="sub.name" :value="sub.slug"
                          :title="sub.name">
            </mu-list-item>
          </mu-list-item>
          <mu-list-item v-if="!nav.subs" inset
                        :title="nav.name" :value="nav.slug">
            <div class="nav-icon-left"><mu-icon :value="nav.icon"/></div>
          </mu-list-item>
        </div>
      </mu-list>
    </div>
  </div>
</mu-drawer>
</template>

<script>

import logo from '@/assets/logo.svg'

export default {
  name: 'left_nav',
  props: ['width', 'open'],
  data () {
    let nav
    let matched = this.$route.matched
    let routes = this.$router.options.routes
    let homeRoutes = []
    let navDict = {}
    let navs = []
    for (let index in routes) {
      if (routes[index].name === 'home') {
        homeRoutes = routes[index].children
        break
      }
    }
    for (let index in homeRoutes) {
      if (!homeRoutes[index].meta) {
        continue
      }
      if (homeRoutes[index].meta.parent) {
        if (!navDict[homeRoutes[index].meta.parent.slug]) {
          navDict[homeRoutes[index].meta.parent.slug] = {
            name: homeRoutes[index].meta.parent.name,
            slug: homeRoutes[index].meta.parent.slug,
            icon: homeRoutes[index].meta.parent.icon,
            subs: [],
            fire: false
          }
        } else {
          continue
        }
        navDict[homeRoutes[index].meta.parent.slug].subs.push({
          name: homeRoutes[index].meta.name,
          slug: homeRoutes[index].name
        })
        for (let idx in matched) {
          if (matched[idx].name === homeRoutes[index].name) {
            navDict[homeRoutes[index].meta.parent.slug].fire = true
            nav = matched[idx].name
          }
        }
      } else {
        navDict[homeRoutes[index].name] = {
          name: homeRoutes[index].meta.name,
          slug: homeRoutes[index].name,
          icon: homeRoutes[index].meta.icon,
          fire: false
        }
        for (let idx in matched) {
          if (matched[idx].name === homeRoutes[index].name) {
            nav = matched[idx].name
            navDict[homeRoutes[index].name].fire = true
          }
        }
      }
    }
    for (let index in navDict) {
      navs.push(navDict[index])
    }

    // NOTE(HHP): For listen route changed event.
    let that = this
    this.$router.afterEach(route => {
      let isBreak = false
      for (let index in that.navs) {
        that.navs[index].fire = false
        if (isBreak) continue
        if (that.navs[index].subs) {
          let match = this._matched(route.matched, that.navs[index].subs)
          if (!match) {
            continue
          }
          that.navs[index].fire = true
          isBreak = true
          continue
        }
        for (let idx in route.matched) {
          if (route.matched[idx].name === that.navs[index].slug) {
            that.navs[index].fire = true
            isBreak = true
            break
          }
        }
      }
    })
    return {
      logo: {
        src: logo,
        alt: 'Vue admin demo'
      },
      navs: navs,
      homeRoutes: homeRoutes,
      nav: nav
    }
  },
  methods: {
    _matched (matched, arr) {
      for (let index in matched) {
        for (let idx in arr) {
          if (matched[index].name === arr[idx].slug) {
            return true
          }
        }
      }
      return false
    },
    changeItem (val) {
      this.nav = val
      for (let index in this.homeRoutes) {
        if (this.homeRoutes[index].name === val) {
          this.$router.push({path: this.homeRoutes[index].path})
        }
      }
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>
