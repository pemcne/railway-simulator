import Vue from 'vue'
import Vuex from 'vuex'
// import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

// Set up persistent storage
// const vuexlocalstorage = new VuexPersist({
//   key: 'railway-simulator',
//   storage: window.localStorage
// })

const state = {
  money: 100,
  inventory: {
    worker: 0
  },
  timestamp: new Date() / 1000
}

const getters = {
  money: state => state.money,
  workers: state => state.inventory.worker,
  timestamp: state => state.timestamp
}

const actions = {
  buy ({commit}, {item, amount, cost}) {
    commit('BUY', {
      item: item,
      amount,
      cost
    })
  },
  income ({commit}, {amount}) {
    commit('INCOME', {amount})
  }
}

const mutations = {
  BUY (state, {item, amount, cost}) {
    if (item in state.inventory) {
      state.inventory[item] += amount
    } else {
      state.inventory[item] = amount
    }
    state.money -= cost
  },
  INCOME (state, {amount}) {
    state.money += amount
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
  // plugins: [vuexlocalstorage.plugin]
})
