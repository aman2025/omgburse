<template>
  <teleport to="body">
    <transition name="alert-fade">
      <div v-show="messageGlb.visible" class="a-message">
        <span>{{ messageGlb.msg }}</span>
      </div>
    </transition>
  </teleport>
</template>
<script>
export default {
  name: 'Message',
  components: {},
  props: {},
  inject: ['messageGlb'],
  setup() {
    // return
    return {};
  },
  methods: {}
};
</script>
<style scoped lang="scss">
.alert-fade-enter-active,
.alert-fade-leave-active {
  transition: opacity 0.3s;
}
.alert-fade-enter,
.alert-fade-leave-to {
  opacity: 0;
}
.a-message {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;
  width: 100px;
  height: 50px;
  border: 1 solid #fff;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  text-align: center;
  border-radius: 5px;
}
</style>
