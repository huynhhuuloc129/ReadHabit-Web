import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import VueCalendarHeatmap from 'vue3-calendar-heatmap'

library.add(fas, far, fab)
dom.watch();

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

createApp(App).component("font-awesome-icon", FontAwesomeIcon)
    .use(createPinia())
    .use(router)
    .use(VueCalendarHeatmap)
    .mount('#app')
