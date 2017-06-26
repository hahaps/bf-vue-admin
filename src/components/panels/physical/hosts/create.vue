<template>
  <bf-form-view :close-to="{name: 'physical_hosts'}"
                title="Create Host" :fields="fields" slug="host_create"
                :loading="false">
  </bf-form-view>
</template>

<script>

  export default {
    data () {
      return {
        fields: [{
          slug: 'hostname',
          label: 'Host Name',
          hint: 'Please input hostname'
        }, {
          slug: 'ip',
          label: 'Ip Addr',
          hint: 'Please input Ip address'
        }, {
          slug: 'password',
          type: 'password',
          label: 'Root password',
          hint: 'Please input root password'
        }, {
          slug: 'dep',
          type: 'select',
          label: 'Dependencies',
          hint: 'Please select dependencies hosts',
          options: [{
            val: '192.168.0.1',
            label: 'node-1'
          }, {
            val: '192.168.0.2',
            label: 'node-2'
          }]
        }]
      }
    },
    methods: {
    }
  }
</script>
