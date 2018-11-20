export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('datos/getClientes')
  }
}
