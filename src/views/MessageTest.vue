<template>
  <div>
    <h3>弹出message</h3>
    <button @click="showMessage('122256666', goback)" class="btn">show Message</button>
    <hr />
    <h3>修改字符串</h3>
    <button @click="updateUser('o1k1')" class="btn">pop</button>
    <div>{{ users }}</div>
    <hr />
    <h3>全局变量</h3>
    <h3>{{ bb.userinfo.id }}</h3>
    <button @click="editGlb" class="btn">修改全局异步数据</button>
  </div>
</template>
<script>
import { inject } from 'vue';
import { useRouter } from 'vue-router';
export default {
  name: 'MessageTest',
  components: {},
  inject: ['showMessage'],
  setup() {
    let users = inject('users');
    const temp = inject('temp');
    console.log(temp);
    const updateUser = inject('updateUser');
    //返回，显示message一秒后路由返回
    const router = useRouter();
    const goback = () => {
      setTimeout(() => {
        router.back(-1);
      }, 5000);
    };
    // 全局异步请求数据
    const bb = inject('userinfo');
    console.log(bb);
    // return
    return {
      updateUser,
      users,
      goback,
      bb
    };
  },
  methods: {
    editGlb() {
      // this.$router.push('/Order');
      this.bb.userinfo.id = '1225558--ok'; // 方法一：在method中才能取值，并修改
    }
  }
};
</script>
<style scoped lang="scss">
.btn {
  border: 1px solid #000;
}
</style>
