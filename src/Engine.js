// Set up the event bus
import EventBus from '@/modules/EventBus.js'
import TrafficController from '@/modules/TrafficController'
import {TIMESCALE, TICKRATE} from '@/modules/Constants'
import {wait, ready} from '@/modules/utils/scheduler'

export default {
  store: null,
  eventBus: EventBus,
  clock: {
    count: 0,
    hour: 0,
    day: 0,
    month: 0,
    increment () {
      this.count++
      if (this.count * TIMESCALE >= 1) {
        this.hour++
        this.count = 0
        EventBus.$emit('tick-hour')
      }
      if (this.hour >= 24) {
        this.hour = 0
        this.day++
        EventBus.$emit('tick-day')
      }
    }
  },
  init () {
    // TrafficController.requestConnection(null, 'train1', 'junction1', 'connection1')
    // TrafficController.requestConnection(null, 'train1', 'junction1', 'connection1')
  },
  tick () {
    EventBus.$emit('tick', TIMESCALE)
    this.clock.increment()
  },
  start () {
    this.interval = setInterval(() => this.tick(), TICKRATE)
  },
  stop () {
    clearInterval(this.interval)
  }
}
