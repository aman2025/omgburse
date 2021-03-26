<template class="login">
  <div class="login">
    <OutView :title="lang.locale.resetPassword" :isBack="true" />
    <div class="login-bd">
      <div>
        <Input type="password" :placeholder="lang.locale.enterYourOldPassword" objkey="oldpassword" v-model:formData="loginForm" iconuser="icon-q05" :hasIcon="true" />
      </div>
      <div>
        <Input type="password" :placeholder="lang.locale.enterYourPhone" objkey="password" v-model:formData="loginForm" iconuser="icon-q05" :hasIcon="true" />
      </div>
      <div>
        <Input type="password" :placeholder="lang.locale.repeatYourPassword" objkey="repassword" v-model:formData="loginForm" iconuser="icon-q06" :hasIcon="true" />
      </div>
      <div class="login-btn-wrap">
        <Button :btnText="lang.locale.save" theme="primary" class="tipBtn" @click="handleSubmit" />
      </div>
    </div>
    <Toast v-show="visible" :message="message" />
  </div>
</template>
<script>
import request from '../utils/request';
import { toRefs, reactive } from 'vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import Toast from '@/components/Toast.vue';
import OutView from '@/components/OutView.vue';

export default {
  name: 'ResetPassword',
  components: { Input, Button, Toast, OutView },
  inject: ['lang'],
  setup() {
    const state = reactive({
      loginForm: { oldpassword: '', password: '', repassword: '' },
      visible: false,
      message: ''
    });
    return {
      ...toRefs(state)
    };
  },
  methods: {
    handleSubmit() {
      this.closeToast();
      var vals = this.loginValidate();
      if (vals) {
        // 校验通过并获取值
        const tokenVal = JSON.parse(localStorage.token);
        const loginForm = Object.assign({}, this.loginForm, { token: tokenVal });
        const url = '/Api/Account/ResetPassword';
        const resetPassword = user => request.post(url, user);
        resetPassword(loginForm)
          .then(res => {
            // localStorage.setItem('token', JSON.stringify(res.data));
            if (res.status == 1) {
              this.$router.push('/');
            } else {
              this.showToast(res.msg);
            }
          })
          .catch(() => {
            alert('login fail!');
          });
      }
    },
    loginValidate() {
      var errors = {
        oldpassword: 'old password cannot be empty',
        password: 'password cannot be empty',
        repassword: 'repassword cannot be empty'
      };
      var errorsLog = [];
      var vals = Object.keys(errors).map(key => {
        const val = this.loginForm[key];
        if (!val) {
          errorsLog.push(errors[key]);
          console.log(errors[key]);
        }
        return val;
      });
      if (vals.filter(v => v).length !== 3) {
        this.showToast(errorsLog[0]);
        return null;
      }
      const [password, repassword] = ['password', 'repassword'].map(k => this.loginForm[k]);
      if (password !== repassword) {
        this.showToast('Passwords are inconsistent!');
        return null;
      }
      return vals;
    },
    closeToast() {
      var timeout = null;
      timeout && clearTimeout(timeout);
      timeout = setTimeout(() => {
        this.visible = false;
      }, 1500);
    },
    showToast(msg) {
      this.visible = true;
      this.message = msg;
    }
  }
};
</script>
<style scoped lang="scss">
.login {
  height: 100%;
  width: 100%;
  background-image: url(../assets/loginbg.png);
  background-size: 100%;
  background-position: left bottom;
  position: relative;
}
.login-bd {
  padding: 35px 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #f5f5f5;
  margin-top: -20px;
  position: relative;
}
.login-btn-wrap {
  padding-top: 20px;
}
.login-remember {
  padding: 15px 0 0 32px;
}
.checkbox {
  display: inline-block;
  vertical-align: middle;
  width: 19px;
  height: 19px;
  margin-right: 2px;
  background-image: url(../assets/check.png);
}

.checkbox:checked {
  background-image: url(../assets/check.png);
  background-position: 0 -19px;
}
.login-register {
  position: absolute;
  text-align: center;
  left: 0;
  top: 98vw;
  right: 0;
  color: #fb6500;
  font-weight: 700;
}
.login-register em {
  margin: 0 10px;
}
.phone-prev-warp {
  position: relative;
}
.phone-prev-warp .phone-prev {
  position: absolute;
  top: 20px;
  left: 68px;
}
.upid {
  padding: 5px 0 0 32px;
  font-weight: bold;
}
.upid span {
  font-weight: normal;
}
</style>
