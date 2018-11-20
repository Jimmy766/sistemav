<template>
  <v-layout/>
</template>

<script>
import Prueba from '../components/prueba'
export default {
  components: { Prueba },
  data() {
    const srcs = {
      1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg'
    }
    return {
      people: [
        { header: 'Group 1' },
        { valor1: 'Sandra Adams', group: 'Group 1', avatar: srcs[1] },
        { valor1: 'Ali Connors', group: 'Group 1', avatar: srcs[2] },
        { valor1: 'Trevor Hansen', group: 'Group 1', avatar: srcs[3] },
        { valor1: 'Tucker Smith', group: 'Group 1', avatar: srcs[2] },
        { divider: true },
        { header: 'Group 2' },
        { valor1: 'Britta Holt', group: 'Group 2', avatar: srcs[4] },
        { valor1: 'Jane Smith ', group: 'Group 2', avatar: srcs[5] },
        { valor1: 'John Smith', group: 'Group 2', avatar: srcs[1] },
        { valor1: 'Sandra Williams', group: 'Group 2', avatar: srcs[3] }
      ]
    }
  },
  created() {
    // Add barcode scan listener and pass the callback function
    this.$barcodeScanner.init(this.onBarcodeScanned)
  },
  destroyed() {
    // Remove listener when component is destroyed
    this.$barcodeScanner.destroy()
  },
  methods: {
    // Create callback function to receive barcode when the scanner is already done
    onBarcodeScanned(barcode) {
      console.log(barcode)
      // do something...
    },
    // Reset to the last barcode before hitting enter (whatever anything in the input box)
    resetBarcode() {
      let barcode = this.$barcodeScanner.getPreviousCode()
      // do something...
    }
  }
}
</script>
