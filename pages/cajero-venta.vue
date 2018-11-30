<template>
  <v-container>
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
        <v-flex
          md12
          style="height: 400px"
        >
          <tabla-venta :ventas="ventas"/>
        </v-flex>
      </v-flex>
      <v-flex
        class="layout-margen"
        md5>
        <v-layout column>

          <v-flex md12>
            <v-card>
              <v-carousel hide-controls>
                <v-carousel-item
                  v-for="(item,i) in fotos"
                  :key="i"
                  :src="item.src"
                />
              </v-carousel>

            </v-card>
          </v-flex>
          <v-flex md1>
            <fab
              :fab="fab"
              direction="left"
            />
          </v-flex>
        </v-layout>
      </v-flex>

    </v-layout>

  </v-container>

</template>
<script>
import SelectInput from '../components/select-input'
import TablaVenta from '../components/tabla-venta'
import { mapActions, mapMutations, mapGetters } from 'vuex'
import Fab from '../components/fab'

export default {
  components: { Fab, SelectInput, TablaVenta },
  data() {
    return {
      fab: false,
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
      ]
    }
  },
  computed: {
    ...mapGetters({
      productos: 'datos/getProductos',
      getProducto: 'datos/getProducto',
      ventas: 'cajero/getVentas'
    })
  },
  async fetch({ store }) {
    console.log('fetch')
  },

  created() {
    // Add barcode scan listener and pass the callback function
    this.$barcodeScanner.init(this.onBarcodeScanned)
    console.log('created')
    this.addVenta(this.productos[0])
  },

  destroyed() {
    // Remove listener when component is destroyed
    this.$barcodeScanner.destroy()
  },
  methods: {
    // Create callback function to receive barcode when the scanner is already done
    onBarcodeScanned(barcode) {
      console.log(barcode)
      let result = this.getProducto(barcode)
      console.log(result)
      if (result.length == 1) this.addVenta(result[0])
      fab = true
    },
    // Reset to the last barcode before hitting enter (whatever anything in the input box)
    resetBarcode() {
      let barcode = this.$barcodeScanner.getPreviousCode()
      // do something...
    },
    ...mapActions({
      inicia: 'datos/getProductos'
    }),
    ...mapMutations({
      addVenta: 'cajero/add',
      uno: 'datos/setTitulo'
    })
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

.fab {
  margen: 50px;
}
</style>
