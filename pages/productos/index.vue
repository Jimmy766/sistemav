<template>
  <v-container>
    <v-layout>
      <v-flex md12>
        <crud
          :headers="headers"
          :items="filtrados"
          :salvar="salvar"
          :filtro="filtrarProductos"
          :valores="
            headers.map(function(i) {
              return i.value
            })
          "
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Crud from '../../components/crud'
export default {
  components: { Crud },
  computed: {
    ...mapGetters({
      productos: 'datos/getProductos',
      filtrados: 'datos/getFiltrados'
    })
  },
  methods: {
    ...mapActions({
      actualizarProducto: 'datos/actualizarProducto',
      filtrar: 'datos/productoFiltrado',
      setTitulo: 'datos/setTitulo'
    })
  },
  created() {
    this.setTitulo('Productos')
  },
  data() {
    return {
      headers: [
        {
          text: 'Nombre',
          align: 'left',
          sortable: false,
          value: 'nombre'
        },
        {
          text: 'Codigo',
          align: 'left',
          sortable: false,
          value: 'codigo'
        },
        {
          text: 'Stock',
          align: 'left',
          sortable: false,
          value: 'stock'
        },
        {
          text: 'Fecha de Caducidad',
          align: 'left',
          sortable: false,
          value: 'fecha_caducidad'
        },
        {
          text: 'Precio',
          align: 'left',
          sortable: false,
          value: 'precio'
        }
      ],
      salvar: function(item, val, data) {
        this.$store.dispatch('datos/actualizarProducto', {
          item: item,
          val: val,
          data: data
        })
      },
      filtrarProductos: function(busqueda) {
        this.$store.dispatch('datos/filtrarProductos', { busqueda: busqueda })
      }
    }
  }
}
</script>

<style scoped></style>
