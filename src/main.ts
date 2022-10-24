import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/stylesheets/reset.scss'
import '@svgstore';
import './permission'
const app = createApp(App)
app.use(router)
app.mount('#app')
