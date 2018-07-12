<template>
  <div>
    <p>I am a train</p>
  </div>
</template>

<script>
import EventBus from '@/modules/EventBus'
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
      'update'
    ]),
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
        console.log('accelerating')
        rate = this.train.acceleration
      } else {
        console.log('decelerating')
        rate = this.train.deceleration
      }
      // Get the new speed through de/acceleration
      console.log('rate', rate)
      const speed = this.accelerate(rate, this.train.currentSpeed, scale)
      // distance = speed * time
      const travelDistance = speed * scale
      // Copy the position object so we can modify it and pass it back
      let position = Object.assign({}, this.train.position)
      let station = this.train.atStation
      // Calculate the new distance to the station
      position.distanceTo -= travelDistance
      if (position.distanceTo <= 0) {
        console.log('Arrived!')
        station = true
      }
      console.log(speed, position.distanceTo)
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
    console.log(this.train)
  }
}
</script>
