import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

// Pinia

import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App).use(store).use(router).use(pinia).use(vuetify).mount('#app')
