<template>
  <div>
    <p>Player</p>
    <Inventory v-bind:name="inventory"/>
  </div>
</template>

<script>
import Inventory from './Inventory'
import {mapState} from 'vuex'
export default {
  name: 'Player',
  components: {
    Inventory
  },
  computed: {
    ...mapState({
      player: state => state.player
    }),
    inventory () {
      return this.player.inventory
    }
  }
}
</script>
