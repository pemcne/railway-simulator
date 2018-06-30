<template>
  <div id="market">
    <p>Market - {{name}}</p>
    <MarketInventory v-bind:name="inventory" />
  </div>
</template>

<script>
import MarketInventory from './MarketInventory'
export default {
  name: 'Market',
  props: ['name'],
  components: {
    MarketInventory
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
