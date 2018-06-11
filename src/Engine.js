const buyItem = (store, item, count, cost) => {
  store.dispatch('buy', {
    item: item,
    amount: count,
    cost: cost
  })
}

export {buyItem}
