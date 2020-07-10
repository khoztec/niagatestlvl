<template>
    <section>
            <v-card flat tile color="grey lighten-4">
      <v-container grid-list-md>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="6">
            <v-card-text class="font-weight-bold">
              Bagikan jika anda menyukai halaman ini
            </v-card-text>
          </v-col>
          <v-col cols="4" sm="2" class="d-flex flex-row" align="center" justify="center">
            <v-btn tile dark color="blue darken-4">
              <v-icon center>
                mdi-facebook
              </v-icon>
            </v-btn>
            <v-text-field dense solo disabled value="90" hide-details />
          </v-col>
          <v-col cols="4" sm="2" class="d-flex flex-row" align="center" justify="center">
            <v-btn tile dark color="blue">
              <v-icon center>
                mdi-twitter
              </v-icon>
            </v-btn>
            <v-text-field dense solo disabled value="90" hide-details />
          </v-col>
          <v-col cols="4" sm="2" class="d-flex flex-row" align="center" justify="center">
            <v-btn tile dark color="orange darken-1">
              <v-icon center>
                mdi-google-plus
              </v-icon>
            </v-btn>
            <v-text-field dense solo disabled value="90" hide-details />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card flat tile dark color="primary">
      <v-container grid-list-md>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="9">
            <v-card-text class="headline font-weight-light">
              Perlu <span class="font-weight-black">Bantuan</span> ?
              Hubungi kami: <span class="font-weight-black">0274-5305535</span>
            </v-card-text>
          </v-col>
          <v-col cols="6" sm="3">
            <v-btn block dark large rounded outlined>
              <v-icon left>
                forum
              </v-icon>
              Live Chat
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    </section>
</template>