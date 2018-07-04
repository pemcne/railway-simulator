export default {
  namespaced: true,
  state: {
    'abc': {
      items: ['wood'],
      quantities: {
        'wood': 2
      }
    },
    'def': {
      items: ['metal', 'wood'],
      quantities: {
        'wood': 0,
        'metal': 2
      }
    },
    'player': {
      items: ['wood'],
      quantities: {
        'wood': 1
      }
    }
  },
  getters: {
    getInventory: state => id => state[id]
  },
  mutations: {
    ADD_ITEM (state, {inv, item, quantity}) {
      const inventory = state[inv]
      // Make copy of an object
      let quantities = Object.assign({}, inventory.quantities)
      if (inventory.items.includes(item)) {
        quantities[item] += quantity
      } else {
        inventory.items.push(item)
        quantities[item] = quantity
      }
      // Set the copy back to the state
      inventory.quantities = quantities
    },
    REMOVE_ITEM (state, {inv, item, quantity}) {
      const inventory = state[inv]
      if (inventory.quantities[item] - quantity >= 0) {
        inventory.quantities[item] -= quantity
      } else {
        throw new Error(`${inv} has less than ${quantity} of ${item}`)
      }
    }
  }
}
