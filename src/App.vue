<template>
  <div id="app">
    <Market v-for="(inventory, name) in inventories" v-bind:inventory="inventory" v-bind:name="name" :key="name"/>
  </div>
</template>

<script>
import Inventory from './components/Inventory'

// Parent root element for the entire application
// Does nothing but display the children
export default {
  name: 'App',
  components: {
    Inventory
  },
  computed: {
    markets ()  {
      return this.$store.state.markets
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
