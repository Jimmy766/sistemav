<template>
  <v-container>
    <v-layout>
      <v-flex md12>
        <v-text-field
          v-model="busqueda"
          clearable
          append-icon="search"
          label="Buscar por.."
          @keyup.enter="cargaDatos"
        />
        <v-data-table
          :headers="headers"
          :items="items"
          class="elevation-3"
          :loading="loading"
          :pagination.sync="paginacion"
        >
          <template slot="items" slot-scope="props">
            <td v-for="val in valores" :key="val" class="text-xs-left">
              <v-edit-dialog :return-value="props.item[val]" lazy>
                {{ props.item[val] }}
                <template slot="input">
                  <v-text-field
                    v-model="aux"
                    :label="props.item[val]"
                    counter
                    @keyup.enter="actualiza(props.item, val, aux)"
                  ></v-text-field>
                </template>
              </v-edit-dialog>
            </td>
          </template>
          <v-alert v-slot:no-results :value="true" color="error" icon="warning">
            No encontrado
          </v-alert>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Crud',
  props: {
    headers: { type: Array, required: true },
    items: { type: Array, required: true },
    valores: { type: Array, required: true },
    salvar: { type: Function, required: true },
    filtro: { type: Function, required: true }
  },
  data() {
    return {
      paginacion: {
        rowsPerPage: 10
      },
      busqueda: '',
      aux: '',
      datos: [],
      totalDatos: 100,
      loading: false
    }
  },
  watch: {
    busqueda: {
      handler() {
        this.cargaDatos()
      }
    }
  },
  mounted() {
    this.cargaDatos()
  },
  methods: {
    actualiza(item, val, data) {
      this.salvar(item, val, data)
      this.aux = ''
    },
    cargaDatos() {
      this.loading = true
      const { page, rowsPerPage } = this.paginacion
      this.paginacion.totalItems = 100
      if (this.busqueda) {
        this.filtro(this.busqueda)
      } else {
      }
      this.loading = false
    }
  }
}
</script>

<style scoped></style>
