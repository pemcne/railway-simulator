import store from '@/store'
import EventBus from '@/modules/EventBus'

console.log('store', store.getters)

export default {
  requestConnection (trainId, junctionId, connectionId) {
    // see if we can get it right now
    // otherwise dump on the queue and return an event id
  }
}
