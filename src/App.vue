<template>
  <div id="app">
    <Market/>
  </div>
</template>

<script>
import Market from './components/Market'

export default {
  name: 'App',
  components: {
    Market
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
