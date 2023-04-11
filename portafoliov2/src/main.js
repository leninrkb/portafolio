import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import magicMouse from 'magicmouse.js';
let options = {
    "cursorOuter": "circle-basic",
    "hoverEffect": "circle-move",
    "hoverItemMove": false,
    "defaultCursor": false,
    "outerWidth": 30,
    "outerHeight": 30
};
magicMouse(options);

AOS.init({
    delay: 100,
    duration: 800,
});
createApp(App).use(router).mount('#app')
