<template>
  <teleport to="body">
    <div v-show="messageGlb.visible" class="a-message">
      <span>{{ messageGlb.msg }}</span>
    </div>
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
