import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
// importing AOS css style globally
import 'aos/dist/aos.css'
import './styles.css'
// import VuePdfReader from 'vue-pdf-reader';




loadFonts()
createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  // .use(VuePdfReader)
  .mount('#app')
