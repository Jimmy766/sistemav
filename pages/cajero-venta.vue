<template>
  <v-container >
    <v-layout 
      wrap
      row>
      <v-flex 
        md6

      >
        <v-card>
          <v-layout rows>
            <v-flex md6>
              <select-input
                :items="clientes()"
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
                label="Codigo de Control" />

              <v-text-field
                readonly
                label="Codigo Autorizacion" />

        </v-flex></v-layout></v-card>
        <v-flex
          md12
          style="height: 400px"
        >
          <v-data-table
            :headers="headers"
            :items="cajero"
            class="elevation-6"

            hide-actions
          >

            <template
              slot="items"
              slot-scope="props"
            >

              <td class="caption">{{ props.item.nombre }}</td>
              
              <td class="text-xs-right">{{ props.item.cantidad }}</td>
              <td class="text-xs-right">{{ props.item.precio }}</td>
              <td class="text-xs-right">{{ props.item.total }}</td>
            
            </template>

          </v-data-table>
        </v-flex>
      </v-flex>
      <v-flex
        class="layout-margen"
        md5>
        <v-card>
          <v-carousel hide-controls>
            <v-carousel-item
              v-for="(item,i) in fotos"
              :key="i"
              :src="item.src"
            />
          </v-carousel>


      </v-card></v-flex>
      
    </v-layout>



      

  </v-container>
</template>
<script>
import SelectInput from '../components/select-input'
import { mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  components: { SelectInput },
  data() {
    return {
      fotos: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ],
      headers: [
        {
          text: 'Nombre',
          align: 'left',
          sortable: false,
          value: 'nombre'
        },

        { text: 'Cantidad', value: 'cantidad', align: 'right' },
        { text: 'Precio', value: 'precio', align: 'right' },
        { text: 'Total', value: 'total', align: 'right' }
      ]
    }
  },
  async fetch({ store }) {
    console.log('fetch')
  },
  computed: {},
  created() {
    // Add barcode scan listener and pass the callback function
    this.$barcodeScanner.init(this.onBarcodeScanned)
    console.log('created')
  },

  destroyed() {
    // Remove listener when component is destroyed
    this.$barcodeScanner.destroy()
  },
  methods: {
    // Create callback function to receive barcode when the scanner is already done
    onBarcodeScanned(barcode) {
      console.log(barcode)
    },
    // Reset to the last barcode before hitting enter (whatever anything in the input box)
    resetBarcode() {
      let barcode = this.$barcodeScanner.getPreviousCode()
      // do something...
    },
    ...mapActions({
      inicia: 'datos/getClientes'
    }),
    ...mapMutations({ getClientes: 'datos/getClientes' }),
    ...mapGetters({ clientes: 'datos/getClientes', ventas: 'cajero/getVentas' })
  }
}
</script>
<style scoped>
.v-carousel-item {
  padding: 5px;
}
.margen {
  margin: 10px;
}
.layout-margen {
  margin: 20px;
}
thead {
  clear: both;
  display: block;
}
</style>
