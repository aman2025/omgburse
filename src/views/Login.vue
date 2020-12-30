<template>
  <div class="login">
    <div>
      username： {{ loginForm.username }}
      <Input placeholder="username" v-model:loginForm="loginForm" iconuser="icon-q01" :hasIcon="true" />
    </div>
    <div>
      <input type="text" v-model="loginForm.username" placeholder="用户名" />
      <input type="text" v-model="loginForm.password" placeholder="密码" />
      <button @click="handleSubmit">登录</button>
    </div>
    <div>
      <button @click="testApi">测试api</button>
    </div>
  </div>
</template>
<script>
import request from '../utils/request';
import { toRefs, reactive } from 'vue';
import Input from '@/components/Input.vue';

export default {
  name: 'Login',
  components: { Input },
  setup() {
    const state = reactive({
      loginForm: { username: '', password: '' },
      name: 'aa'
    });
    return {
      ...toRefs(state)
    };
  },
  methods: {
    handleSubmit() {
      const loginForm = this.loginForm;
      const login = user => request.post('/Api/User/login', user);
      login(loginForm)
        .then(res => {
          // todo: res没有token信息
          localStorage.setItem('token', JSON.stringify(res));
          console.log('login success');
          if (res.status == 1) {
            //登录成功
            this.$router.push('/');
          }
        })
        .catch(() => {
          alert('login fail!');
        });
    },
    testApi() {
      // 测试跨域请求
      const memberlist = () => request.get('/Api/System/Memberlist');
      memberlist().then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style scoped lang="scss"></style>
