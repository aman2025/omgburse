<template>
  <div class="bank-information">
    <OutView title="Fill in personal information" :isBack="true" />
    <div class="out-wraper">
      <div class="form-title">Bank information</div>
      <Input placeholder="Enter your name" iconuser="icon-q01" :hasIcon="true" objkey="uname" v-model:formData="accoutForm" />
      <Input placeholder="Enter your mobile phone number" iconuser="icon-q02" :hasIcon="true" objkey="uphone" v-model:formData="accoutForm" />
      <Input placeholder="Enter your bank account" iconuser="icon-q03" :hasIcon="true" objkey="yhcode" v-model:formData="accoutForm" />
      <Input placeholder="Enter your bank name" iconuser="icon-q04" :hasIcon="true" objkey="bankname" v-model:formData="accoutForm" />
      <Input type="password" placeholder="Enter password" iconuser="icon-q05" :hasIcon="true" objkey="password" v-model:formData="accoutForm" />
      <Input type="password" placeholder="Enter repassword" iconuser="icon-q06" :hasIcon="true" objkey="repassword" v-model:formData="accoutForm" />
    </div>
    <Button btnText="save" theme="primary" class="tipBtn" @click="saveAccount" />
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import { reactive, toRefs } from 'vue';
import request from '../utils/request';

export default {
  name: 'BankInformation',
  components: {
    OutView,
    Button,
    Input
  },
  inject: ['showToast'],
  setup() {
    const state = reactive({
      accoutForm: { uname: '', uphone: '', yhcode: '', bankname: '', password: '', repassword: '' },
      visible: false,
      message: ''
    });
    return {
      ...toRefs(state)
    };
  },

  methods: {
    saveAccount() {
      var vals = this.accoutValidate();
      if (vals) {
        // 校验通过并获取值
        const tokenVal = JSON.parse(localStorage.token);
        const accoutForm = Object.assign({}, this.accoutForm, { token: tokenVal });
        const url = '/Api/Account/Addinfo';
        const addinfo = user => request.post(url, user);
        addinfo(accoutForm)
          .then(res => {
            if (res.status == 1) {
              this.$router.back(-1);
            } else {
              this.showToast({ msg: 'add info is error!' });
            }
          })
          .catch(() => {
            alert('login fail!');
          });
      }
    },
    // 表单校验
    accoutValidate() {
      var errors = {
        uname: 'uname cannot be empty',
        uphone: 'uphone cannot be empty',
        yhcode: 'yhcode cannot be empty',
        bankname: 'bankname cannot be empty',
        password: 'password cannot be empty',
        repassword: 'repassword cannot be empty'
      };
      var errorsLog = [];
      var vals = Object.keys(errors).map(key => {
        const val = this.accoutForm[key];
        if (!val) {
          errorsLog.push(errors[key]);
        }
        return val;
      });
      if (vals.filter(v => v).length !== 6) {
        this.showToast({ msg: errorsLog[0] });
        return null;
      }
      const [password, repassword] = ['password', 'repassword'].map(k => this.accoutForm[k]);
      if (password !== repassword) {
        this.showToast({ msg: 'Passwords are inconsistent!' });
        return null;
      }
      return vals;
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
