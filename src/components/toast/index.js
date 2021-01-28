import { createApp } from 'vue';
import Toast from '@/components/toast/Toast.vue';
let $inst;
// 创建挂载实例
let createMount = opts => {
  const mountNode = document.createElement('div');
  document.body.appendChild(mountNode);
  const app = createApp(Toast, {
    ...opts,
    modelValue: true,
    remove() {
      app.unmount(mountNode);
      document.body.removeChild(mountNode);
    }
  });
  return app.mount(mountNode);
};
// 全局函数，会被添加到vue实例上
function createToast(options = {}) {
  // options.id = options.id || 'createToast_xxx';
  $inst = createMount(options);
  return $inst;
}
createToast.install = app => {
  // 全局注册组件，用标签函数引入
  app.component('Toast', Toast);
  // vue3全局挂载函数的方式一：app.config.globalProperties.$createToast
  app.config.globalProperties.$Toast = createToast;
  // 方式二： app.provide('createToast', createToast);
};
export default createToast;
