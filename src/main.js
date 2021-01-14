import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import jquery from "jquery";
import { fb } from "./firebase";

window.$ = window.jquery = jquery;

import router from "./router";
import "popper.js";
import "./assets/app.scss";

Vue.config.productionTip = false;
Vue.component('sectionTitle', require("./components/sectionTitle").default);
Vue.component("Navbar", require("./components/navbar.vue").default);
Vue.component("hero", require("./components/hero.vue").default);
Vue.component("productsRow", require("./components/productsRow.vue").default);
Vue.component("productCard", require("./components/productCard.vue").default);
Vue.component("Footer", require("./components/footer.vue").default);

let app = "";

fb.auth().onAuthStateChanged(function() {
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
