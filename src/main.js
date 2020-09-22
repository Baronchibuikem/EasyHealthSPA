import Vue from "vue";
import App from "./App.vue";
import {router} from "./router"
import store from "./store/store";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "@/assets/css/theme.scss";
import "bootstrap/scss/bootstrap.scss";
import "@/assets/css/app.scss";
import GlobalFunctions from "./GlobalFunctions";
Vue.prototype.$navigate = new GlobalFunctions();

Vue.config.productionTip = false;
Vue.use(VueMaterial);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");