<template>
  <v-container >
    
    <v-layout 
      column
    >
      <v-flex xs6>
        <v-autocomplete
          v-model="valor1"
          :items="items"
          :label="label1"
          :item-text="query"
          :item-value="query"
          hide-no-data
          flat
          chips
        >
          <template
            slot="selection"
            slot-scope="data"

          >
            <v-chip
              :selected="data.selected"
              @hook:mounted="actualiza(data.item)"
              @hook:updated="actualiza(data.item)"
            >{{ data.item[query] }}</v-chip>
          </template>
          <template
            slot="item"
            slot-scope="data"
          >
            <template>
              <v-list-tile-content>
                <v-list-tile-title v-html="data.item[query]"/>
                <v-list-tile-sub-title v-html="data.item[sub]"/>
              </v-list-tile-content>
            </template>
          </template>
        </v-autocomplete>
      </v-flex>
      <v-flex xs6>
        <v-textarea
          :label="label2"
          v-model="valor2"
          auto-grow
          rows="1"
        />
      </v-flex>
    </v-layout>

  </v-container>
</template>
<script>
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
    items: {
      type: Array,
      required: true
    },
    query: {
      type: String,
      required: true
    },
    sub: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      valor1: null,
      valor2: null
    }
  },
  methods: {
    actualiza(item) {
      console.log('elegido: ' + item)
      this.valor2 = item[this.sub]
    }
  }
}
</script>
<style scoped>
.flex {
  margin: 10px;
}
</style>
