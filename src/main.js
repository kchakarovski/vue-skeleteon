import Vue from "vue";
import VTooltip from "v-tooltip";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(VTooltip);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
