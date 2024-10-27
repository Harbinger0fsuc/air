import 'normalize.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'

// createApp(App).mount('#app')

const app = createApp(App)

app.use(VueScrollTo)

app.mount('#app')
