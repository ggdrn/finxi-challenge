import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import SuiVue from 'semantic-ui-vue';
import router from "./router";
import PortalVue from 'portal-vue';

Vue.config.productionTip = false
Vue.use(SuiVue);
Vue.use(PortalVue);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
