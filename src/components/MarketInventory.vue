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
          <button>Buy</button>
          <button>Sell</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Inventory from './Inventory'
export default {
  name: 'MarketInventory',
  extends: Inventory
}
</script>
