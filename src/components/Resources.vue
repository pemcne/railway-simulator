<template>
  <div id="resources">
    Total funds: ${{money}}
    <table>
      <tr>
        <th>Resource</th>
        <th>Amount</th>
      </tr>
      <ResourceItem
        v-for="(amount, code) in inventory"
        :key="code"
        v-bind:short-code="code"
        v-bind:amount="amount"
      />
    </table>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ResourceItem from './ResourceItem'
import EventBus from '../EventBus.js'

// Displays the inventory or resources
export default {
  name: 'Resources',
  components: {
    ResourceItem
  },
  // Map the getters from the store
  computed: {
    ...mapGetters({
      money: 'money',
      inventory: 'inventory'
    })
  },
  methods: {
    getResource (shortCode) {
      return this.$store.getters.resource(shortCode)
    }
  },
  mounted () {
    EventBus.$on('tick', (timestamp) => {
      // Total income
      let income = 0

      // Loop through every item in the inventory and compute income
      for (const key in this.inventory) {
        // Get the resource object with the information
        const resource = this.getResource(key)
        // Get the amount from the inventory
        const amount = this.inventory[key]
        // Run the income calculatations
        income += amount * resource.income
      }
      // Placeholder to account for drift when persistent storage is online
      // let rate = timestamp - this.$store.getters.timestamp
      // if (rate < 2) {
      //   // Only get half income while away
      //   income = income * (rate / 2)
      // }

      console.log('income', income)
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
