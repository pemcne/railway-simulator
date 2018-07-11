// Set up the event bus
import EventBus from '@/modules/EventBus.js'
import {TIMESCALE, TICKRATE} from '@/modules/Constants'

export default {
  store: null,
  eventBus: EventBus,
  clock: {
    count: 0,
    hour: 0,
    day: 0,
    month: 0
  },
  tick () {
    EventBus.$emit('tick', TIMESCALE)
    this.clock.count += TIMESCALE
    if (this.clock.count >= 1) {
      EventBus.$emit('tick-hour')
      this.clock.hour++
      this.clock.count = 0
    }
    if (this.clock.hour >= 24) {
      EventBus.$emit('tick-day')
      this.clock.hour = 0
      this.clock.day++
    }
    console.table(this.clock)
  },
  start () {
    this.interval = setInterval(() => this.tick(), TICKRATE)
  },
  stop () {
    clearInterval(this.interval)
  }
}
