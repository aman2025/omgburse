<template>
  <transition name="alert-fade">
    <div class="toast">
      {{ message }}
    </div>
  </transition>
</template>
<script>
import { watchEffect } from 'vue';
export default {
  name: 'toast',
  props: {
    visible: Boolean,
    message: String
  },
  setup(props) {
    //监听是否显示
    watchEffect(() => {
      console.log(props.message);
    });
    //return
    return {};
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
