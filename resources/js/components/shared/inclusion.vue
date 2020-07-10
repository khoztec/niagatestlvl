<template>
    <v-container grid-list-md class="my-7">
      <v-row>
        <v-col cols="12">
          <v-card-text class="display-1 pt-0" align="center">
            Semua Paket Hosting sudah termasuk
          </v-card-text>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="(item, i) in inclusions" :key="i" cols="12" sm="4" align="center">
          <v-card flat tile>
            <v-img width="25%" :src="item.file" position="center" />
            <v-card-text class="title font-weight-bold pb-0">
              {{ item.title }}
            </v-card-text>
            <v-card-text class="pt-0">
              {{ item.text }}
            </v-card-text>
          </v-card>
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
      inclusions: [
        { title: 'PHP Semua Versi', text: 'Pilih mulai dari PHP versi 5.3 s/d versi 7. Ubah sesuka anda!', file: '../assets/svg/icon PHP Hosting_PHP Semua Versi.svg' },
        { title: 'MySQL 5.6', text: 'Nikmati MySQL versi terbaru, tercepat, dan kaya akan fitur', file: '../assets/svg/icon PHP Hosting_My SQL.svg' },
        { title: 'Panel Hosting cPanel', text: 'Kelola website dengan panel canggih yang familiar di hati anda', file: '../assets/svg/icon PHP Hosting_CPanel.svg' },
        { title: 'Garansi Uptime 99.9%', text: 'Data center yang mendukung kelangsungan website anda 24/7', file: '../assets/svg/icon PHP Hosting_garansi uptime.svg' },
        { title: 'Database InnoDB Unlimited', text: 'Jumlah dan ukuran database yang tumbuh sesuai kebutuhan anda', file: '../assets/svg/icon PHP Hosting_InnoDB.svg' },
        { title: 'Wildcard Remote MySQL', text: 'Mendukung s/d 25 max_user_connections dan 100 max_connections', file: '../assets/svg/icon PHP Hosting_My SQL remote.svg' }
      ]
    }
  }
}
</script>
