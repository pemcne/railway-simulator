<template>
  <div>
    <table>
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Actions</th>
      </tr>
      <tr v-for="item in items" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.quantity}}</td>
        <td>
          <button
            @click="buy"
            :item="item.id"
            :disabled="getQuantity(item.id) <= 0">
            Buy
          </button>
          <button @click="sell" :item="item.id">Sell</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
import Inventory from './Inventory'

// Set up helpers
const { mapActions } = createNamespacedHelpers('market')

export default {
  name: 'MarketInventory',
  extends: Inventory,
  methods: {
    ...mapActions([
      'buyItem'
    ]),
    getItemFromEvent (event) {
      return event.target.attributes.getNamedItem('item').value
    },
    buy (event) {
      const item = this.getItemFromEvent(event)
      this.buyItem({
        toinv: 'player',
        frominv: this.name,
        item,
        quantity: 1
      })
    },
    sell (event) {
      const item = this.getItemFromEvent(event)
      this.buyItem({
        toinv: this.name,
        frominv: 'player',
        item,
        quantity: 1
      })
    }
  }
}
</script>
