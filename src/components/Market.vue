<template>
  <div id="market">
    <p>Market - {{name}}</p>
    <Inventory v-bind:name="inventory" />
  </div>
</template>

<script>
import Inventory from './Inventory'
export default {
  name: 'Market',
  props: ['name'],
  components: {
    Inventory
  },
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
