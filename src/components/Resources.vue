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

export default {
  name: 'Resources',
  data () {
    return {
      workerIncome: 2
    }
  },
  computed: mapGetters({
    money: 'money',
    workers: 'workers'
  }),
  mounted () {
    const self = this
    EventBus.$on('tick', (timestamp) => {
      let income = 0
      income += self.workers * self.workerIncome
      let rate = timestamp - self.$store.getters.timestamp
      if (rate < 2) {
        // Only get half income while away
        income = income * (rate / 2)
      }
      self.$store.dispatch('income', {
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
