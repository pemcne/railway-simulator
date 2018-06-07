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
  workers: 0
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
    let income = state.workers * 2
    console.log('income', income)
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
