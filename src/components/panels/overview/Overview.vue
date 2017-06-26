<template>
  <bf-table-view :show-select="true" :headers="headers" :datas="datas"></bf-table-view>
</template>

<script>

export default {
  data () {
    return {
      headers: [{
        name: 'Name',
        sort: 'sort',
        slug: 'name',
        component: {
          name: 'router-link'
        }
      }, {
        name: 'Age',
        slug: 'age'
      }, {
        name: 'Color',
        slug: 'color'
      }, {
        name: 'test1',
        slug: 'test1'
      }, {
        name: 'test2',
        slug: 'test2'
      }, {
        name: 'test3',
        slug: 'test3'
      }],
      datas: [{
        name: 'testtesttesttesttesttesttesttsttesttsttesttsttestt',
        age: 'bbb',
        color: '<div>aaaa</div>'
      }]
    }
  }
}
</script>
