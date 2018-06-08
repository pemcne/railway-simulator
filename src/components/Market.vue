<template>
  <div id="market">
    <button v-on:click="buyWorker()">Buy worker - ${{workerCost}}</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Market',
  data () {
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
    workerCost () {
      const workerRate = Math.floor(this.workerBaseCost * this.workerBaseRate * this.workers)
      return this.workerBaseCost + workerRate
    }
  },
  methods: {
    buyWorker () {
      this.$store.dispatch('buy', {
        item: 'worker',
        amount: 1,
        cost: this.workerCost
      })
    }
  }
}
</script>

<style>
#market {
  border: 1px black solid;
}
</style>
