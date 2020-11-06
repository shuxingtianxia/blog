import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "@/assets/css/base.css"
import "@/assets/css/index.css"
import "@/assets/css/m.css"

createApp(App).use(store).use(router).mount('#app')
