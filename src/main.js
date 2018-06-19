// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
// import EventBus from './EventBus.js'
import Engine from '@/Engine.js'

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
    Engine.store = this.$store
    Engine.start()
  },
  beforeDestroy () {
    Engine.stop()
  },
  methods: {
  }
})
