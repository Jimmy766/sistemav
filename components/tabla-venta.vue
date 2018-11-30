<template>

  <v-data-table
    :headers="headers"
    :items="ventas"

    class="elevation-6"
    hide-actions
  >

    <template
      slot="items"
      slot-scope="props"
    >
      <v-hover>

        <td
          slot-scope="{hover}"
          class="caption">
          <v-scale-transition
            hide-on-leave
          >
            <v-icon
              v-if="hover"
              color="red"
              small
            >
              delete
            </v-icon>
          </v-scale-transition>
          <v-scale-transition
            hide-on-leave
          >
            <v-icon
              v-if="!hover"
              small>close</v-icon>
          </v-scale-transition>
          {{ props.item.nombre }}
        </td>
      </v-hover>
      <td class="text-xs-right">{{ props.item.cantidad }}</td>
      <td class="text-xs-right">{{ props.item.precio }}</td>
      <td class="text-xs-right">{{ props.item.total }}</td>

    </template>

  </v-data-table>

</template>
<script>
import colors from 'vuetify/es5/util/colors'
export default {
  props: {
    ventas: { type: Array, required: true }
  },
  data() {
    return {
      headers: [
        {
          text: 'Nombre',
          align: 'left',
          sortable: false,
          value: 'nombre'
        },

        {
          text: 'Cantidad',
          value: 'cantidad',
          align: 'right',
          sortable: false
        },
        { text: 'Precio', value: 'precio', align: 'right', sortable: false },
        { text: 'Total', value: 'total', align: 'right', sortable: false }
      ]
    }
  }
}
</script>

<style scoped>
</style>
