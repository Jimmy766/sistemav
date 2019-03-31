import { mapGetters } from 'vuex'
import Vue from 'vue'
export default {
  computed: {
    ...mapGetters({
      productos: 'datos/getProductos'
    })
  }
}
