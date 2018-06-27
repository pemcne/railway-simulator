<template>
  <div id="market">
    <p>Market {{name}}</p>
    <Inventory v-bind:name="inventory" />
  </div>
</template>

<script>

export default {
  name: 'Market',
  props: ['name'],
  computed: {
    inventory () {
      return this.$store.state.markets[this.name].inventory
    }
  }
}
</script>

<style>
#market {
  border: 1px black solid;
}
</style>
