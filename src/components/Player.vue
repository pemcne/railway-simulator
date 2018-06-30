<template>
  <div>
    <p>Player</p>
    <Inventory v-bind:name="inventory"/>
  </div>
</template>

<script>
import Inventory from './Inventory'
export default {
  name: 'Player',
  components: {
    Inventory
  },
  computed: {
    inventory () {
      return this.$store.state.player.inventory
    }
  }
}
</script>
