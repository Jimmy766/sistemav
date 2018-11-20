<template>
  <v-card
    color="blue-grey darken-1"
    dark
  >



    <v-autocomplete
      v-model="friends"

      :items="people"

      color="blue-grey lighten-2"
      label="Select"
      item-text="valor1"
      item-value="valor1"
      hide-no-data

    >
      <template
        slot="selection"
        slot-scope="data"
      >

                
        {{ data.item.valor1 }}

      </template>
      <template
        slot="item"
        slot-scope="data"
      >
        <template v-if="typeof data.item !== 'object'">
          <v-list-tile-content v-text="data.item"/>
        </template>
        <template v-else>
          <v-list-tile-avatar>
            <img :src="data.item.avatar">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="data.item.valor1"/>
            <v-list-tile-sub-title v-html="data.item.group"/>
          </v-list-tile-content>
        </template>
      </template>
    </v-autocomplete>

 

  </v-card>
</template>
<script>
export default {
  props: {
    people: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      autoUpdate: true,
      friends: ['Sandra Adams', 'Britta Holt'],
      isUpdating: false,
      valor1: 'Midnight Crew',

      title: 'The summer breeze'
    }
  },

  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000)
      }
    }
  },

  methods: {
    remove(item) {
      const index = this.friends.indexOf(item.name)
      if (index >= 0) this.friends.splice(index, 1)
    }
  }
}
</script>
