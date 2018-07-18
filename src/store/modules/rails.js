export default {
  namespaced: true,
  state: {
    rails: ['rail1'],
    rail1: {
      distance: 350,
      source: 'city1',
      destination: 'city2'
    },
    rail2: {
      distance: 350,
      source: 'city2',
      destination: 'city1'
    }
  },
  getters: {
    getRail: (state) => railId => {
      return state[cityId]
    }
  }
}
