<template>
  <div class="bank-information">
    <OutView title="Fill in personal information" :isBack="true" />
    <div class="out-wraper">
      <div class="form-title">Bank information</div>
      <Input placeholder="Enter your name" iconuser="icon-q01" :hasIcon="true" />
      <Input placeholder="Enter your mobile phone number" iconuser="icon-q02" :hasIcon="true" />
      <Input placeholder="Enter your bank account" iconuser="icon-q03" :hasIcon="true" />
      <Input placeholder="Enter your user name" iconuser="icon-q04" :hasIcon="true" />
      <Input placeholder="Enter password" iconuser="icon-q05" :hasIcon="true" />
      <Input placeholder="Reconfirm password" iconuser="icon-q06" :hasIcon="true" />
    </div>
    <Button btnText="save" theme="primary" class="tipBtn" @click="saveInformation" />
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';

export default {
  name: 'BankInformation',
  components: {
    OutView,
    Button,
    Input
  },
  methods: {
    saveInformation() {
      // this.$router.replace('/');
    }
  }
};
</script>
<style scoped lang="scss">
.out-wraper {
  padding: 50px 0 70px;
}
.form-title {
  padding-left: 28px;
}
</style>
