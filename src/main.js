import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Toast from './components/toast/index.js';
import globalState from './store/globalState.js';
import './assets/scss/common.scss';
var app = createApp(App);

// 小数点转百分比
app.config.globalProperties.$filters = {
  toPercent(value) {
    let realVal = Number(value * 100).toFixed(1);
    return Number(realVal) + '%';
  }
};
app
  .use(store)
  .use(router)
  .use(Toast)
  .use(globalState)
  .mount('#app');
