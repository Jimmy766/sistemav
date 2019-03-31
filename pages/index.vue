<template>
  <v-layout />
</template>

<script>
import Prueba from '../components/prueba'
import socket from '~/plugins/socket.io.js'
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
        { total: 'Sandra Adams', group: 'Group 1', avatar: srcs[1] },
        { total: 'Ali Connors', group: 'Group 1', avatar: srcs[2] },
        { total: 'Trevor Hansen', group: 'Group 1', avatar: srcs[3] },
        { total: 'Tucker Smith', group: 'Group 1', avatar: srcs[2] },
        { divider: true },
        { header: 'Group 2' },
        { total: 'Britta Holt', group: 'Group 2', avatar: srcs[4] },
        { total: 'Jane Smith ', group: 'Group 2', avatar: srcs[5] },
        { total: 'John Smith', group: 'Group 2', avatar: srcs[1] },
        { total: 'Sandra Williams', group: 'Group 2', avatar: srcs[3] }
      ]
    }
  },
  beforeMount() {
    socket.io('prueba', function(msg) {
      alert(msg)
    })
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
      const barcode = this.$barcodeScanner.getPreviousCode()
      // do something...
    }
  }
}
</script>
