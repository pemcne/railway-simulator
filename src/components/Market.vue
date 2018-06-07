<template>
  <div id="resources">
    <ul>
      <li>Timber - $2</li>
      <li>Steel - $5</li>
    </ul>
    <p>Workers: {{workers}} - Money: {{money}}</p>
    <button v-on:click="addworker()">Buy worker</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Resources',
  computed: mapGetters({
    money: 'money',
    workers: 'workers'
  }),
  methods: {
    ...mapActions([
      'addworker'
    ])
  }
}
</script>

<style>
#market {
  border: 1px black solid;
}
</style>
