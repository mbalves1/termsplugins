import Vue from 'vue';
import Dev from './serve.vue';
import vuetify from './plugins/vuetify';
import VueModalMb from '@/entry.esm';
Vue.use(
  VueModalMb,
  vuetify
)

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(Dev),
}).$mount('#app');
