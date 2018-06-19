// Set up the event bus
import EventBus from '@/modules/EventBus.js'

export default {
  store: null,
  eventBus: EventBus,
  buyItem (item, amount, cost) {
    this.store.dispatch('buy', {
      item,
      amount,
      cost
    })
  },
  tick () {
    const timestamp = Math.floor(new Date() / 1000)
    EventBus.emit('tick', {current: timestamp, previous: this.store.getters.timestamp})
    this.store.dispatch('setTime', {timestamp})
  },
  start () {
    this.interval = setInterval(() => this.tick(), 1000)

    // Set up the other listeners
    EventBus.on('tick', () => this.income())
  },
  stop () {
    clearInterval(this.interval)
    EventBus.reset()
  },
  income () {
    let income = 0
    for (const key in this.store.getters.inventory) {
      const resource = this.store.getters.resource(key)
      const amount = this.store.getters.inventory[key]
      income += amount * resource.income
    }
    this.store.dispatch('income', {
      amount: income
    })
  }
}
