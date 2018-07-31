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
        destination: 'junction2',
        source: 'junction1',
        connection: 'connection1'
      },
      atStation: true,
      route: [
        'junction1',
        'junction2'
      ],
      routeIndex: 0,
      routeNextIndex: 1
    },
    'train1-car1': {
      inventory: 'asdf'
    }
  },
  getters: {
    getTrain: (state, getters, _, rootGetters) => trainId => {
      // Get a copy of the train object from the state
      let train = Object.assign({}, state[trainId])
      // For all of the cars, get the inventory object
      train.cars = train.cars.map(i => {
        const carInventory = state[i].inventory
        const inventory = rootGetters['inventory/getInventory'](carInventory)
        return {
          name: i,
          inventory
        }
      })
      return train
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
    },
    depart ({commit}, {trainId}) {
      commit('UPDATE_STATION', {
        trainId,
        atStation: false
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
