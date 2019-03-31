<template>
  <v-container>
    <v-layout column>
      <v-flex md12>
        <v-data-table
          :headers="headers"
          :items="ventas"
          no-data-text="Vacío"
          class="elevation-6"
          hide-actions
        >
          <template slot="items" slot-scope="props">
            <v-hover>
              <td slot-scope="{ hover }" class="caption">
                <v-scale-transition hide-on-leave>
                  <v-btn
                    v-if="hover"
                    icon
                    flat
                    @click="mostrarQuitar(props.item)"
                  >
                    <v-icon small>delete</v-icon>
                  </v-btn>
                </v-scale-transition>
                <v-scale-transition hide-on-leave>
                  <v-icon v-if="!hover" small>close</v-icon>
                </v-scale-transition>
                {{ props.item.nombre }}
              </td>
            </v-hover>
            <td class="text-xs-right">{{ props.item.cantidad }}</td>
            <td class="text-xs-right">{{ props.item.precio }}</td>
            <td class="text-xs-right">{{ props.item.total }}</td>
          </template>
        </v-data-table>
      </v-flex>
      <br />
      <v-flex md12 offset-md6>
        <v-list two-line>
          <v-list-tile>
            <v-list-tile-content>
              <v-text-field
                v-model="total"
                prefix="Bs"
                label="Total"
                type="number"
                readonly
              />
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-text-field
                v-model="dinero"
                prefix="Bs"
                label="Efectivo"
                type="number"
                clearable
                @input="calculaCambio"
              ></v-text-field>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-text-field
                v-model="cambio"
                prefix="Bs"
                label="Cambio"
                readonly
              />
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
    <v-dialog v-model="eliminar" max-width="269" @keyup.enter="quitar">
      <v-card>
        <v-card-title color="danger">
          Quitar ?
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn flat color="green darken-1" @click="quitar">Confirmar</v-btn>
          <v-btn flat color="green darken-1" @click="eliminar = false"
            >Cancelar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import colors from 'vuetify/es5/util/colors'
import { mapGetters, mapActions } from 'vuex'
export default {
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
      ],
      eliminar: false,
      seleccionado: null,
      dinero: 0
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
    dinero: {
      handler() {
        console.log('dinero: ' + this.dinero)
        this.setEfectivo(this.dinero)
      }
    }
  },
  methods: {
    calculaCambio() {
      const aux = this.dinero > 0 ? this.dinero - this.total : 0
      console.log(aux)
      this.setCambio(aux)
    },
    mostrarQuitar(item) {
      this.seleccionado = item
      this.eliminar = true
    },
    quitar() {
      if (this.seleccionado) {
        this.quitarVenta(this.seleccionado)
        this.eliminar = false
      }
    },

    ...mapActions({
      quitarVenta: 'cajero/quitar',
      setEfectivo: 'cajero/setEfectivo',
      setCambio: 'cajero/setCambio'
    })
  }
}
</script>

<style scoped></style>
