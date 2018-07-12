export default {
  namespaced: true,
  state: {
    trains: ['train1'],
    'train1': {
      cars: [
        'train1-car1'
      ],
      acceleration: 3,
      deceleration: -7,
      maxSpeed: 30,
      currentSpeed: 0,
      fuel: 100,
      position: {
        distanceTo: 200,
        destination: 'city1',
        source: 'city2'
      },
      atStation: false
    },
    'train1-car1': {
      inventory: 'asdf'
    }
  },
  getters: {
    getTrain: (state, getters, _, rootGetters) => trainId => state[trainId],
    getTrainCars: (state, getters, rootState, rootGetters) => trainId => {
      state[trainId].cars.map(i => {
        const invId = state[i].inventory
        const inv = rootGetters['inventory/getInventory'](invId)
        return inv
      })
    }
  },
  actions: {
    update ({commit}, {trainId, position, fuel, atStation, currentSpeed}) {
      commit('UPDATE_POSITION', {
        trainId,
        position
      })
      commit('UPDATE_FUEL', {
        trainId,
        fuel
      })
      commit('UPDATE_STATION', {
        trainId,
        atStation
      })
      commit('UPDATE_SPEED', {
        trainId,
        currentSpeed
      })
    }
  },
  mutations: {
    UPDATE_POSITION (state, {trainId, position}) {
      state[trainId].position = position
    },
    UPDATE_FUEL (state, {trainId, fuel}) {
      state[trainId].fuel = fuel
    },
    UPDATE_STATION (state, {trainId, atStation}) {
      state[trainId].atStation = atStation
    },
    UPDATE_SPEED (state, {trainId, currentSpeed}) {
      state[trainId].currentSpeed = currentSpeed
    }
  }
}
