<template>
  <div>
    <div id="dos">
      <h1>{{ titulo }}</h1>
      <h3>CASA MATRIZ</h3>
      <h4>{{ direccion }}</h4>
      <h4>NIT: {{ nit }}</h4>
      <h4>FACTURA N°: {{ numero }}</h4>
      <h4>AUTORIZACION N°: {{ ca }}</h4>
      <h5>{{ etiqueta1 }}</h5>
      <h3>FACTURA</h3>
      <h4>ORIGINAL</h4>
      <h5 class="izquierda">
        Warnes,
        {{ moment(new Date()).format('DD [de] MMMM [del] YYYY') }}
      </h5>
      <h5 class="izquierda">Nombre: {{ nombre }}</h5>
      <h5 class="izquierda">Nit/Ci: {{ nitc }}</h5>
      <h5 class="izquierda">Hora: {{ moment(new Date()).format('HH:mm') }}</h5>

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
          <th class="izquierda" v-html="parseFloat(total).toFixed(2)" />
        </tr>
      </table>

      <table style="width:60%" class="izquierda">
        <tr>
          <th>Son:</th>
          <th>{{ numeros(total) }}</th>
        </tr>
        <tr>
          <th>Efectivo:</th>
          <th>{{ Number(efectivo).toFixed(2) }}</th>
        </tr>
        <tr>
          <th>Vuelto:</th>
          <th>{{ Number(cambio).toFixed(2) }}</th>
        </tr>
      </table>

      <h5 class="izquierda">Codigo de Control: {{ cc }}</h5>
      <h5 class="izquierda">Fecha Limite de Emision: {{ fechaLimite }}</h5>
      <div class="texto" v-html="img"></div>
      <h5>{{ etiqueta2 }}</h5>
    </div>
  </div>
</template>
<script>
import { Printd } from 'printd'
export default {
  el: '#dos',
  props: {
    ventas: { type: Array, required: true },
    total: { type: Number, required: true },
    efectivo: { type: Number, required: true },
    cambio: { type: Number, required: true },
    numero: { type: Number, required: true },
    titulo: { type: String, required: true },
    direccion: { type: String, required: true },
    fechaLimite: { type: String, required: true },
    cc: { type: String, required: true },
    ca: { type: String, required: true },
    nit: { type: String, required: true },
    nitc: { type: String, required: true },
    nombre: { type: String, required: true },
    etiqueta1: { type: String, required: true },
    etiqueta2: { type: String, required: true },
    moment: { type: Object, required: true },
    numeros: { type: Object, required: true },
    qrcode: { type: Object, required: true }
  },

  data: function() {
    return {
      img: 'lo q sea',
      cssText: `

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
.izquierda,
.tabla tr td,
.tabla tr{
  text-align: left;
  font-size: 6px;
}
.dos{
  font-size: 10px;
   width: 100%;
}
.texto,
h1,h2,h3,h4,h5{
text-align: center;
font-size: 6px;
margin-top: 0px;
    margin-bottom: 0px;
}


    `
    }
  },
  created() {
    this.qrcode = this.qrcode(4, 'L')
    this.qrcode.addData(
      this.nit +
        '|' +
        this.ca +
        '|' +
        this.moment(new Date()).format('DD/MM/YYYY') +
        '|' +
        this.total +
        '|' +
        this.total +
        '|' +
        this.cc +
        '|' +
        this.nitc +
        '|0|0|0|0'
    )
    this.qrcode.make()
    this.img = this.qrcode.createImgTag(2)
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

<style scoped>
h1 {
}
</style>
