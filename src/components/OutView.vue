<template>
  <div class="outView">
    <div class="title title-fixed">
      <div v-if="isBack" class="titleReturn" @click="goBack"><span>&lt;</span></div>
      <div class="titleText">{{ title }}</div>
    </div>
    <div data-v-0b256b28="" style="width: 100%; height: 42px;"></div>
  </div>
</template>

<script>
export default {
  name: 'OutView',
  props: {
    title: String,
    isBack: Boolean
  },
  methods: {
    goBack() {
      this.$router.back(-1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.outView .title {
  background: #ff764a;
  width: 100%;
  line-height: 34px;
  color: #fff;
}
.outView .title-fixed {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  padding-top: env(safe-area-inset-top);
  margin-bottom: 128px;
}
.outView .title .titleText {
  width: 100%;
  padding-top: 4px;
  font-size: 19px;
  line-height: 38px;
  text-align: center;
  margin: auto;
}
.outView .title .titleReturn {
  position: absolute;
  text-align: left;
  vertical-align: middle;
  padding-top: 5px;
  padding-left: 5%;
  font-size: 25px;
}
</style>
