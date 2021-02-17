<template>
  <teleport to="body">
    <div v-show="true" class="contact">
      <div v-show="!modelValue">
        <!-- <i class="icon-contact03"></i>
        <i class="icon-contact02"></i> -->
      </div>
      <div>
        <i @click="customerService" class="icon-contact01"></i>
      </div>
    </div>
  </teleport>
</template>
<script>
export default {
  name: 'Contact',
  components: {},
  props: {
    modelValue: Boolean
  },
  setup() {
    // return
    return {};
  },
  methods: {
    customerService() {
      this.$router.push('/customerService');
    }
  }
};
</script>
<style scoped lang="scss">
.contact {
  position: fixed;
  bottom: 100px;
  right: 16px;
  z-index: 9999;
}
.contact i {
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #fff;
  text-align: center;
  border: 2px solid #ffbe01;
  margin-top: 3px;
  background-size: 26px;
  background-position: center;
}
.contact i.icon-contact01 {
  background-image: url(../assets/icon-contact01.png);
}
.contact i.icon-contact02 {
  background-image: url(../assets/icon-contact02.png);
}
.contact i.icon-contact03 {
  background-image: url(../assets/icon-contact03.png);
}
</style>
