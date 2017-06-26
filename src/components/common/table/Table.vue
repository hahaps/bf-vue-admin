<template>
  <div class="bf-grid-table" :name="slug">
    <mu-flexbox :gutter="0" justify="flex-start" wrap="nowrap"
                class="header">
      <slot name="table-header">
        <mu-flexbox-item v-if="showSelect" grow="0" shrink="0"
                         class="checkbox" basis="60px">
          <mu-checkbox />
        </mu-flexbox-item>
        <mu-flexbox-item v-for="(h, $index) in headers" :key="$index" class="header-col">
          <div class="header-field">
            <span>{{h.name}}</span>
          </div>
          <div class="sort" v-if="h.sort">
            <mu-icon :value="'arrow_downward'" :size="18" />
          </div>
        </mu-flexbox-item>
      </slot>
    </mu-flexbox>
    <mu-flexbox :gutter="0" justify="flex-start" wrap="nowrap"
                class="body" v-for="(d, $index) in datas" :key="$index">
      <mu-flexbox-item v-if="showSelect" grow="0" shrink="0"
                       class="checkbox" basis="60px">
        <mu-checkbox />
      </mu-flexbox-item>
      <mu-flexbox-item v-for="(h, $idx) in headers" :key="$idx"
                       class="body-col">
        <div class="body-field">
          <slot name="table-body-col" :header="h" :data="d">{{d[h.slug]}}</slot>
        </div>
      </mu-flexbox-item>
    </mu-flexbox>
    <slot name="table-footer"></slot>
  </div>
</template>

<script>

export default {
  props: {
    slug: {
      type: String,
      default: 'table'
    },
    showSelect: Boolean,
    headers: {
      type: Array,
      default () {
        return []
      }
    },
    datas: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>
