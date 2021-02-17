<template>
  <teleport to="body">
    <div v-show="true" class="contact">
      <div v-show="!modelValue">
        <i class="icon-customer"></i>
        <i class="icon-customer"></i>
      </div>
      <div>
        <i class="icon-customer"></i>
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
  methods: {}
};
</script>
<style scoped lang="scss">
.contact {
  position: fixed;
  bottom: 100px;
  right: 10px;
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
}
.contact i.icon-customer {
  background-image: url(../assets/icon_introduction.png);
  background-size: 22px;
  background-position: center;
}
</style>
