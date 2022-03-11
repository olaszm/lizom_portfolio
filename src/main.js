import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";

createApp({
  render: () => h(App)
}).use(router).use(i18n).mount("#app");
