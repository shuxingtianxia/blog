import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import "@/styles/base.scss"
// import "@/styles/index.scss"
// import "@/styles/m.scss"
createApp(App).use(store).use(router).mount('#app')
