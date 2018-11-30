export const state = () => ({
  productos: [],
  titulo: null,
  producto: null
})

export const mutations = {
  setProductos(state, { productos, f }) {
    console.log('setProductos desde ' + f)
    Object.assign(state.productos, productos)
  },
  setTitulo(state, data) {
    state.titulo = data
  }
}
export const getters = {
  getProductos(state) {
    return state.productos
  },
  getTitulo(state) {
    return state.titulo
  },
  getProducto: state => query => {
    return state.productos.filter(item => {
      return (
        item.codigo.includes(query) || item.nombre.toLowerCase().includes(query)
      )
    })
  }
}
export const actions = {
  async getProductos({ commit }) {
    let data = await this.$axios.$get('producto')
    commit('setProductos', { productos: data, f: 'getProductos' })
  }
}
