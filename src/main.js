// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './view/App'
import store from '@/store'
import Engine from '@/Engine.js'
import guid from '@/modules/utils/guid'

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
    Engine.init()
    Engine.start()
  },
  beforeDestroy () {
    Engine.stop()
  },
  methods: {
  }
})
