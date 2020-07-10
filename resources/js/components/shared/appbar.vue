<template>
  <section>
    <v-app-bar
      app
      flat
      tile
      extended
      dense
      color="white"
    >
      <v-toolbar-title class="pa-0 caption font-weight-bold hidden-xs-only">
        Gratis E-Book 9 Cara Cerdas menggunakan Domain [x]
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-xs-only">
        <v-card-text>
          <v-icon left small>
            phone
          </v-icon>
          (0274)-5305505
        </v-card-text>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-xs-only">
        <v-card-text>
          <v-icon left small>
            forum
          </v-icon>
          Live Chat
        </v-card-text>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-xs-only">
        <v-card-text>
          <v-icon left small>
            account_circle
          </v-icon>
          Member Area
        </v-card-text>
      </v-toolbar-items>
      <v-toolbar-title slot="extension" class="pa-0 hidden-xs-only">
        <v-img src="../assets/niagahoster-logo.png" max-width="13vw" position="center" />
      </v-toolbar-title>
      <v-toolbar-title slot="extension" class="pa-0 hidden-sm-and-up">
        <v-img src="../assets/niagahoster-logo.png" max-width="30vw" position="center" />
      </v-toolbar-title>
      <v-spacer slot="extension" />

      <v-toolbar-title slot="extension" class="pa-0 hidden-xs-only" height="auto">
        <v-tabs>
          <v-tab>Hosting</v-tab>
          <v-tab>Domain</v-tab>
          <v-tab>Server</v-tab>
          <v-tab>Website</v-tab>
          <v-tab>Afiliasi</v-tab>
          <v-tab>Promo</v-tab>
          <v-tab>Pembayaran</v-tab>
          <v-tab>Kontak</v-tab>
          <v-tab>Blog</v-tab>
        </v-tabs>
      </v-toolbar-title>
      <v-btn slot="extension" fab text class="hidden-sm-and-up" @click.stop="drawer = !drawer">
        <v-icon center>
          menu
        </v-icon>
      </v-btn>
    </v-app-bar>
        <v-navigation-drawer v-model="drawer" temporary fixed>
      <v-list-item>
        <v-list-item-content>
          <v-img src="../assets/niagahoster-logo.png" width="100%" position="center" />
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list
        dense
        nav
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Beranda</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Domain</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Website</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Server</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Afiliasi</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Promo</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Pembayaran</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Kontak</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Blog</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </section>
</template>

<script>

export default {
  name: 'appbar',

  data: () => ({
    drawer: false
  }),
};
</script>
