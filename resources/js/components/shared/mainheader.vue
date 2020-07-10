<template>
    <section>
    <!-- Header -->
    <v-container grid-list-md class="my-7">
      <v-row>
        <v-col cols="12" sm="7">
          <v-card-text class="font-weight-black display-1 pb-0">
            PHP Hosting
          </v-card-text>
          <v-card-text class="font-weight-light display-1 pt-0">
            Cepat, handal, penuh dengan modul PHP yang anda butuhkan
          </v-card-text>
          <v-card-text class="px-0">
            <ul class="no-bullets">
              <li v-for="item in items" class="title font-weight-light">
                <v-icon color="success" left>
                  check_circle
                </v-icon>
                {{ item }}
              </li>
            </ul>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="5">
          <v-img src="../assets/svg/illustration banner PHP hosting-01.svg" width="100%" position="center" />
        </v-col>
      </v-row>
    </v-container>
    </section>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      items: [
        'Solusi PHP untuk performa Query yang lebih cepat',
        'Konsumsi memori yang lebih rendah',
        'Support PHP 5.3, 5.4, 5.5, 6, dan 7',
        'Fitur enkripsi IonCube dan Zen Guard Loaders'
      ]
    }
  }
}
</script>

<style>
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
.php-keytools {
  max-height: 50vw;
}
</style>
