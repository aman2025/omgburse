// provide全局函数toast
import { createApp } from 'vue';
import Toast from './Toast.vue';

let $inst;
// 创建挂载实例
let createMount = opts => {
  const mountNode = document.createElement('div');
  document.body.appendChild(mountNode);

  const app = createApp(Toast, {
    // 以下是传给Toast组件的props
    ...opts,
    modelValue: true,
    remove() {
      $inst = null;
      app.unmount(mountNode);
      document.body.removeChild(mountNode);
    }
  });
  return app.mount(mountNode);
};

// 全局创建加载组件方法
function ShowToast(options = {}) {
  options.id = options.id || 'toast_id_';
  options.msg = options.msg || 'a toast message...';

  if ($inst) {
    console.log('instance is exist');
    // 读取动态创建实例的属性, 只读属性，不能修改，改成ref响应数据也不能
    console.log($inst.$props.modelValue);
    return;
  }
  $inst = createMount(options);

  return $inst;
}

export default {
  install(app) {
    app.provide('showToast', ShowToast);
  }
};
