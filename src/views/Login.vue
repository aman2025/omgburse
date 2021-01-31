<template class="login">
  <div class="login">
    <div class="login-head">
      <img src="../assets/login-top.png" />
    </div>
    <div class="login-bd">
      <div>
        <Input :placeholder="lang.locale.enterYourPhone" objkey="username" v-model:formData="loginForm" maxLen="10" iconuser="icon-q02" :hasIcon="true" />
      </div>
      <div>
        <Input type="password" :placeholder="lang.locale.enterYourPassword" objkey="password" v-model:formData="loginForm" iconuser="icon-q05" :hasIcon="true" />
      </div>
      <!-- 下拉 -->
      <div class="sel-ipt-wrap">
        <i></i>
        <select name="" id="" class="sel-ipt" v-model="selLang">
          <option value="enUS">English</option>
          <option value="PT">Portugal</option>
          <option value="SP">Spain</option>
        </select>
        <span class="caret"></span>
        <div class="pholder">{{ thebank == '' || thebank == '0' ? 'Select your bank name' : '' }}</div>
      </div>
      <div class="login-remember">
        <label for="rm">
          <input type="checkbox" class="checkbox" id="rm" />
          {{ lang.locale.remeberPassword }}
        </label>
      </div>
      <div class="login-btn-wrap">
        <Button btnText="Login" theme="primary" class="tipBtn" @click="handleSubmit" />
      </div>
    </div>

    <div class="login-register">
      <span @click="goRegister">Register</span>
      <em>|</em>
      <span>Forget password</span>
    </div>

    <button @click="changeLanguage('PT')">切换PT</button>
    <button @click="changeLanguage('enUS')">切换enUS</button>
    <Toast v-show="visible" :message="message" />
    <!-- <img src="../assets/app.png" class="app" alt="" @click="appDownload" /> -->
  </div>
</template>
<script>
import request from '../utils/request';
import { toRefs, reactive, inject } from 'vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import Toast from '@/components/Toast.vue';

export default {
  name: 'Login',
  components: { Input, Button, Toast },
  inject: ['lang', 'changeLanguage'],
  setup() {
    var curLangKey = localStorage.getItem('language_key');
    const state = reactive({
      loginForm: { username: '', password: '' },
      visible: false,
      message: '',
      selLang: curLangKey
    });
    // app download url
    const appUrl = inject('appUrl');
    const appDownload = () => {
      window.location.href = appUrl.value;
    };

    // return
    return {
      ...toRefs(state),
      appDownload
    };
  },
  methods: {
    handleSubmit() {
      this.loginValidate();
      const loginForm = this.loginForm;
      const login = user => request.post('/Api/User/login', user);
      login(loginForm)
        .then(res => {
          localStorage.setItem('token', JSON.stringify(res.token));
          if (res.status == 1) {
            // 登录成功
            this.$router.push('/');
          } else {
            this.showToast(res.msg);
          }
        })
        .catch(() => {
          alert('login fail!');
        });
    },
    loginValidate() {
      var errors = {
        username: 'your phone cannot be empty',
        password: 'password cannot be empty'
      };
      var errorsLog = [];
      var vals = Object.keys(errors).map(key => {
        const val = this.loginForm[key];
        if (!val) {
          errorsLog.push(errors[key]);
        }
        return val;
      });
      if (vals.filter(v => v).length === 2) {
        var numReg = /^[0-9]*$/;
        if (!numReg.test(vals[0]) || vals[0].length != 10) {
          this.showToast('your phone number is error!');
          return null;
        }
        return vals;
      } else {
        this.showToast(errorsLog[0]);
      }

      return null;
    },
    goRegister() {
      this.$router.push('/Register');
    },
    closeToast() {
      var timeout = null;
      timeout && clearTimeout(timeout);
      timeout = setTimeout(() => {
        this.visible = false;
      }, 1500);
    },
    showToast(msg) {
      if (this.visible) {
        return;
      }
      this.visible = true;
      this.message = msg;
      this.closeToast();
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
  top: 138vw;
  right: 0;
  color: #fb6500;
  font-weight: 700;
}
.login-register em {
  margin: 0 10px;
}
.sel-ipt-wrap > i {
  background-image: url(../assets/icon-q04.png);
}
</style>
