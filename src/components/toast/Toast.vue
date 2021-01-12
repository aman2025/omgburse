<template>
  <teleport to="body">
    <transition name="alert-fade">
      <div v-show="toastGlb.visible" class="toast">
        {{ toastGlb.msg }}
      </div>
    </transition>
  </teleport>
</template>
<script>
export default {
  name: 'toast',
  props: {},
  inject: ['toastGlb'],
  setup() {
    // return
    return {};
  }
};
</script>
<style lang="scss" scoped></style>
