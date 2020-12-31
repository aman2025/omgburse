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
        <Input placeholder="Enter your password" objkey="password" v-model:formData="loginForm" iconuser="icon-q05" :hasIcon="true" />
      </div>
      <div>
        <Input placeholder="Repeat your password" objkey="repassword" v-model:formData="loginForm" iconuser="icon-q06" :hasIcon="true" />
      </div>
      <div>
        <Input placeholder="Enter upid" objkey="upid" v-model:formData="loginForm" iconuser="icon-q03" :hasIcon="true" />
      </div>
      <div class="login-btn-wrap">
        <Button btnText="Register" theme="primary" class="tipBtn" @click="handleSubmit" />
      </div>
      <div class="login-register">
        <span @click="goLogin">Login</span>
      </div>
    </div>
  </div>
</template>
<script>
// import request from '../utils/request';
import { toRefs, reactive } from 'vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'Register',
  components: { Input, Button },
  setup() {
    const state = reactive({
      loginForm: { username: '', password: '', repassword: '', upid: '' }
    });
    return {
      ...toRefs(state)
    };
  },
  methods: {
    handleSubmit() {
      console.log('login...');
      // const loginForm = this.loginForm;
      // const login = user => request.post('/Api/User/register', user);
      // // todo：validator
      // login(loginForm)
      //   .then(res => {
      //     // todo: res没有token信息
      //     localStorage.setItem('token', JSON.stringify(res));
      //     console.log('login success');
      //     if (res.status == 1) {
      //       //登录成功
      //       this.$router.push('/');
      //     }
      //   })
      //   .catch(() => {
      //     alert('login fail!');
      //   });
    },
    goLogin() {
      this.$router.push('/Login');
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
