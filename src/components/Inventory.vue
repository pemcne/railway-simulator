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
export default {
  name: 'Inventory',
  props: ['name'],
  computed: {
    inventory () {
      return this.$store.state.inventories[this.name]
    },
    items () {
      return this.inventory.items.map(itemId => {
        return {
          id: itemId,
          quantity: this.inventory.quantities[itemId]
        }
      })
    }
  }
}
</script>

<style>
p.invheader {
  font-size: 1.5em;
}
