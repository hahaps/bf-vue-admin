<template>
  <mu-dialog :open="open" scrollable
             :dialogClass="width"
             bodyClass="mu-dialog-container">

    <div :class="classes">
      <div class="title">{{title}}</div>
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
    open: {
      type: Boolean,
      default: false
    },
    title: String,
    type: {
      type: String,
      default: 'primary'
    }
  },
  data () {
    let classes = 'mu-dialog-header '
    classes += 'mu-raised-button-' + this.type
    return {
      classes: classes
    }
  }
}
</script>
