<template>
  <mu-drawer class="bf-table-detail-view"
             :open="true"
             :zDepth="1" :docked="true">
    <router-link class="bf-table-detail-view-close" :to="closeTo">
      <bf-icon name="angle-right" scale="3"></bf-icon>
    </router-link>
    <div class="bf-table-detail-view-main">
      <slot></slot>
    </div>
  </mu-drawer>
</template>

<script>

export default {
  props: {
    closeTo: Object
  }
}

</script>
