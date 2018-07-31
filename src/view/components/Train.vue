<template>
  <div>
    <p v-if="train.atStation">Arrived at {{ train.position.source }}</p>
    <p v-else>Heading to: {{ train.position.destination }}</p>
    <p>{{ train.position.distanceTo }} left with current speed of {{ train.currentSpeed }}</p>
    <button @click="departStation" :disabled="train.atStation ? false : true">Depart</button>
  </div>
</template>

<script>
import EventBus from '@/modules/EventBus'
import {wait} from '@/modules/utils/scheduler'
import TrafficController from '@/modules/TrafficController'
import {createNamespacedHelpers} from 'vuex'

const { mapGetters, mapActions } = createNamespacedHelpers('trains')

export default {
  name: 'Train',
  props: ['trainId'],
  computed: {
    ...mapGetters([
      'getTrain'
    ]),
    train () {
      return this.getTrain(this.trainId)
    }
  },
  methods: {
    ...mapActions([
      'update',
      'depart'
    ]),
    departStation (event) {
      this.depart({
        trainId: this.trainId
      })
    },
    generateScheduleId (junction, connection) {
      const rand = Math.random().toString(36).substr(2, 9)
      return `${this.trainId}-${junction}-${connection}-${rand}`
    },
    acceptConnection (junction, connection) {
      // Modify route?
    },
    requestNextConnection (currentJunction, nextJunction) {
      connection = this.$store.getters['rails/getNextConnection']()
      const scheduleId = this.generateScheduleId(junction, connection)
      // Listen on the event for the callback
      wait(scheduleId, this.acceptConnection, this, junction, connection)
      // Submit request to the controller for the connection
      TrafficController(scheduleId, this.trainId,)
    },
    accelerate (rate, initial, time) {
      let speed
      speed = (rate * time) + initial
      if (speed > this.train.maxSpeed) {
        speed = this.train.maxSpeed
      } else if (speed < 0) {
        // Shouldn't hit this but just in case
        speed = 0
      }
      return speed
    },
    doAccelerate (rate, distance, speed) {
      // distance = (final^2 - initial^2) / 2 (acceleration)
      const decelDistance = (0 - Math.pow(speed, 2)) / (2 * rate)
      return decelDistance <= distance
    },
    move (scale) {
      if (this.train.atStation) {
        // Don't need to move if at a station
        return
      }
      // First see if we need to accelerate
      let rate
      if (this.doAccelerate(this.train.deceleration, this.train.position.distanceTo, this.train.currentSpeed)) {
        rate = this.train.acceleration
      } else {
        rate = this.train.deceleration
      }
      // Get the new speed through de/acceleration
      let speed = this.accelerate(rate, this.train.currentSpeed, scale)
      // Round it to the nearest two decimals
      speed = +(speed).toFixed(2)
      // distance = speed * time
      const travelDistance = speed * scale
      // Copy the position object so we can modify it and pass it back
      let position = Object.assign({}, this.train.position)
      let station = this.train.atStation
      // Calculate the new distance to the station
      position.distanceTo = (position.distanceTo - travelDistance).toFixed(2)
      if (position.distanceTo <= 0) {
        // Made it to the station so we can set everything to zero
        speed = 0
        console.log('Arrived!')
        station = true
        position = {
          distanceTo: 300,
          destination: 'city2',
          source: 'city1'
        }
      }
      // Finally update all the stats
      this.update({
        trainId: this.trainId,
        position: position,
        fuel: this.train.fuel,
        atStation: station,
        currentSpeed: speed
      })
    }
  },
  mounted () {
    EventBus.$on('tick', (scale) => this.move(scale))
  }
}
</script>
