<template>
  <v-app>
    <appbar />
    <v-main>
      <mainheader />
      <keytools />
      <packs />
      <inclusion />
      <laravels />
      <moduls />
      <misc />
      <social />
    </v-main>
    <appfooter />
  </v-app>
</template>

<script>
import mainheader from '#Components/shared/mainheader';
import appbar from '#Components/shared/appbar';
import keytools from '#Components/shared/keytools';
import packs from '#Components/shared/packs';
import inclusion from '#Components/shared/inclusion';
import laravels from '#Components/shared/laravels';
import moduls from '#Components/shared/moduls';
import misc from '#Components/shared/misc';
import social from '#Components/shared/social';
import appfooter from '#Components/shared/appfooter';
export default {
  name: 'App',

  components: {
    mainheader,
    appbar,
    keytools,
    packs,
    inclusion,
    laravels,
    moduls,
    misc,
    social,
    appfooter
  },

  data: () => ({
    
  }),
};
</script>
