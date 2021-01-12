const { reactive } = require('vue');

// 全局toast方法
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
