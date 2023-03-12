import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    delay: 90,
    duration: 900,
});
createApp(App).use(router).mount('#app')
