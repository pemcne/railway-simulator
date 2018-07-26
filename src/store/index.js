import Vue from 'vue'
import Vuex from 'vuex'
import inventory from './modules/inventory'
import market from './modules/market'
import trains from './modules/trains'
import rails from './modules/rails'
// import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const state = {
  player: {
    inventory: 'player'
  }
}

// Export store by default
export default new Vuex.Store({
  state,
  modules: {
    inventory,
    market,
    trains,
    rails
  }
})
