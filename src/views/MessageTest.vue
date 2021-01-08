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
    // 显示message
    // return
    return {
      updateUser,
      users,
      goback
    };
  }
};
</script>
<style scoped lang="scss">
.btn {
  border: 1px solid #000;
}
</style>
