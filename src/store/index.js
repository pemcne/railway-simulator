import Vue from 'vue'
import Vuex from 'vuex'
import inventories from './modules/inventories'
// import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const state = {
  inventories: {

  },
  markets: {
    'market1': {
      inventory: 'abc'
    },
    'market2': {
      inventory: 'def'
    }
  },
  player: {
    inventory: 'player'
  }
}

// Export store by default
export default new Vuex.Store({
  state,
  modules: {
    inventories
  },
  actions: {
    buyItem ({commit}, {toinv, frominv, item, quantity}) {
      commit('inventories/REMOVE_ITEM', {
        inv: frominv,
        item,
        quantity
      })
      commit('inventories/ADD_ITEM', {
        inv: toinv,
        item,
        quantity
      })
    }
  }
})
