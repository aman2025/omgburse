<template>
  <div style="height:100%">
    <Tabbar v-if="this.$route.meta.showTab" />
    <router-view />
    <Message />
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar.vue';
import { provide, reactive, ref } from 'vue';
import Message from '@/components/Message.vue';
import { useRouter } from 'vue-router';
// import request from './utils/request';

export default {
  name: 'Home',
  components: {
    Tabbar,
    Message
  },
  setup() {
    //测试修改全局状态
    const users = ref('a1a');
    provide('users', users);
    const updateUser = val => {
      users.value = val;
    };
    provide('updateUser', updateUser);

    // message组件的全局属性
    let timeout = null;
    const messageGlb = reactive({
      msg: '11msg',
      visible: false
    });
    console.log(messageGlb);
    console.log(messageGlb.msg);
    const showMessage = (val, cb) => {
      if (messageGlb.visible) {
        return;
      }
      messageGlb.visible = true;
      messageGlb.msg = val;
      closeMessage();
      cb && cb();
    };
    const closeMessage = () => {
      timeout && clearTimeout(timeout);
      timeout = setTimeout(() => {
        messageGlb.visible = false;
      }, 3000);
    };
    provide('messageGlb', messageGlb);
    provide('showMessage', showMessage);

    // 全局监听路由变化,
    const router = useRouter();
    router.beforeEach(() => {
      // 路由切换或返回，message窗口关闭
      messageGlb.visible = false;
    });

    // ★获取用户作为全局的状态,异步获取，
    // 方法二，已经在globalState中请求，在main.js引用
    // const url = '/Api/Account/UserInfo';
    // let userinfoState = reactive({
    //   userinfo: {}
    // });
    // provide('userinfo', userinfoState); // 异步数据，先provide然后再赋值，其他组件才能用
    // const getUserinfo = () => request.get(url);
    // getUserinfo()
    //   .then(res => {
    //     userinfoState.userinfo = res.data;
    //   })
    //   .catch(() => {});
  }
};
</script>
<style scoped lang="scss"></style>
