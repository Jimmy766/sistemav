<template>
  <v-autocomplete>
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
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
</style>
