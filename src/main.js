import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from "@/router"
import axios from 'axios'
import VueAxios from 'vue-axios'
import Flutterwave from 'flutterwave-vue3'

const app = createApp(App)
app.use(store)
app.use(store)
app.use(store)
app.use(router)
app.use(VueAxios, axios)
app.use(Flutterwave)
app.mount('#app')
