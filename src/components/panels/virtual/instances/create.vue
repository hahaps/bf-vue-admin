<template>
  <bf-wizard-view :close-to="{name: 'virtual_instances'}"
                  width="larger"
                  title="Create Server" :steps="steps" slug="instance_create"
                  :loading="false">
  </bf-wizard-view>
</template>

<script>

  export default {
    data () {
      return {
        steps: [{
          slug: 'basic',
          label: 'Basic Info',
          fields: [{
            slug: 'hostname1',
            label: 'Host Name',
            hint: 'Please input hostname'
          }, {
            slug: 'ip1',
            label: 'Ip Addr',
            hint: 'Please input Ip address'
          }, {
            slug: 'password1',
            type: 'password',
            label: 'Root password',
            hint: 'Please input root password'
          }, {
            slug: 'dep1',
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
        }, {
          slug: 'second',
          label: 'Disk Info',
          fields: [{
            slug: 'hostname2',
            label: 'Host Name',
            hint: 'Please input hostname'
          }, {
            slug: 'ip2',
            label: 'Ip Addr',
            hint: 'Please input Ip address'
          }, {
            slug: 'password2',
            type: 'password',
            label: 'Root password',
            hint: 'Please input root password'
          }, {
            slug: 'dep2',
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
        }, {
          slug: 'third',
          label: 'Network Info',
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
        }]
      }
    },
    methods: {
    }
  }
</script>
