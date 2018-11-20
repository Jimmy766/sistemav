export const state = () => {
  venta: []
}
export const mutations = {
  add(state, cajero) {
    cajero.push(cajero)
  }
}
export const getters = {
  getVentas(state) {
    return state.venta
  }
}
