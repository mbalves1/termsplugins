<script>
import Vue from 'vue';
import VueModalMb from '@/vue-modal-mb.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueModalMb
  }
});
</script>

<template>
  <v-app id="app">
    <v-main>
      <vue-modal-mb datamodel dialog/>
    </v-main>
  </v-app>
</template>
