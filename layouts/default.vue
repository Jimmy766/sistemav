<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer.open"
      :clipped="drawer.clipped"
      :fixed="drawer.fixed"
      :permanent="drawer.permanent"
      :mini-variant="drawer.mini"
      app
      dark
      temporary
    >
      <v-list>
        <v-list-tile v-if="!drawer.permanent" @click="makeDrawerPermanent">
          <v-list-tile-action
            ><v-icon>chevron_right</v-icon></v-list-tile-action
          >
          <v-list-tile-content
            ><v-list-tile-title>Static Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="toggleMiniDrawer">
          <v-list-tile-action><v-icon>aspect_ratio</v-icon></v-list-tile-action>
          <v-list-tile-content
            ><v-list-tile-title>Mini Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider />

        <v-list-tile to="cajero-venta">
          <v-list-tile-action><v-icon>dashboard</v-icon></v-list-tile-action>
          <v-list-tile-content
            ><v-list-tile-title>Principal</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-group no-action>
          <template slot="activator">
            <v-list-tile>
              <v-list-tile-action><v-icon>get_app</v-icon></v-list-tile-action>
              <v-list-tile-content
                ><v-list-tile-title>Usuarios</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          <v-list-tile>
            <v-list-tile-action><v-icon>get_app</v-icon></v-list-tile-action>
            <v-list-tile-content
              ><v-list-tile-title>Clientes</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

        <v-list-tile to="/productos">
          <v-list-tile-action><v-icon>get_app</v-icon></v-list-tile-action>
          <v-list-tile-content
            ><v-list-tile-title>Inventario</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action><v-icon>get_app</v-icon></v-list-tile-action>
          <v-list-tile-content
            ><v-list-tile-title>Compras</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action><v-icon>get_app</v-icon></v-list-tile-action>
          <v-list-tile-content
            ><v-list-tile-title>Ventas</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action><v-icon>get_app</v-icon></v-list-tile-action>
          <v-list-tile-content
            ><v-list-tile-title>Reportes</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action><v-icon>get_app</v-icon></v-list-tile-action>
          <v-list-tile-content
            ><v-list-tile-title>Ajustes</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      :fixed="toolbar.fixed"
      :clipped-left="toolbar.clippedLeft"
      app
      color="deep-orange"
    >
      <v-toolbar-side-icon class="white--text" @click.stop="toggleDrawer" />
      <v-toolbar-title class="white--text">{{ titulo() }}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex md12>
            <nuxt />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data: () => ({
    drawer: {
      // sets the open status of the drawer
      open: false,
      // sets if the drawer is shown above (false) or below (true) the toolbar
      clipped: false,
      // sets if the drawer is CSS positioned as 'fixed'
      fixed: false,
      // sets if the drawer remains visible all the time (true) or not (false)
      permanent: false,
      // sets the drawer to the mini variant, showing only icons, of itself (true)
      // or showing the full drawer (false)
      mini: false
    },
    toolbar: {
      //
      fixed: false,
      // sets if the toolbar contents is leaving space for drawer (false) or not (true)
      clippedLeft: true
    },
    footer: {
      // sets the CSS position of the footer
      fixed: true,
      // sets if the footer is full width (true) or gives space to the drawer (false)
      clippedLeft: true
    }
  }),
  created() {
    this.setTitulo('Woomart - Cajero')
  },
  methods: {
    // changes the drawer to permanent
    makeDrawerPermanent() {
      this.drawer.permanent = true
      // set the clipped state of the drawer and toolbar
      this.drawer.clipped = false
      this.toolbar.clippedLeft = false
    },
    // toggles the drawer variant (mini/full)
    toggleMiniDrawer() {
      this.drawer.mini = !this.drawer.mini
    },
    // toggles the drawer type (permanent vs temporary) or shows/hides the drawer
    toggleDrawer() {
      if (this.drawer.permanent) {
        this.drawer.permanent = !this.drawer.permanent
        // set the clipped state of the drawer and toolbar
        this.drawer.clipped = true
        this.toolbar.clippedLeft = true
      } else {
        // normal drawer
        this.drawer.open = !this.drawer.open
      }
    },
    ...mapMutations({ setTitulo: 'datos/setTitulo' }),
    ...mapGetters({ titulo: 'datos/getTitulo' })
  }
}
</script>
