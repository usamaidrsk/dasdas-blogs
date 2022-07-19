import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from "@/router"
import axios from 'axios'
import VueAxios from 'vue-axios'
import InfiniteLoading from 'vue-infinite-loading';

const app = createApp(App)
app.use(store)
app.use(store)
app.use(store)
app.use(router)
app.use(InfiniteLoading, {
    props: { spinner: 'waveDots' },
    system: { throttleLimit: 50 }
})
app.use(VueAxios, axios)
app.mount('#app')
