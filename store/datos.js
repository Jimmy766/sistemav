export const strict = true
export const state = () => ({
  clientes: [],
  api: 'http://127.0.0.1/sistemav/public/api/',
  titulo: null
})

export const mutations = {
  setClientes(state, { clientes, f }) {
    console.log('setClientes desde ' + f)
    Object.assign(state.clientes, clientes)
  },
  setTitulo(state, data) {
    state.titulo = data
  }
}
export const getters = {
  getClientes(state) {
    return state.clientes
  },
  getTitulo(state) {
    return state.titulo
  }
}
export const actions = {
  nuxtClienteInit({ dispatch }) {
    console.log('client init')
    dispatch('getClientes', 'nuxtServetInit')
  },

  async getClientes({ commit }) {
    let data = await this.$axios.$get('producto')
    commit('setClientes', { clientes: data, f: 'getClientes' })
  }
}
