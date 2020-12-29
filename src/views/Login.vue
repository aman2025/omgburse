<template>
  <div class="login">
    <div>
      <input type="text" v-model="loginForm.username" placeholder="用户名" />
      <input type="text" v-model="loginForm.password" placeholder="密码" />
      <button @click="handleSubmit">登录</button>
    </div>
  </div>
</template>
<script>
import request from '../utils/request';
import { toRefs, reactive } from 'vue';

export default {
  name: 'Login',
  components: {},
  setup() {
    const state = reactive({
      loginForm: { username: '', password: '' }
    });
    return {
      ...toRefs(state)
    };
  },
  methods: {
    handleSubmit() {
      const loginForm = this.loginForm;
      const login = user => request.post('http://localhost:8000/v1/auth/users/login', user);
      login(loginForm)
        .then(res => {
          localStorage.setItem('token', JSON.stringify(res));
          console.log('login success');
          this.$router.push('/');
        })
        .catch(() => {
          alert('login fail!');
        });
    }
  }
};
</script>
<style scoped lang="scss"></style>
