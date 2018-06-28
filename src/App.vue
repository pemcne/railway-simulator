<template>
  <div id="app">
    <Market v-for="for market in markets" :key="market"/>
  </div>
</template>

<script>
import Market from './components/Market'

// Parent root element for the entire application
// Does nothing but display the children
export default {
  name: 'App',
  components: {
    Market
  },
  computed: {
    markets ()  {
      return Object.keys(this.$store.state.markets)
    }
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
