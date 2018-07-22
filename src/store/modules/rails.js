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
    }
    connection1: {
      distance: 450,
      junctions: [
        'junction1',
        'junction2'
      ],
      rails: 1
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
  }
}
