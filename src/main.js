import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Toast from './components/toast/index.js';
import globalState from './store/globalState.js';
import './assets/scss/common.scss';
var app = createApp(App);

app
  .use(globalState)
  .use(store)
  .use(router)
  .use(Toast)
  .mount('#app');
