<template>
  <div class="frm-container">
    <left class="frm-left" :width="width" :open="open"
          v-on:close="close"></left>
    <div class="frm-right" :style="{marginLeft: width + 'px'}">
      <top :nav-width="width" v-on:close="close"></top>
      <div class="frm-container-main">
          <router-view class="animated fadeIn"></router-view>
      </div>
    </div>
  </div>
</template>

<script>

import TopBar from './TopBar.vue'
import LeftNav from './LeftNav.vue'

export default {
  name: 'frame',
  data () {
    return {
      width: 280,
      open: true
    }
  },
  methods: {
    close () {
      if (this.open) {
        this.open = !this.open
        this.width = 60
      } else {
        this.open = !this.open
        this.width = 280
      }
    }
  },
  components: {
    top: TopBar,
    left: LeftNav
  }
}

</script>
