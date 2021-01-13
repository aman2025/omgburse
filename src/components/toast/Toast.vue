<template>
  <transition name="alert-fade">
    <div v-show="modelValue" :id="id" class="toast">
      {{ msg }}
    </div>
  </transition>
</template>
<script>
import { watchEffect } from 'vue';
export default {
  name: 'toast',
  props: {
    modelValue: Boolean,
    id: String,
    msg: String,
    remove: Function
  },
  // emits: ['update:modeValue'],
  setup(props, context) {
    console.log(context);
    console.log(props.modelValue);
    // close
    let timeout = null;
    const close = () => {
      timeout && clearTimeout(timeout);
      timeout = setTimeout(() => {
        // context.emit('update:modeValue', false);
        props.remove();
      }, 1230);
    };
    // 监听显示属性
    watchEffect(() => {
      if (props.modelValue) {
        close();
      }
    });

    return {};
  }
};
</script>
<style lang="scss" scoped>
// toast
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
  border-radius: 6px;
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
