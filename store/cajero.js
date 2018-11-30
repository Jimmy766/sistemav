export const state = () => ({
  venta: []
})
export const mutations = {
  add(state, venta) {
    let result = state.venta.findIndex(item => item.codigo == venta.codigo)
    console.log(result)
    if (result > -1) {
      state.venta[result].cantidad++
      state.venta[result].total = state.venta[result].cantidad * venta['precio']
      let aux = state.venta[result]
      state.venta.splice(result, 1, aux)
    } else {
      venta['cantidad'] = 1
      venta['total'] = venta['precio']
      state.venta.push(venta)
    }
  }
}
export const getters = {
  getVentas(state) {
    return state.venta
  }
}
