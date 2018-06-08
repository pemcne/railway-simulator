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

export default {
  name: 'Resources',
  computed: mapGetters({
    money: 'money',
    workers: 'workers'
  })
}
</script>

<style>
#resources {
  border: 1px black solid;
}
</style>
