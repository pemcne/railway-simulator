import Vue from 'vue'
import Vuex from 'vuex'
// import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const state = {
  items: {
    'wood': {
      craftable: true,
      weight: 1,
      description: 'Wood'
    },
    'metal': {
      craftable: true,
      weight: 5,
      description: 'Metal'
    }
  },
  inventories: {
    'abc': {
      items: ['wood'],
      quantities: {
        'wood': 2
      }
    },
    'def': {
      items: ['metal', 'wood'],
      quantities: {
        'wood': 0,
        'metal': 2
      }
    }
  },
  markets: {
    'market1': {
      inventory: 'abc'
    },
    'market2': {
      inventory: 'def'
    }
  }
}

// Export store by default
export default new Vuex.Store({
  state,
  mutations: {
    CHANGE (state) {
      state.inventories['abc'].quantities['wood'] += 1
    }
  }
})
