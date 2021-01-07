<template>
  <div v-show="visibleGlobal.isVisible" class="a-message">
    <span>message...</span>
    <p>{{ visibleGlobal.text }}</p>
  </div>
</template>
<script>
import { watchEffect } from 'vue';
export default {
  name: 'Message',
  components: {},
  props: {
    vib: Boolean
  },
  inject: ['visibleGlobal'],
  setup() {
    const closex = () => {
      console.log(12);
      setTimeout(() => {}, 1000);
    };
    //监听是否显示
    watchEffect(() => {});
    // return
    return { closex };
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
