let queue = {}

const wait = (id, callback, context, ...args) => {
  queue[id] = {
    callback,
    context,
    args
  }
}

const ready = (id) => {
  if (!(id in queue)) {
    throw new Error(`${id} not in queue`)
  } else {
    const func = queue[id]
    release(id)
    func.callback.call(func.context, ...func.args)
  }
}

const release = (id) => {
  delete queue[id]
}

export {
  wait,
  ready,
  release
}
