/**
 * 方法二：全局toast方法属性
 * app.vue中全局引入
 *   import Toast from '@/components/toast/Toast.vue';
 *   import { useToast } from '@/components/toast/index.js';
 * 全局provide
 *   const { toastGlb, showToast2 } = useToast();
 *   provide('toastGlb', toastGlb);
 *   provide('showToast2', showToast2);
 * 子组件inject
 */
const { reactive } = require('vue');
export function useToast() {
  let timeout = null;
  const toastGlb = reactive({
    msg: '',
    visible: false
  });
  const showToast2 = (val, cb) => {
    if (toastGlb.visible) {
      return;
    }
    toastGlb.visible = true;
    toastGlb.msg = val;
    _closeToast();
    cb && cb();
  };
  const _closeToast = () => {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      toastGlb.visible = false;
    }, 1000);
  };
  return {
    toastGlb,
    showToast2
  };
}
