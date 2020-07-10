<template>
    <section>
        <v-container grid-list-md class="my-7">
      <v-row>
        <v-col cols="12" align="center">
          <v-card-text class="font-weight-black headline pb-0">
            Paket hosting Singapura yang tepat
          </v-card-text>
          <v-card-text class="font-weight-light headline pt-0">
            Diskon 40% + Domain dan SSL Gratis untuk anda
          </v-card-text>
        </v-col>
      </v-row>
            <v-row no-gutters>
        <v-col v-for="(item, i) in packs" :key="i" cols="12" sm="3">
          <div v-if="item.selected === false">
            <v-card flat tile align="center">
              <v-card-text class="headline font-weight-black py-1">
                {{ item.name }}
              </v-card-text>
              <v-card-text class="font-weight-light text-decoration-line-through py-1">
                Rp {{ item.prev_price }}
              </v-card-text>
              <v-card-text class="title font-weight-light">
                Rp <span class="headline font-weight-black">{{ item.price }}</span> /bln
              </v-card-text>
            </v-card>
            <v-card flat tile align="center">
              <v-card-text class="font-weight-light py-1">
                <span class="font-weight-bold">{{ item.user }}</span> User Terdaftar
              </v-card-text>
            </v-card>
            <v-card flat tile align="center" class="py-5">
              <v-card-text class="font-weight-bold">
                {{ item.power }} X RESOURCE POWER
              </v-card-text>
              <v-card-text v-for="j in item.features" class="pb-1 pt-0">
                {{ j }}
              </v-card-text>
              <v-btn rounded large outlined class="mt-5 font-weight-bold">
                <span class="font-weight-black">Pilih Sekarang</span>
              </v-btn>
            </v-card>
          </div>
          <div v-else class="specialflakes">
            <v-card flat tile dark color="primary" align="center">
              <v-card-text class="headline font-weight-black py-1">
                {{ item.name }}
              </v-card-text>
              <v-card-text class="font-weight-light text-decoration-line-through py-1">
                Rp {{ item.prev_price }}
              </v-card-text>
              <v-card-text class="title font-weight-light">
                Rp <span class="headline font-weight-black">{{ item.price }}</span> /bln
              </v-card-text>
            </v-card>
            <v-card flat tile dark align="center" color="light-blue darken-4">
              <v-card-text class="font-weight-light py-1">
                <span class="font-weight-bold">{{ item.user }}</span> User Terdaftar
              </v-card-text>
            </v-card>
            <v-card flat tile align="center" class="py-5">
              <v-card-text class="font-weight-bold">
                {{ item.power }} X RESOURCE POWER
              </v-card-text>
              <v-card-text v-for="j in item.features" class="pb-1 pt-0">
                {{ j }}
              </v-card-text>
              <v-btn rounded large outlined class="mt-5 font-weight-bold">
                <span class="font-weight-black">Pilih Sekarang</span>
              </v-btn>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <!-- PHP Digits -->
    <v-container grid-list-md class="my-7">
      <v-row>
        <v-col cols="12">
          <v-card-text class="display-1 pt-0" align="center">
            Powerful dengan Limit PHP yang Lebih Besar
          </v-card-text>
        </v-col>
      </v-row>
      <v-row no-gutters class="px-5">
        <v-col v-for="(item, i) in phplimit" :key="i" cols="12" sm="6">
          <v-card flat tile>
            <v-row no-gutters>
              <v-col cols="2">
                <v-icon color="success" left class="py-3">
                  check_circle
                </v-icon>
              </v-col>
              <v-col cols="10" class="py-3" align="center">
                {{ item }}
              </v-col>
            </v-row>
          </v-card>
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
      packs: [
        {
          name: 'Bayi',
          prev_price: 19900,
          price: 14900,
          user: 938,
          power: 0.5,
          features: [
            '500MB Disk Space',
            'Unlimited Bandwith',
            'Unlimited Databases',
            '1 Domain',
            'Instant Backup',
            'Unlimited SSL Gratis Selamanya'
          ],
          selected: false
        },
        {
          name: 'Pelajar',
          prev_price: 46900,
          price: 23450,
          user: 4168,
          power: 1,
          features: [
            'Unlimited Disk Space',
            'Unlimited Bandwith',
            'Unlimited POP3 Email',
            'Unlimited Databases',
            '10 Addon Domains',
            'Instant Backup',
            'Domain Gratis Selamanya',
            'Unlimited SSL Gratis Selamanya'
          ],
          selected: false
        },
        {
          name: 'Personal',
          prev_price: 58900,
          price: 38900,
          user: 10017,
          power: 2,
          features: [
            'Unlimited Disk Space',
            'Unlimited Bandwith',
            'Unlimited POP3 Email',
            'Unlimited Databases',
            'Unlimited Addon Domains',
            'Instant Backup',
            'Domain Gratis Selamanya',
            'Unlimited SSL Gratis Selamanya',
            'Private Name Server',
            'SpamAssassin Mail Protection'
          ],
          selected: true
        },
        {
          name: 'Business',
          prev_price: 109900,
          price: 65900,
          user: 3552,
          power: 3,
          features: [
            'Unlimited Disk Space',
            'Unlimited Bandwith',
            'Unlimited POP3 Email',
            'Unlimited Databases',
            'Unlimited Addon Domains',
            'Instant Backup',
            'Domain Gratis Selamanya',
            'Unlimited SSL Gratis Selamanya',
            'Private Name Server',
            'Prioritas Layanan Support',
            'SpamAssassin Mail Protection'
          ],
          selected: false
        }
      ],
      phplimit: [
        'Max Execution Time 300s',
        'Post Max Size 128MB',
        'Upload Max Filesize 128MB',
        'PHP Memory Limit 1024MB',
        'Max Input Vars 2500'
      ],
    }
  }
}
</script>