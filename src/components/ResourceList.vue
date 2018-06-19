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

// Displays the inventory or resources
export default {
  name: 'ResourceList',
  components: {
    ResourceItem
  },
  // Map the getters from the store
  computed: {
    ...mapGetters({
      money: 'money',
      inventory: 'inventory'
    })
  }
}
</script>

<style>
#resources {
  border: 1px black solid;
}
</style>
