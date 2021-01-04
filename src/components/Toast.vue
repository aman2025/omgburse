<template>
  <transition name="alert-fade">
    <div class="toast">{{ message }}</div>
  </transition>
</template>
<script>
import { ref, watch } from 'vue';
export default {
  name: 'toast',
  props: {
    toastProps: Object,
    message: String
  },
  setup(props) {
    console.log(props.message);
    const msg = ref(props.message);
    // const newProps = ref(props.toastProps);
    // if (newProps.value.visible == true) {
    //   closeToast();
    // }
    //close toast
    // const closeToast = () => {
    //   var timeout = null;
    //   timeout && clearTimeout(timeout);
    //   timeout = setTimeout(() => {
    //     this.visible = false;
    //   }, 1500);
    // };
    watch([msg], (newValue, oldValue) => {
      // 函数包含更新前，更新后的值
      console.log(newValue);
      console.log(oldValue);
    });
    return {
      msg
      // ...newProps
    };
  }
};
</script>
<style lang="scss" scoped>
.alert-fade-enter-active,
.alert-fade-leave-active {
  transition: opacity 0.3s;
}
.alert-fade-enter,
.alert-fade-leave-to {
  opacity: 0;
}
.toast {
  position: fixed;
  min-width: 100px;
  padding: 12px 10px;
  line-height: 15px;
  border-radius: 8px;
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0.6);
  text-align: center;
  color: #fff;
  font-size: 15px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 99999;
}
</style>
