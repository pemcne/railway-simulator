<template>
  <div id="app">
    <Market/>
    <ResourceList/>
  </div>
</template>

<script>
import Market from './components/Market'
import ResourceList from './components/ResourceList'

// Parent root element for the entire application
// Does nothing but display the children
export default {
  name: 'App',
  components: {
    Market,
    ResourceList
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
