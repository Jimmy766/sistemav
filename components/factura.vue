<template>
  <v-card>
    <v-layout rows>
      <v-flex md6>
        <select-input
          :items="productos"
          sub="nombre"
          query="codigo"
          label1="Nit"
          label2="Nombre"
        />
      </v-flex>
      <v-flex
        md6
        class="margen"
      >
        <v-text-field
          readonly
          label="Nro Factura"

        />
        <v-text-field
          readonly
          label="Codigo de Control"/>

        <v-text-field
          readonly
          label="Codigo Autorizacion"/>

      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import SelectInput from '../components/select-input'
import { mapGetters } from 'vuex'
export default {
  components: { SelectInput },
  computed: {
    ...mapGetters({
      productos: 'datos/getProductos'
    })
  }
}
</script>

<style scoped>
.margen {
  margin: 10px;
}
</style>
