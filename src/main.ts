import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import 'virtual:svg-icons-register'
createApp(App).use(router).mount("#app");
