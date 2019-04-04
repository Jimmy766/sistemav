<template>
  <v-speed-dial
    v-model="fab"
    slot-scope="{ hover }"
    :top="top"
    :bottom="bottom"
    :right="right"
    :left="left"
    :direction="direction"
    :open-on-hover="hoverable"
    :transition="transition"
    fixed
  >
    <v-btn
      slot="activator"
      v-model="fab"
      color="primary"
      dark
      fab
      style="text-align: center"
    >
      <v-icon>shopping_cart</v-icon>
      <v-icon>close</v-icon>
    </v-btn>

    <v-hover>
      <v-btn
        slot-scope="{ hover }"
        :fab="!hover"
        :round="hover"
        :small="!hover"
        dark
        color="red"
        @click="limpiar()"
      >
        <v-icon :small="hover" :left="hover">delete_forever</v-icon>
        {{ hover ? 'Cancelar' : '' }}
      </v-btn>
    </v-hover>
    <v-hover>
      <v-btn
        slot-scope="{ hover }"
        :fab="!hover"
        :round="hover"
        :small="!hover"
        dark
        color="green"
        @click="guardar()"
      >
        <v-icon :small="hover" :left="hover">save</v-icon>
        {{ hover ? 'Guardar' : '' }}
      </v-btn>
    </v-hover>
    <v-hover>
      <v-btn
        slot-scope="{ hover }"
        :fab="!hover"
        :round="hover"
        :small="!hover"
        dark
        color="indigo"
        @click="imprimir()"
      >
        <v-icon :small="hover" :left="hover">print</v-icon>
        {{ hover ? 'Imprimir' : '' }}
      </v-btn>
    </v-hover>
  </v-speed-dial>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import * as date from 'vue-filter-date-format'
import Recibo from '../components/recibo'
import Factura from '../components/factura-imp'
export default {
  props: {
    direction: { type: String, default: 'top' },
    fab: { type: Boolean, default: false },
    hoverable: { type: Boolean, default: false },
    top: { type: Boolean, default: false },
    right: { type: Boolean, default: true },
    bottom: { type: Boolean, default: true },
    left: { type: Boolean, default: false },
    transition: { type: String, default: 'scale-transition' },
    fac: { type: Boolean, default: false }
  },
  data() {
    return {
      recibo: null,
      factura: null
    }
  },
  computed: {
    ...mapGetters({
      ventas: 'cajero/getVentas',
      total: 'cajero/getTotal',
      efectivo: 'cajero/getEfectivo',
      cambio: 'cajero/getCambio'
    })
  },
  watch: {
    top(val) {
      this.bottom = !val
    },
    right(val) {
      this.left = !val
    },
    bottom(val) {
      this.top = !val
    },
    left(val) {
      this.right = !val
    }
  },
  mounted() {
  },
  methods: {
    limpiar() {
      this.reset()
    },
    guardar() {
      this.saveVenta()
      this.reset()
    },
    imprimir() {
      const Cl = Vue.extend(Recibo)
      const C2 = Vue.extend(Factura)
      this.recibo = new Cl({
        propsData: {
          ventas: this.ventas,
          efectivo: this.efectivo,
          cambio: this.cambio,
          total: this.total,
          moment: this.$moment,
          numero: 455,
        }
      })

      this.factura = new C2({
        propsData: {
          moment: this.$moment,
          ventas: this.ventas,
          efectivo: this.efectivo,
          cambio: this.cambio,
          total: this.total,
          numero: 455,
          titulo: 'titulo',
          direccion: 'direccion',
          fechaLimite: 'fecha limite',
          cc: 'ty-gf-tr-fg-vc',
          ca: '1000052546',
          nitc: '5663254',
          nit: '5663254',
          nombre: 'abuela',
          etiqueta1: 'etiqueta 1',
          etiqueta2: 'lorem ',
          numeros: this.$numeros,
          qrcode: this.$qrcode,
        }
      })
      if (this.fac) this.factura.imprimir()
      else this.recibo.imprimir()
      this.reset()
    },
    ...mapActions({ reset: 'cajero/limpiar',saveVenta:'cajero/saveVenta' })
  }
}
</script>
