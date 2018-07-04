<template>
  <div id="market">
    <p>Market - {{name}}</p>
    <MarketInventory v-bind:name="inventory" />
  </div>
</template>

<script>
import MarketInventory from './MarketInventory'
import {createNamespacedHelpers} from 'vuex'

const { mapGetters } = createNamespacedHelpers('market')
export default {
  name: 'Market',
  props: ['name'],
  components: {
    MarketInventory
  },
  computed: {
    ...mapGetters([
      'getMarket'
    ]),
    market () {
      return this.getMarket(this.name)
    },
    inventory () {
      return this.market.inventory
    }
  }
}
</script>

<style>
#market {
  border: 1px black solid;
}
</style>
