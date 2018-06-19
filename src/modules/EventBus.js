// Originally borrowed from https://gist.github.com/zangue/7384f593df908d4a7ee2

class EventBus {
  constructor () {
    this.listeners = {}
  }

  _getListenerIdx (eventName, callback, scope) {
    let eventListeners = this.listeners[eventName]
    let i
    let idx = -1

    if (!eventListeners || eventListeners.length === 0) {
      return idx
    }
    for (i = 0; i < eventListeners.length; i++) {
      if (eventListeners[i].callback === callback &&
        (!scope || scope === eventListeners[i].scope)) {
        idx = i
        break
      }
    }
    return idx
  }

  on (eventName, callback, scope) {
    let listener,
      idx

    if (!eventName) {
      throw new Error('Event name cannot be null or undefined')
    }

    if (!callback || typeof (callback) !== 'function') {
      throw new Error('Listener must be of type function.')
    }

    idx = this._getListenerIdx(eventName, callback, scope)

    if (idx >= 0) return

    listener = {
      callback: callback,
      scope: scope
    }

    this.listeners[eventName] = this.listeners[eventName] || []
    this.listeners[eventName].push(listener)
  }

  unsubscribe (eventName, callback, scope) {
    let idx
    if (!eventName || !callback || !this.listeners[eventName]) {
      return
    }
    idx = this._getListenerIdx(eventName, callback, scope)
    if (idx === -1) return
    this.listeners[eventName].splice(idx, 1)
  }

  emit (eventName, args) {
    let eventListeners = this.listeners[eventName]

    if (!eventName || !this.listeners[eventName]) {
      return
    }

    args = args || {}

    eventListeners.forEach((listener) => {
      listener.callback.call(listener.scope, args)
    })
  }

  reset () {
    this.listeners = {}
  }
}

// Singleton
let eventBus = new EventBus()
export default eventBus
