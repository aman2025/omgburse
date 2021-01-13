import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import globalState from './store/globalState.js';
import Toast from './components/toast/index';
import './assets/scss/common.scss';
var app = createApp(App);

app
  .use(globalState)
  .use(Toast)
  .use(store)
  .use(router)
  .mount('#app');
