import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import VueCalendarHeatmap from 'vue3-calendar-heatmap'
// @ts-ignore 
import VueApexCharts from "vue3-apexcharts";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
// @ts-ignore 

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import App from './App.vue'
import router from './router'

library.add(fas, far, fab)
dom.watch();

const options = {
    // You can set your default options here
};

createApp(App).component("font-awesome-icon", FontAwesomeIcon).component('QuillEditor', QuillEditor)
.use(
    Vue3Toasity,
    {
      autoClose: 3000,
      // ...
    } as ToastContainerOptions,
  )
    .use(Toast, options)
    .use(VueApexCharts)
    .use(createPinia())
    .use(router)
    .use(VueCalendarHeatmap)
    .mount('#app')
