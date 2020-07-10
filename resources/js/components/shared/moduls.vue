<template>
    <v-container grid-list-md class="my-7">
      <v-row>
        <v-col cols="12">
          <v-card-text class="display-1 pt-0" align="center">
            Modul Lengkap untuk menjalankan Aplikasi PHP anda
          </v-card-text>
        </v-col>
      </v-row>
      <v-row no-gutters class="px-10">
        <v-col cols="6" sm="3" v-for="item in moduls">
          <v-card-text class="ma-0 pa-0">
            {{ item }}
          </v-card-text>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" align="center">
          <v-card-text>
            <v-btn large outlined rounded>
              <span class="font-weight-black">Selengkapnya</span>
            </v-btn>
          </v-card-text>
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
      moduls: [
        'IcePHP', 'apc', 'apcu', 'apm', 'ares', 'bcmath', 'bcompiler', 'big_int', 'bigset', 'bloomy', 'bz2_filter',
        'clam_av', 'coin_acceptor', 'crack', 'dba', 'http', 'huffman', 'idn', 'igbinary', 'imagick', 'imap', 'inclued',
        'inotify', 'interbase', 'intl', 'ioncube_loader', 'ioncube_loader_4', 'jsmin', 'json', 'ldap', 'nd_pdo_auth', 'oauth',
        'oci8', 'odbc', 'opcache', 'pdf', 'pdo', 'pdo_db', 'pdo_dblib', 'pdo_firebird', 'pdo_odbc', 'pdo_pgsql', 'pdo_sqlite',
        'pdsql', 'phalcon', 'stats', 'stem', 'stomp', 'suhosin', 'sybase_ct', 'sysvmsg', 'sysvsem', 'sysvshm', 'tidy',
        'timezonedb', 'trader', 'translit', 'uploadprogress', 'uritemplate', 'uuid'
      ],
    }
  }
}
</script>
