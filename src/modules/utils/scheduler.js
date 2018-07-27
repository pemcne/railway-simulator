let queue = {}

const wait = (id, callback, context, ...args) => {
  console.log('storing', id)
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
    delete queue[id]
    func.callback.call(func.context, ...func.args)
  }
}

export {
  wait,
  ready
}
