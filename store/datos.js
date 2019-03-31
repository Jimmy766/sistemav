export const state = () => ({
  productos: [],
  pFiltrado: [],
  titulo: null,
  producto: null,
  nombre: null,
  direccion: null
})

export const mutations = {
  setProductos(state, data) {
    Object.assign(state.productos, data)
    state.pFiltrado = data.slice(0, 100)
  },
  setTitulo(state, data) {
    state.titulo = data
  },
  actualizarProducto(state, data) {
    const index = state.productos.findIndex(i => i.codigo == data.item.codigo)
    console.log(data.item)
    console.log(data.val)
    console.log(data.data)
    data.item[data.val] = data.data
    state.productos.splice(index, 1, data.item) // reemplazar
  },
  setFiltrado(state, data) {
    state.pFiltrado = data
    console.log('filtrado ' + state.pFiltrado.length)
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
  },
  getFiltrados(state) {
    return state.pFiltrado
  }
}
export const actions = {
  async getProductos({ commit }) {
    const data = await this.$axios.$get('producto')
    commit('setProductos', data)
  },
  actualizarProducto({ commit }, data) {
    commit('actualizarProducto', data)
  },
  async filtrarProductos({ commit }, data) {
    if (data && data.busqueda) {
      const busqueda = await this.$axios.$get('buscarProducto', {
        params: { busqueda: data.busqueda }
      })
      console.log(busqueda.length)
      commit('setFiltrado', busqueda)
    }
  },
  setTitulo({ commit }, data) {
    commit('setTitulo', data)
  }
}
