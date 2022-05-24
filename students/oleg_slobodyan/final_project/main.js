import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/scss/bootstrap.scss";
import './assets/css/swiper-bundle.min.css'
import './assets/css/style.css'

createApp(App).use(store).use(router).mount("#app");
