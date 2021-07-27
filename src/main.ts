import { createApp } from 'vue'
import App from './App.vue'
import './css/style.css'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

const app = createApp(App);
app.use(BootstrapIconsPlugin);
app.mount('#app');
