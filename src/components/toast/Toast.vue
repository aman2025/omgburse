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
  emits: ['update:modelValue'], // 用于标签方式更新modelValue,不建议
  setup(props, context) {
    console.log(context);
    console.log(props.modelValue);
    // close
    let timeout = null;
    const close = () => {
      timeout && clearTimeout(timeout);
      timeout = setTimeout(() => {
        console.log('close...');
        // update:modelValue 在用动态全局创建组件时是无效的，因为 Toast的props属性是只读的；
        context.emit('update:modelValue', false); // 用标签方式<Toast />引入是有效的，不建议用标签方式，因为instance读取不到，两个会混肴
        props.remove && props.remove();
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
