<template>
  <tr>
    <td>{{resource.name}}</td>
    <td>{{amount}}</td>
  </tr>
</template>

<script>
export default {
  name: 'ResourceItem',
  props: ['shortCode', 'amount'],
  computed: {
    resource () {
      return this.$store.getters.resource(this.shortCode)
    }
  }
}
</script>

<style>
</style>
