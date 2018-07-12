<template>
  <div id="app">
    <Market v-for="market in markets" :key="market" v-bind:name="market"/>
    <Player />
    Train here:
    <Train trainId="train1"/>
  </div>
</template>

<script>
import Market from './components/Market'
import Player from './components/Player'
import Train from './components/Train'
import {createNamespacedHelpers} from 'vuex'

// Set up the helpers
// TODO: move this to a MarketList
const { mapState } = createNamespacedHelpers('market')

// Parent root element for the entire application
// Does nothing but display the children
export default {
  name: 'App',
  components: {
    Market,
    Player,
    Train
  },
  computed: {
    ...mapState({
      markets: state => Object.keys(state)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
