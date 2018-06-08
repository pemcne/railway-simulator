import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

// Set up persistent storage
const vuexlocalstorage = new VuexPersist({
  key: 'railway-simulator',
  storage: window.localStorage
})

const state = {
  money: 100,
  workers: 0,
  timestamp: new Date() / 1000
}

const getters = {
  money: state => state.money,
  workers: state => state.workers
}

const actions = {
  buy ({commit}, amount) {
    commit('ADD_AMOUNT', {
      amount: amount
    })
  },
  addworker ({commit}) {
    commit('ADD_WORKER')
  },
  tick ({commit}) {
    const currentDate = new Date() / 1000
    let rate = currentDate - state.timestamp
    if (rate < 2) {
      rate = 1
    }
    state.timestamp = currentDate
    let income = state.workers * 2 * rate
    commit('ADD_AMOUNT', {
      amount: income
    })
  }
}

const mutations = {
  ADD_AMOUNT (state, {amount}) {
    state.money = state.money + amount
  },
  SUBTRACT_AMOUNT (state, {amount}) {
    state.money = state.money - amount
  },
  ADD_WORKER (state) {
    state.money -= 10
    state.workers += 1
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: [vuexlocalstorage.plugin]
})
