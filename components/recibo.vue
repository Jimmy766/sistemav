<template>
  <div>
    <div id="uno">
      <table style="width: 100%">
        <tr>
          <td>
            <b>Fecha:</b>
            {{ moment(new Date()).format('DD/MM/YYYY') }}
          </td>
          <td><b>Hora: </b>{{ moment(new Date()).format('HH:mm') }}</td>
        </tr>
        <tr>
          <td><b>Factura:</b> {{ numero }}</td>
        </tr>
      </table>

      <table style="width: 100%" class="tabla">
        <tr>
          <th>Cant.</th>
          <th>Concepto</th>
          <th>Precio U</th>
          <th>Total</th>
        </tr>
        <tr v-for="venta in ventas" :key="venta['codigo']">
          <td v-html="venta['cantidad']" />
          <td v-html="venta['nombre']" />
          <td v-html="venta['precio']" />
          <td v-html="venta['total']" />
        </tr>
        <tr>
          <td />
          <th>Total :</th>
          <td></td>
          <th v-html="parseFloat(total).toFixed(2)" />
        </tr>
      </table>

      <b>Vendedor: Cajero1</b><br />
      <table style="width:60%">
        <tr>
          <th>Efectivo:</th>
          <th>{{ Number(efectivo).toFixed(2) }}</th>
        </tr>
        <tr>
          <th>Vuelto:</th>
          <th>{{ Number(cambio).toFixed(2) }}</th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { Printd } from 'printd'
export default {
  el: '#uno',
  props: {
    ventas: { type: Array, required: true },
    total: { type: Number, required: true },
    efectivo: { type: Number, required: true },
    cambio: { type: Number, required: true },
    numero: { type: Number, required: true },
    moment: { type: Object, required: true }
  },
  data: function() {
    return {
      cssText: `
      button {
        background-color: #f0f0f0;
        border: solid 1px #ccc;
        padding: 5px 10px;
        font-size: 12px;
      }

      pre {
        color: #c7254e;
      }
.margen{
  margin-left: 500px;
}
.margend{
  margin-right:150px;
}
tr{
  text-align: left;

}
.tabla tr td,
.tabla tr{
  text-align: left;
  font-size: 6px;

}
.uno{
  font-size: 6px;
}
    `
    }
  },
  methods: {
    imprimir() {
      if (process.browser) {
        const d = new Printd()

        // Print dialog events (v0.0.9+)
        const { contentWindow } = d.getIFrame()
        contentWindow.addEventListener('beforeprint', () =>
          console.log('before print event!')
        )
        contentWindow.addEventListener('afterprint', () =>
          console.log('after print event!')
        )
        console.log('asdasdasd')
        d.print(this.$el, [this.cssText])
      }
    }
  }
}
</script>

<style scoped></style>
