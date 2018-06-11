<template>
  <div id="market">
    <button v-on:click="buyWorker()">Buy worker - ${{workerCost}}</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {buyItem} from '@/Engine.js'

export default {
  name: 'Market',
  data () {
    // Initial state for the component
    return {
      workerBaseCost: 10,
      workerBaseRate: 0.2
    }
  },
  computed: {
    ...mapGetters({
      money: 'money',
      workers: 'workers'
    }),
    // Dynamically calculate worker cost based on data and worker count
    workerCost () {
      const workerRate = Math.floor(this.workerBaseCost * this.workerBaseRate * this.workers)
      return this.workerBaseCost + workerRate
    }
  },
  methods: {
    buyWorker () {
      // Call the external engine method for buyItem
      buyItem(this.$store, 'worker', 1, this.workerCost)
    }
  }
}
</script>

<style>
#market {
  border: 1px black solid;
}
</style>
