import { createApp } from 'vue'
import 'virtual:svg-icons-register'
import router from './router/index'
import App from './App.vue'

createApp(App).use(router).mount('#app')
