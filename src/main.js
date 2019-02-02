import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from 'jquery'; // imports jquery
window.$ = window.jQuery = jQuery; // initialize $ sign for jquery
import 'popper.js'; // imports popper.js
import 'bootstrap'; // imports js files of bootstrap
import './assets/app.scss'; // imports app.scss which imports css files of bootstrap

Vue.component('NavBar', require('./components/NavBar.vue').default);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
