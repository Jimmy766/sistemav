<template>
  <v-container>
    <v-layout wrap row>
      <v-flex md6>
        <factura />
        <v-flex md12>
          <v-layout column>
            <select-input
              :filtro="productos"
              :simple="true"
              sub="codigo"
              query="nombre"
              label1="Busqueda"
              label2="Nombre"
            />
            <tabla-venta />
          </v-layout>
        </v-flex>
      </v-flex>
      <v-flex class="layout-margen" md5>
        <v-layout column>
          <v-flex md12>
            <v-card>
              <v-carousel hide-controls>
                <v-carousel-item
                  v-for="(item, i) in fotos"
                  :key="i"
                  :src="item.src"
                />
              </v-carousel>
            </v-card>
          </v-flex>
          <v-flex md1>
            <fab :fab="fab" direction="left" :fac="true" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
import TablaVenta from '../components/tabla-venta'
import Fab from '../components/fab'
import Factura from '../components/factura'
import SelectInput from '../components/select-input'

export default {
  components: { SelectInput, Factura, Fab, TablaVenta },
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
      ],
      productos: function(val) {
        this.$store.dispatch('datos/filtrarProductos', { busqueda: val })
      }
    }
  },
  computed: {
    ...mapGetters({
      getProducto: 'datos/getProducto'
    })
  },
  async fetch({ store }) {
    console.log('fetch')
  },

  created() {
    // Add barcode scan listener and pass the callback function
    this.$barcodeScanner.init(this.onBarcodeScanned)
    const c = this.$codigoC(
      '7904006306693',
      '876814',
      '1665979',
      '20080519',
      '35958,6',
      'zZ7Z]xssKqkEf_6K9uH(EcV+%x+u[Cca9T%+_$kiLjT8(zr3T9b5Fx2xG-D+_EBS'
    )
    console.log('created')
    console.log('codigo de control es : ' + c)
    this.setTitulo('Woomart - Cajero')
  },

  destroyed() {
    // Remove listener when component is destroyed
    this.$barcodeScanner.destroy()
  },
  methods: {
    // Create callback function to receive barcode when the scanner is already done
    onBarcodeScanned(barcode) {
      console.log(barcode)
      const result = this.getProducto(barcode)
      console.log(result)
      if (result.length == 1) this.addVenta(result[0])
      this.fab = true
    },
    // Reset to the last barcode before hitting enter (whatever anything in the input box)
    resetBarcode() {
      const barcode = this.$barcodeScanner.getPreviousCode()
      // do something...
    },
    ...mapActions({
      inicia: 'datos/getProductos',
      setTitulo: 'datos/setTitulo',
      filtrarProductos: 'datos/filtrarProductos'
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

.layout-margen {
  margin: 20px;
}

.fab {
  margen: 50px;
}
</style>
