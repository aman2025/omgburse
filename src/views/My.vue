<template>
  <div class="my">
    <h1 class="my-title">My information</h1>
    <BoxTop top="top" :custom="true" />
    <!-- List component  -->
    <List :listdatas="lists" :openDialog="openDialog" style="margin-top: 5px" />
    <div class="other">
      <div @click="makeMoney"><img src="../assets/btn-money.png" /></div>
      <div @click="customerService"><img src="../assets/btn-service.png" /></div>
      <div @click="inviteFriends"><img src="../assets/btn-friend.png" /></div>
    </div>
    <div class="blank"></div>
    <Dialog v-if="show" :content="content" :onOk="onOk" :onCancel="onCancel" title="tip" :hasHead="false" />
  </div>
</template>
<script>
import List from '@/components/List.vue';
import BoxTop from '@/components/BoxTop.vue';
import Dialog from '@/components/Dialog.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  name: 'My',
  components: {
    List,
    BoxTop,
    Dialog
  },
  setup() {
    // 获取vue实例, 全局实例函数添加组件
    // var { ctx } = getCurrentInstance();
    // ctx.$Toast({ modelValue: false, message: 'ok', time: 2 });
    //sign out
    const router = useRouter();
    const signOut = () => {
      window.localStorage.clear();
      router.push('/Login');
    };
    const lists = [
      {
        id: 1,
        title: 'Member system',
        className: 'member_system',
        img: 'icon_member',
        url: '/MemberSystem',
        content: ''
      },
      {
        id: 2,
        title: 'Bind bank card',
        className: 'bind_bank_card',
        img: 'icon_bank',
        url: '/BankInformation',
        content: ''
      },
      {
        id: 3,
        title: 'Withdrawal record',
        className: 'withdrawal_record',
        img: 'icon_withdraw',
        url: '/WithdrawalRecord',
        content: ''
      },
      {
        id: 4,
        title: 'Recharge record',
        className: 'recharge_record',
        img: 'icon_recharge',
        url: '/WithdrawalRecord',
        content: ''
      },
      {
        id: 5,
        title: 'Change Name',
        className: 'change_name',
        img: 'icon_modify',
        url: '/ChangeName',
        content: ''
      },
      {
        id: 6,
        title: 'Introduction',
        className: 'introduction',
        img: 'icon_introduction',
        url: '/Introduction',
        content: ''
      },
      {
        id: 7,
        title: 'Sign out',
        className: 'sign_out',
        img: 'icon_signout',
        url: '',
        content: 'Do you want to Sign out?',
        callback: signOut
      }
    ];
    //dialog show
    const show = ref(false);

    // 响应式回调方法，dialog点击ok
    const callback = ref(function() {});

    // 打开dialog
    const openDialog = ref((val, func) => {
      content.value = val; // 子组件传值给父组件参数
      show.value = true;
      callback.value = func; //回调callback，重新赋值
    });

    // 确定dialog
    const onOk = ref(val => {
      show.value = val;
      callback.value();
    });
    //关闭dialog
    const onCancel = ref(val => {
      show.value = val;
    });

    //定义dialog的内容
    const content = ref('');
    return {
      lists,
      show,
      openDialog,
      content,
      onOk,
      onCancel,
      callback
    };
  },
  inject: ['userinfo'],
  methods: {
    makeMoney() {
      this.$router.push('/MakeMoney');
    },
    customerService() {
      this.$router.push('/customerService');
    },
    inviteFriends() {
      this.$router.push('/InviteFriends');
    },
    logout() {}
  }
};
</script>
<style scoped lang="scss">
.other {
  padding: 5vw 5vw;
}
.other > div {
  text-align: center;
  height: 18vw;
}
.my-title {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ef4224;
  height: 40px;
  font-size: 19px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  font-weight: normal;
}
.blank {
  height: 50px;
}
</style>
