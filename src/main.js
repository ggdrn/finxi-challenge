import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import SuiVue from 'semantic-ui-vue';
import router from "./router";
import PortalVue from 'portal-vue';
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false
Vue.use(SuiVue, PortalVue);
Vue.use(VueCookies)

// set default config
Vue.$cookies.config('7d')

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
