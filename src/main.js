import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import VueScrollTo from 'vue-scrollto'

// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

import materialKit from "./material-kit";
// Import Highlight.js plugin dan tema
import HljsVuePlugin from '@highlightjs/vue-plugin';
import 'highlight.js/styles/stackoverflow-light.css'; // Tema StackOverflow Light
// import 'highlight.js/styles/github.css'; // Tema Highlight.js
import 'highlight.js/lib/common'; // Import semua bahasa umum


const app = createApp(App);

app.use(HljsVuePlugin);
app.use(createPinia());
app.use(router);
app.use(materialKit);
app.use(VueScrollTo);
app.mount("#app");
