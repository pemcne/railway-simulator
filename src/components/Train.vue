<template>
</template>

<script>
import EventBus from '@/modules/EventBus'
export default {
  name: 'Train',
  props: ['trainId'],
  computed: {},
  methods: {
    move (scale) {
      // move the train
    }
  },
  mounted () {
    EventBus.$on('tick', (scale) => this.move(scale))
  }
}
