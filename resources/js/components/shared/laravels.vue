<template>
    <v-container grid-list-md class="my-7">
      <v-row>
        <v-col cols="12">
          <v-card-text class="display-1 pt-0" align="center">
            Mendukung penuh Framework Laravel
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card-text class="font-weight-light title">
            Tak perlu menggunakan dedicated server atau VPS yang mahal. Layanan PHP hosting murah kami mendukung penuh framework favorit anda.
          </v-card-text>
          <v-card-text>
            <ul class="no-bullets pa-0">
              <li class="subheadline">
                <v-icon color="success" left small>
                  check_circle
                </v-icon>
                Install Laravel 1 klik dengan Softtaculous Installer
              </li>
              <li class="subheadline">
                <v-icon color="success" left small>
                  check_circle
                </v-icon>
                Mendukung ekstensi PHP Mcrypt, phar, json, dan fileinfo
              </li>
              <li class="subheadline">
                <v-icon color="success" left small>
                  check_circle
                </v-icon>
                Tersedia Composer dan SSH untuk menginstal packages pilihan anda
              </li>
            </ul>
          </v-card-text>
          <v-card-text class="caption">
            Nb. Composer dan SSH hanya tersedia untuk paket Personal dan Bisnis
          </v-card-text>
          <v-card-text>
            <v-btn large color="primary" rounded>
              <span class="font-weight-black">Pilih Hoting Anda</span>
            </v-btn>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="6">
          <v-img src="../assets/svg/illustration banner support laravel hosting.svg" width="100%" position="center" />
        </v-col>
      </v-row>
    </v-container>
</template>


<script>

export default {
  components: {

  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.no-bullets {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
}
</style>