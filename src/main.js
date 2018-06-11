// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import EventBus from './EventBus.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store: store,
  data: {
    counter: 0
  },
  mounted () {
    // Call tick first for inital state
    this.tick()
    // Now start the clock
    this.$options.interval = setInterval(this.tick, 1000)
  },
  beforeDestroy () {
    clearInterval(this.$options.interval)
  },
  methods: {
    // This fires an event on the EventBus every second
    // Primary driver for the game, should probably move to Engine.js
    tick () {
      const timestamp = new Date() / 1000
      EventBus.$emit('tick', timestamp)
    }
  }
})
