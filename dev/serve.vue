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
  <div id="app">
    <vue-modal-mb />
  </div>
</template>
