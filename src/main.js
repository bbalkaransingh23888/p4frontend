import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);

Vue.prototype.$URL='https://p4backend23888.herokuapp.com'

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
