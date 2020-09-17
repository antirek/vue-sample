import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueResource from "vue-resource";

Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.prototype.$appUrl = "http://localhost:3102/";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
