export const state = () => ({
  venta: [],
  total: 0,
  efectivo: 0,
  cambio: 0
})
export const actions = {
  limpiar({ commit }) {
    commit('limpiar')
  },
  add({ commit }, venta) {
    commit('add', venta)
  },
  quitar({ commit }, venta) {
    commit('quitar', venta)
  },
  setEfectivo({ commit }, data) {
    commit('setEfectivo', data)
  },
  setCambio({ commit }, data) {
    commit('setCambio', data)
  }
}
export const mutations = {
  add(state, venta) {
    const result = state.venta.findIndex(item => item.codigo == venta.codigo)
    console.log(result)
    if (result > -1) {
      state.venta[result].cantidad++
      state.venta[result].total = state.venta[result].cantidad * venta.precio
      const aux = state.venta[result]
      state.venta.splice(result, 1, aux)
    } else {
      venta.cantidad = 1
      venta.total = venta.precio
      state.venta.push(venta)
    }
    let c = 0
    Object.keys(state.venta).forEach(function(i) {
      c += Number(state.venta[i].total)
    })
    state.total = Number(c).toFixed(2)
  },
  limpiar(state) {
    state.venta = []
    state.total = 0
    state.efectivo = state.cambio = 0
  },
  quitar(state, venta) {
    state.venta = state.venta.filter(item => item.codigo != venta.codigo)
    state.total -= venta.total
  },
  setEfectivo(state, data) {
    Number(state.efectivo).toFixed(2)
    state.efectivo = data
  },
  setCambio(state, data) {
    Number(state.cambio).toFixed(2)
    state.cambio = data
  }
}
export const getters = {
  getVentas(state) {
    return state.venta
  },
  getTotal(state) {
    return state.total
  },
  getEfectivo(state) {
    return state.efectivo
  },
  getCambio(state) {
    return state.cambio
  }
}
