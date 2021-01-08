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

export default {
  name: 'Home',
  components: {
    Tabbar,
    Message
  },
  setup() {
    const users = ref('a1a');
    let timeout = null;
    provide('users', users);
    const updateUser = val => {
      users.value = val;
    };
    provide('updateUser', updateUser);

    // message组件的全局属性
    const messageGlb = reactive({
      msg: '',
      visible: false
    });
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
      }, 2000);
    };
    provide('messageGlb', messageGlb);
    provide('showMessage', showMessage);
  }
};
</script>
<style scoped lang="scss"></style>
