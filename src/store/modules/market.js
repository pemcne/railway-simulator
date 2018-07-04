export default {
  namespaced: true,
  state: {
    'market1': {
      inventory: 'abc'
    },
    'market2': {
      inventory: 'def'
    }
  },
  getters: {
    getMarket: state => id => state[id]
  },
  actions: {
    // For cross module commits, put {root: true} on the commit call
    buyItem ({commit}, {toinv, frominv, item, quantity}) {
      commit('inventory/REMOVE_ITEM', {
        inv: frominv,
        item,
        quantity
      }, {
        root: true
      })
      commit('inventory/ADD_ITEM', {
        inv: toinv,
        item,
        quantity
      }, {
        root: true
      })
    }
  }
}
