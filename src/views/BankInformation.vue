<template>
  <div class="bank-information">
    <OutView title="Fill in personal information" :isBack="true" />
    <div class="out-wraper">
      <div class="form-title">Bank information</div>
      <Input placeholder="Enter your name" iconuser="icon-q01" :hasIcon="true" objkey="uname" v-model:formData="accoutForm" />
      <Input placeholder="Enter your mobile phone number" iconuser="icon-q02" :hasIcon="true" />
      <Input placeholder="Enter your bank account" iconuser="icon-q03" :hasIcon="true" />
      <Input placeholder="Enter your user name" iconuser="icon-q04" :hasIcon="true" />
      <Input placeholder="Enter password" iconuser="icon-q05" :hasIcon="true" />
      <Input placeholder="Reconfirm password" iconuser="icon-q06" :hasIcon="true" />
    </div>
    <Button btnText="save" theme="primary" class="tipBtn" @click="saveAccount" />
    <Toast :toastProps="toastProps" v-show="toastProps.visible" :message="toastProps.message" />
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import { reactive, toRefs } from 'vue';

export default {
  name: 'BankInformation',
  components: {
    OutView,
    Button,
    Input
  },
  setup() {
    const state = reactive({
      accoutForm: { uname: '' },
      toastProps: { visible: false, message: '' }
    });
    return {
      ...toRefs(state)
    };
  },

  methods: {
    saveAccount() {
      this.loginValidate();
      console.log(this.accoutForm);
      // this.$router.replace('/');
    },
    loginValidate() {
      var errors = {
        uname: 'uname cannot be empty'
      };
      var errorsLog = [];
      var vals = Object.keys(errors).map(key => {
        const val = this.accoutForm[key];
        if (!val) {
          errorsLog.push(errors[key]);
        }
        return val;
      });
      if (vals.filter(v => v).length === 6) {
        return vals;
      } else {
        this.showToast(errorsLog[0]);
      }
      return null;
    },
    showToast(msg) {
      this.toastProps.visible = true;
      this.toastProps.message = msg;
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
