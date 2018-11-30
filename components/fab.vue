<template>
  <v-speed-dial
    v-model="fab"
    :top="top"
    :bottom="bottom"
    :right="right"
    :left="left"
    :direction="direction"
    :open-on-hover="hover"
    :transition="transition"
    fixed
  >
    <v-btn
      slot="activator"
      v-model="fab"
      color="blue darken-2"
      dark
      fab
      
    >
      <v-icon>account_circle</v-icon>
      <v-icon>close</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="green"
    >
      <v-icon>edit</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="indigo"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="red"
    >
      <v-icon>delete</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  props: {
    direction: { type: String, default: 'top' },
    fab: { type: Boolean, default: false },
    hover: { type: Boolean, default: false },
    top: { type: Boolean, default: false },
    right: { type: Boolean, default: true },
    bottom: { type: Boolean, default: true },
    left: { type: Boolean, default: false },
    transition: { type: String, default: 'scale-transition' }
  },
  watch: {
    top(val) {
      this.bottom = !val
    },
    right(val) {
      this.left = !val
    },
    bottom(val) {
      this.top = !val
    },
    left(val) {
      this.right = !val
    }
  }
}
</script>
