import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { VueMasonryPlugin } from "vue-masonry";
import Vue3TouchEvents from "vue3-touch-events";

createApp(App)
  .use(router)
  .use(VueMasonryPlugin)
  .use(Vue3TouchEvents)
  .mount("#app");
