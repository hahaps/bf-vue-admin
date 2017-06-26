<template>
  <mu-dialog :open="true" scrollable
             :dialogClass="width"
             bodyClass="mu-dialog-container">
    <div class="mu-dialog-header mu-raised-button-primary mu-flat-button-primary">
      <div class="title">{{title}}</div>
      <div class="close">
        <mu-icon-button :to="closeTo" icon="clear"></mu-icon-button>
      </div>
    </div>
    <div class="mu-dialog-content">
        <slot></slot>
    </div>
  </mu-dialog>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: 'normal'
    },
    title: String,
    closeTo: Object
  }
}
</script>
