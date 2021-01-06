<template>
  <div class="list">
    <div v-for="item in listdatas" :key="item.id" :class="'listItem ' + item.className" @click="item.url ? linkTo(item.url) : openDialog(item.content, item.callback)">
      <div class="uni-image" style="bottom: 14%; height: 26px;">
        <div></div>
        <img :src="'../assets/' + item.img + '.png'" />
      </div>
      <div :class="'text ' + item.className">{{ item.title }}</div>
      <div class="text2">&gt;</div>
    </div>
  </div>
</template>

<script>
import { isFunction } from '../utils/util';

export default {
  name: 'List',
  props: {
    listdatas: Array,
    openDialog: Function
  },
  setup() {
    return {
      isFunction
    };
  },
  methods: {
    linkTo(url) {
      this.$router.push(url);
    }
  }
};
</script>

<style scoped lang="scss">
.list > div {
  background: #fff;
  height: 44px;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  font-size: 16px;
  border-bottom: 1px solid #eee;
  position: relative;
}
.list > div.listItem > div > div {
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.list > div.listItem .uni-image {
  width: 8%;
  margin-left: 25px;
  margin-top: 15px;
}
.list > div.listItem .text {
  margin-top: 11px;
  margin-left: 8px;
}
.list > div.listItem .text2 {
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 22px;
  margin-top: 6px;
}
.list > div.icon_mission > div > div {
  background-image: url(../assets/icon_mission.png);
}
.list > div.shuadan_btn_incomelist > div > div {
  background-image: url(../assets/shuadan_btn_incomelist.png);
}
.list > div.member_system > div > div {
  background-image: url(../assets/icon_member.png);
}
.list > div.bind_bank_card > div > div {
  background-image: url(../assets/icon_bank.png);
}
.list > div.withdrawal_record > div > div {
  background-image: url(../assets/icon_withdraw.png);
}
.list > div.recharge_record > div > div {
  background-image: url(../assets/icon_recharge.png);
}
.list > div.change_name > div > div {
  background-image: url(../assets/icon_modify.png);
}
.list > div.introduction > div > div {
  background-image: url(../assets/icon_introduction.png);
}
.list > div.sign_out > div > div {
  background-image: url(../assets/icon_signout.png);
}
</style>
