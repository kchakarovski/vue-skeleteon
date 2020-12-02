import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//v-tooltip directive
import { VTooltip } from 'v-tooltip';
Vue.directive('tooltip', VTooltip);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
