<template>
  <div id="app">
    <Market/>
    <Resources/>
  </div>
</template>

<script>
import Market from './components/Market'
import Resources from './components/Resources'

// Parent root element for the entire application
// Does nothing but display the children
export default {
  name: 'App',
  components: {
    Market,
    Resources
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
