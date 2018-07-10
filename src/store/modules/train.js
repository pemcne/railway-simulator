export default {
  namespaced: true,
  state: {
    trains: ['train1'],
    'train1': {
      cars: [
        'train1-car1'
      ],
      speed: 80,
      fuel: 100
    },
    'train1-car1': {
      inventory: 'asdf'
    }
  },
  getters: {
    getTrain: (state, getters) => trainId => state[trainId],
    getTrainCars: (state, getters, rootState, rootGetters) => trainId => {
      state[trainId].cars.map(i => {
        const invId = state[i].inventory
        const inv = rootGetters['inventory/getInventory'](invId)
        console.log('inv', inv)
        return inv
      })
    }
  }
}
