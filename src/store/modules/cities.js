export default {
  namespaced: true,
  state: {
    cities: ['city1', 'city2'],
    city1: {
      markets: ['market1'],
      warehouse: null,
      rails: ['rail1']
    },
    city2: {
      markets: ['market2'],
      warehouse: null,
      rails: ['rail2']
    }
  },
  getters: {
    getCity: (state) => cityId => {
      return state[cityId]
    }
  },
  actions: {

  }
}
