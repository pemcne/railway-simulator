import Junction from '@/store/models/junction'

export default {
  namespaced: true,
  state: {
    junction1: {
      connections: [
        'connection1'
      ],
      trains: [],
      canStop: true,
      atCity: true
    },
    junction2: {
      connections: [
        'connection1'
      ],
      trains: [],
      canStop: true,
      atCity: true
    },
    connection1: {
      distance: 450,
      junctions: [
        'junction1',
        'junction2'
      ],
      rails: 1,
      trains: []
    }
  },
  getters: {
    getById: (state) => id => state[id],
    getNextConnection: (state) => (sourceJunction, destinationJunction) => {
      // Since all routes are hard coded junctions, this is a dirty way of
      // grabbing the next connection
      const srcConns = new Set(state[sourceJunction].connections)
      const destConns = new Set(state[destinationJunction].connections)
      // Find the intersection between the two sets
      const inter = new Set([...srcConns].filter(i => destConns.has(i)))
      return Array.from(inter)[0]
    }
  },
  actions: {
    reserveConnection ({state, commit}, {trainId, connection}) {
      if (state[connection].trains.length < state[connection].rails) {
        commit('ADD_TRAIN', {
          trainId,
          connection
        })
        return true
      } else {
        return false
      }
    }
  },
  mutations: {
    ADD_TRAIN (state, {trainId, connection}) {
      state[connection].trains.push(trainId)
    }
  }
}
