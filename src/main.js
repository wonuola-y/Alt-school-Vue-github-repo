import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";


// import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(VueAwesomePaginate)

app.mount('#app')
