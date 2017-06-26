<template>
  <div>
    <bf-table-view :show-select="true" :headers="headers"
                   :datas="datas" :show-actions="true"
                   :actions="actions" v-model="selected">
      <template slot="table-body-col-name" scope="that">
        <router-link :to="'/home/physical/hosts/' + that.data[that.header.slug]">{{that.data[that.header.slug]}}</router-link>
      </template>
    </bf-table-view>
  </div>

</template>

<script>

export default {
  data () {
    let _this = this
    return {
      showSelect: true,
      selected: [],
      headers: [{
        name: 'Name',
        sort: true,
        slug: 'name'
      }, {
        name: 'Age',
        slug: 'age'
      }, {
        name: 'Color',
        slug: 'color'
      }],
      datas: [{
        name: 'Green Dream',
        age: '27',
        color: 'Grey'
      }, {
        name: 'Steven Curry',
        age: '30',
        color: 'Black'
      }, {
        name: 'Keven Durant',
        age: '28',
        color: 'Blue'
      }],
      showActions: true,
      actions: {
        more: {
          start: {
            icon: 'play_arrow',
            name: 'Start',
            all: 'single',
            handle () {
              console.log('do start')
            }
          },
          stop: {
            icon: 'pause',
            name: 'Stop',
            all: 'single',
            handle () {
              console.log('do start')
            }
          },
          update: {
            icon: 'update',
            name: 'Update',
            all: 'single',
            handle () {
              console.log('do start')
            }
          }
        },
        show: {
          create: {
            icon: 'add',
            name: 'Create',
            allow: 'all',
            type: 'primary',
            handle () {
              _this.$router.push({path: '/home/physical/hosts/post/create'})
            }
          },
          delete: {
            icon: 'delete',
            name: 'Delete',
            allow: 'single',
            type: 'secondary',
            handle () {
              console.log('do delete')
            }
          }
        },
        search: {
          bind: 'name'
        }
      }
    }
  }
}
</script>
