import store from '@/store'
import EventBus from '@/modules/EventBus'
import {wait} from '@/modules/utils/scheduler'

console.log('store', store.getters)

export default {
  requestConnection (scheduleId, trainId, conectionId) {
    // see if we can get it right now
    // otherwise dump on the queue and return an event id
    const resp = store.dispatch('rails/reserveConnection', {
      trainId,
      connection: connectionId
    })
    resp.then((requestSuccess) => {
      if (requestSuccess) {
        return connectionId
      } else {

      }
    })
  }
}
