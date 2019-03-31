<template>
  <v-container>
    <v-layout rows>
      <v-flex md12>
        <factura/>
      </v-flex>
      <v-flex md12/>
    </v-layout>
  </v-container>
</template>
<script>
import Factura from '../../components/factura'
import SelectInput from '../../components/select-input'
export default {
  components: { SelectInput, Factura }
}
</script>

<style scoped>
</style>
