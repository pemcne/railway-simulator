<template>
  <div>
    <p class="invheader">Inventory - {{name}}</p>
    <table>
      <tr>
        <th>Item</th>
        <th>Quantity</th>
      </tr>
      <tr v-for="item in items" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.quantity}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const { mapGetters } = createNamespacedHelpers('inventory')

export default {
  name: 'Inventory',
  props: ['name'],
  computed: {
    ...mapGetters([
      'getInventory'
    ]),
    inventory () {
      return this.getInventory(this.name)
    },
    items () {
      return this.inventory.items.map(itemId => {
        return {
          id: itemId,
          quantity: this.getQuantity(itemId)
        }
      })
    }
  },
  methods: {
    getQuantity (item) {
      return this.inventory.quantities[item]
    }
  }
}
</script>

<style>
p.invheader {
  font-size: 1.5em;
}
