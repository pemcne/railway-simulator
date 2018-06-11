<template>
  <div id="resources">
    <table>
      <tr>
        <th>Resource</th>
        <th>Amount</th>
      </tr>
      <tr>
        <td>Money</td>
        <td>{{money}}</td>
      </tr>
      <tr>
        <td>Workers</td>
        <td>{{workers}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import EventBus from '../EventBus.js'

// Displays the inventory or resources
export default {
  name: 'Resources',
  data () {
    // Initial data
    return {
      workerIncome: 2
    }
  },
  // Map the getters from the store
  computed: mapGetters({
    money: 'money',
    workers: 'workers'
  }),
  mounted () {
    EventBus.$on('tick', (timestamp) => {
      // Calculate worker income
      let income = 0
      income += this.workers * this.workerIncome

      // Placeholder to account for drift when persistent storage is online
      let rate = timestamp - this.$store.getters.timestamp
      if (rate < 2) {
        // Only get half income while away
        income = income * (rate / 2)
      }

      // Call the store action for income and pass the amount
      this.$store.dispatch('income', {
        amount: income
      })
    })
  }
}
</script>

<style>
#resources {
  border: 1px black solid;
}
</style>
