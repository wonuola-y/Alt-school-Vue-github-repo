import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
// Import our custom CSS

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'
// import 'bootstrap/dist/js/bootstrap.js';

import 'bootstrap';
// import './assets/main.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
