<template>
  <div class="order">
    <OutView title="Change Name" :isBack="true" />
    <div class="out-wraper">
      <Input placeholder="enter" iconuser="icon-q01" :hasIcon="true" />
    </div>
    <Button btnText="save" theme="primary" class="tipBtn" @click="saveName" />
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';

export default {
  name: 'ChangeName',
  components: {
    OutView,
    Button,
    Input
  },
  methods: {
    saveName() {
      // this.$router.replace('/');
    }
  }
};
</script>
<style scoped lang="scss">
.out-wraper {
  padding: 50px 0 70px;
}
</style>
