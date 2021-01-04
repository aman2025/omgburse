<template>
  <transition name="alert-fade" ref="elRef" v-show="opened">
    <div class="toast">{{ message }}</div>
  </transition>
</template>
<script>
import { ref, reactive, toRefs, watch } from 'vue';
let $index = 0,
  $timer = {};
export default {
  name: 'toast',
  props: {
    modelValue: { type: Boolean, default: false },
    message: String,
    time: { type: [Number, String], default: 0 }
  },
  emits: ['update:modelValue'],
  setup(props, context) {
    const elRef = ref(null);

    const data = reactive({
      opened: false
    });

    const open = () => {
      console.log('open...');

      if (data.opened) return;
      data.opened = true;

      // 倒计时
      if (props.time) {
        $index++;
        // 避免重复操作
        if ($timer[$index] !== null) clearTimeout($timer[$index]);
        $timer[$index] = setTimeout(() => {
          close();
        }, parseInt(props.time) * 1000);
      }
    };
    // 关闭弹层
    const close = () => {
      if (!data.opened) return;
      setTimeout(() => {
        context.emit('update:modelValue', false);
      }, 200);
    };

    // 监听弹层v-model
    watch(
      () => props.modelValue,
      val => {
        if (val) {
          open();
        } else {
          close();
        }
      }
    );

    return {
      ...toRefs(data),
      elRef,
      close
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
