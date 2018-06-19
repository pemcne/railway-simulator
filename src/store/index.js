import Vue from 'vue'
import Vuex from 'vuex'
// import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

// Set up persistent storage
// Leave this commented out during development
// const vuexlocalstorage = new VuexPersist({
//   key: 'railway-simulator',
//   storage: window.localStorage
// })

// The initial state of the application
const state = {
  money: 100,
  inventory: {
    worker: 0
  },
  resources: [{
    shortCode: 'worker',
    name: 'Worker',
    description: 'Basic worker',
    income: 2,
    cost: 10,
    rate: 0.2
  }],
  timestamp: Math.floor(new Date() / 1000)
}

// Define getters here
// Use this.$store.getters.<foo> to access
const getters = {
  money: state => state.money,
  workers: state => state.inventory.worker,
  timestamp: state => state.timestamp,
  inventory: state => state.inventory,
  resource (state) {
    // This takes a shortCode parameter and returns the item in the resources
    // list that corresponds with the shortCode
    return shortCode => state.resources.filter(resource => {
      return resource.shortCode === shortCode
    })[0]
  }
}

// Define actions here
// Use this.$store.dispatch('foo', {}) to access
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
  },
  setTime ({commit}, {timestamp}) {
    commit('SETTIME', {timestamp})
  }
}

// Define the mutations here
// Ideally, this is what the actions will call to actually change the state
// Use this.$store.commit('FOO', {}) to access
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
  },
  SETTIME (state, {timestamp}) {
    state.timestamp = timestamp
  }
}

// Export store by default
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
  // plugins: [vuexlocalstorage.plugin]
})
