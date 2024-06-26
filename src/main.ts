/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import LandingPage from '@/LandingPage.vue'
import layoutsPlugin from '@/plugins/layouts'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import landingPageRouter from '@/router/LandingPage'
import '@core/scss/template/index.scss'
import '@styles/styles.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
loadFonts()

// Create vue app
const app = createApp(App)

// Use plugins
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.use(layoutsPlugin)
app.use(Toast)

// Mount vue app
app.mount('#app')

const landingPage = createApp(LandingPage)
landingPage.use(vuetify)
landingPage.use(landingPageRouter)
landingPage.use(Toast)

landingPage.mount("#landingPage")
