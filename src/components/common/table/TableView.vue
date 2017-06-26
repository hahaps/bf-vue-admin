<template>
  <div class="bf-table-view">
    <div class="bf-table-actions">
      <div class="actions-show">
        <mu-raised-button :class="'mu-raised-button-inverse mu-raised-button-' + action.type"
                          v-for="(action, name) in actions.show" :key="name" :label="action.name"
                          :icon="action.icon" @click="action.handle"/>
      </div>
      <div class="actions-search"></div>
      <div class="actions-more" v-if="actions.more">
        <mu-icon-menu class="mu-flat-button-primary" icon="more_vert" tooltip="更多" primary>
          <mu-menu-item v-for="(action, name) in actions.more" :key="name"
                        :title="action.name" :leftIcon="action.icon" />
        </mu-icon-menu>
      </div>
    </div>
    <div class="bf-table-container" :style="{minHeight: minHeight + 'px'}">
      <bf-table :show-select="showSelect"
                :headers="headers"
                :datas="datas"
                v-on:selected="selected"
                v-on:sorted="sorted">
        <template slot="table-body-col" scope="that">
          <slot :name="'table-body-col-' + that.header.slug" :header="that.header" :data="that.data">
            {{that.data[that.header.slug]}}
          </slot>
        </template>
      </bf-table>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  props: {
    actions: Object,
    showActions: {
      type: Boolean,
      default: true
    },
    showSelect: {
      type: Boolean,
      default: true
    },
    headers: Array,
    datas: Array,
    showFooter: {
      type: Boolean,
      default: true
    },
    minHeight: {
      type: Number,
      default: 200
    }
  },
  methods: {
    selected (selectedItems) {
      this._doSelected(selectedItems)
      this.$emit('tableItemsSelected', selectedItems)
    },
    _doSelected (selectedItems) {
    },
    sorted (field, direction) {
      this._doSorted(field, direction)
      this.$emit('tableFieldSorted', {
        field: field,
        direction: direction
      })
    },
    _doSorted (field, direction) {
    }
  }
}
</script>
