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
    },
    'player': {
      items: ['wood'],
      quantities: {
        'wood': 1
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
  },
  player: {
    inventory: 'player'
  }
}

// Export store by default
export default new Vuex.Store({
  state,
  actions: {
    transferItem ({commit}, {toinv, frominv, item, quantity}) {
      commit('REMOVE_ITEM', {
        inv: frominv,
        item,
        quantity
      })
      commit('ADD_ITEM', {
        inv: toinv,
        item,
        quantity
      })
    }
  },
  mutations: {
    ADD_ITEM (state, {inv, item, quantity}) {
      const inventory = state.inventories[inv]
      // Make copy of an object
      let quantities = Object.assign({}, inventory.quantities)
      if (inventory.items.includes(item)) {
        quantities[item] += quantity
      } else {
        inventory.items.push(item)
        quantities[item] = quantity
      }
      // Set the copy back to the state
      inventory.quantities = quantities
    },
    REMOVE_ITEM (state, {inv, item, quantity}) {
      console.log(inv, item, quantity)
      const inventory = state.inventories[inv]
      if (inventory.quantities[item] - quantity >= 0) {
        inventory.quantities[item] -= quantity
      } else {
        throw new Error(`${inv} has less than ${quantity} of ${item}`)
      }
    }
  }
})
