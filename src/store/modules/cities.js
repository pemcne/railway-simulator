export default {
  namespaced: true,
  state: {
    cities: ['city1', 'city2'],
    city1: {
      markets: ['market1'],
      warehouse: null,
      junctions: ['junction1']
    },
    city2: {
      markets: ['market2'],
      warehouse: null,
      junctions: ['junction2']
    }
  },
  getters: {
    getById: (state) => id => state[id]
  },
  actions: {

  }
}
