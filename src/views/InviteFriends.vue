<template>
  <div class="recharge">
    <OutView :title="lang.locale.inviteFriends" :isBack="true" />
    <div class="box-ipt">
      <div>
        <img :src="userinfo.qrcode" />
      </div>
    </div>
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';
import { reactive, toRefs } from 'vue';
import request from '../utils/request';

export default {
  name: 'InviteFriends',
  components: {
    OutView
  },
  inject: ['lang'],
  setup() {
    // 团队
    const state = reactive({
      userinfo: {}
    });
    var url = '/Api/Account/UserInfo';
    const getUserinfo = () => request.get(url);
    getUserinfo()
      .then(res => {
        state.userinfo = res.data;
      })
      .catch(() => {});
    // return
    return {
      ...toRefs(state)
    };
  }
};
</script>
<style scoped lang="scss">
.recharge {
  padding: 15px 10px;
}
.box-ipt h3 {
  font-size: 16px;
}
.box-ipt {
  padding: 10px 0;
}
.box-ipt div {
  position: relative;
}
.box-ipt .xiaji {
  position: absolute;
  top: 5px;
  left: 5px;
  height: 26px;
}
.box-ipt div input {
  border-radius: 5px;
  background-color: #fff;
  height: 38px;
  line-height: 38px;
  padding: 0 10px 0 50px;
  font-size: 18px;
  width: 100%;
}
.box-ipt div textarea {
  border-radius: 5px;
  background-color: #fff;
  padding: 10px 10px;
  font-size: 18px;
  width: 100%;
  height: 50vw;
}
</style>
