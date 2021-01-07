<template class="login">
  <div class="login">
    <div class="login-head">
      <img src="../assets/login-top.png" />
    </div>
    <div class="login-bd">
      <div>
        <Input placeholder="Enter your username" objkey="username" v-model:formData="loginForm" iconuser="icon-q02" :hasIcon="true" />
      </div>
      <div>
        <Input type="password" placeholder="Enter your password" objkey="password" v-model:formData="loginForm" iconuser="icon-q05" :hasIcon="true" />
      </div>
      <div>
        <Input type="password" placeholder="Repeat your password" objkey="repassword" v-model:formData="loginForm" iconuser="icon-q06" :hasIcon="true" />
      </div>
      <!-- <div>
        <Input placeholder="Enter upid" objkey="upid" v-model:formData="loginForm" iconuser="icon-q03" :hasIcon="true" />
      </div> -->
      <div class="login-btn-wrap">
        <Button btnText="Register" theme="primary" class="tipBtn" @click="handleSubmit" />
      </div>
      <div class="login-register">
        <span @click="goLogin">Login</span>
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
import { useRoute } from 'vue-router';

export default {
  name: 'Register',
  components: { Input, Button, Toast },
  setup() {
    // const { ctx } = getCurrentInstance();
    const router = useRoute();
    const params = router.query;
    const state = reactive({
      loginForm: { username: '', password: '', repassword: '' },
      visible: false,
      message: ''
    });
    return {
      ...toRefs(state),
      params
    };
  },
  methods: {
    handleSubmit() {
      this.closeToast();
      var vals = this.loginValidate();
      if (vals) {
        // 校验通过并获取值
        const loginForm = Object.assign({}, this.loginForm, { upid: this.params.upid });
        const url = '/Api/User/register';
        const login = user => request.post(url, user);
        console.log(loginForm);
        login(loginForm)
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
    goLogin() {
      this.$router.push('/Login');
    },
    loginValidate() {
      var errors = {
        username: 'username cannot be empty',
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
      console.log(vals);
      console.log(errorsLog);
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
  border: 1px solid #000;
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
  position: fixed;
  text-align: center;
  left: 0;
  bottom: 35px;
  right: 0;
  color: #fb6500;
  font-weight: 700;
}
.login-register em {
  margin: 0 10px;
}
</style>
