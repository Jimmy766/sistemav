<template>
  <v-container>
    <v-layout column>
      <v-flex xs6>
        <v-autocomplete
          v-model="model"
          :items="items"
          :label="label1"
          :item-text="[query]"
          :item-value="sub"
          :search-input.sync="busqueda"
          :value="model"
          :prepend-icon="simple ? 'add_shopping_cart' : null"
          flat
          chips
          clearable
          append-icon="search"
          @input="elegido"
          @click:prepend="adicionar"
        >
          <template slot="selection" slot-scope="data">
            <!--@hook:mounted="creado(data.item)"
              -->
            <!--@hook:updated="actualiza(data.item)" -->
            <v-chip :selected="data.selected">{{ data.item[query] }}</v-chip>
          </template>

          <template slot="item" slot-scope="data">
            <template>
              <v-list-tile-content>
                <v-list-tile-title v-html="data.item[query]" />
                <v-list-tile-sub-title v-html="data.item['precio']" />
              </v-list-tile-content>
            </template>
          </template>
        </v-autocomplete>
      </v-flex>
      <v-flex v-if="!simple" xs6>
        <v-textarea v-model="valor2" :label="label2" auto-grow rows="1" />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: {
    label1: {
      type: String,
      default: 'Select'
    },
    label2: {
      type: String,
      default: 'Select'
    },
    query: {
      type: String,
      required: true
    },
    sub: {
      type: String,
      required: true
    },
    simple: {
      type: Boolean,
      default: false
    },
    filtro: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      total: null,
      valor2: null,
      model: null,
      cc: 0,
      items: [],
      busqueda: null,
      calentando: false,
      aux: ''
    }
  },
  watch: {
    busqueda(val) {
      if (val) {
        this.aux += val
        console.log('buscando ' + this.aux)
        this.filtro(this.aux)
        this.items = this.pFiltrado
      }
    }
  },
  mounted() {},
  computed: {
    ...mapGetters({
      getProducto: 'datos/getProducto',
      pFiltrado: 'datos/getFiltrados'
    })
  },
  methods: {
    creado(item) {
      console.log('creado: ' + item)
      this.valor2 = item[this.sub]
    },
    actualiza(item) {
      console.log('actualizado: ' + item)
      this.valor2 = item[this.sub]
    },
    elegido(val) {
      console.log('elegido: ' + val)
      this.valor2 = val
    },
    adicionar(e) {
      if (this.valor2 != undefined || this.valor2 != null) {
        const val = this.getProducto(this.valor2)
        console.log('venta a :' + val)
        this.addVenta(val[0])
      }
    },
    nose() {
      console.log('nose')
    },
    ...mapActions({ addVenta: 'cajero/add' })
  }
}
</script>
<style scoped>
.theme--light.v-list .v-list__tile--link:hover,
.theme--light.v-list .v-list__tile--highlighted,
.theme--light.v-list .v-list__group__header:hover {
  background: rgba(129, 186, 255, 0.87);
}
</style>
