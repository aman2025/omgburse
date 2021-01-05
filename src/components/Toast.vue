<template>
  <transition name="alert-fade">
    <div class="toast">
      {{ message }}
    </div>
  </transition>
</template>
<script>
import { reactive, toRefs, watchEffect } from 'vue';
export default {
  name: 'toast',
  props: {
    message: String
  },
  setup() {
    const state = reactive({
      msg: '33'
    });

    // aa.value = props.message;
    //监听
    watchEffect(() => {
      console.log(state.msg);
    });
    const change = () => {
      console.log(3);
      console.log(state.msg);
    };
    //return
    return {
      ...toRefs(state),
      change
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
