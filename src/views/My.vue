<template>
  <div class="my">
    <h1 class="my-title">My information</h1>
    <BoxTop top="top" :custom="true" />
    <!-- List component  -->
    <List :listdatas="lists" style="margin-top: 5px" />
    <div class="other">
      <div><img src="../assets/btn-money.png" /></div>
      <div><img src="../assets/btn-service.png" /></div>
      <div><img src="../assets/btn-friend.png" /></div>
    </div>
    <div class="blank"></div>
  </div>
</template>
<script>
import List from '@/components/List.vue';
import BoxTop from '@/components/BoxTop.vue';

export default {
  name: 'My',
  components: {
    List,
    BoxTop
  },
  setup() {
    var lists = [
      {
        id: 1,
        title: 'Member system',
        className: 'member_system',
        img: 'icon_member',
        url: '/MemberSystem'
      },
      {
        id: 2,
        title: 'Bind bank card',
        className: 'bind_bank_card',
        img: 'icon_bank',
        url: '/BankInformation'
      },
      {
        id: 3,
        title: 'Withdrawal record',
        className: 'withdrawal_record',
        img: 'icon_withdraw',
        url: '/WithdrawalRecord'
      },
      {
        id: 4,
        title: 'Recharge record',
        className: 'recharge_record',
        img: 'icon_recharge',
        url: '/RechargeRecord'
      },
      {
        id: 5,
        title: 'Change Name',
        className: 'change_name',
        img: 'icon_modify',
        url: '/ChangeName'
      },
      {
        id: 6,
        title: 'Introduction',
        className: 'introduction',
        img: 'icon_introduction',
        url: '/Introduction'
      },
      {
        id: 7,
        title: 'Sign out',
        className: 'sign_out',
        img: 'icon_signout',
        url: '/SignOut'
      }
    ];
    return {
      lists
    };
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
