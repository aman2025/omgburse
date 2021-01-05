<template>
  <div class="recharge">
    <OutView title="Withdrawal Record" :isBack="true" />
    <div class="money-wrap">
      <div class="money" v-for="item in moneyData" :key="item.id">
        <div class="m-hd">
          <div class="m-left">title: {{ item.title }}</div>
          <div class="m-mid">nowmoney: {{ item.nowmoney }}</div>
        </div>
        <div class="m-bd">
          <div class="m-left">money: {{ item.money }}</div>
          <div class="m-mid">mtype: {{ item.mtype }}</div>
        </div>
        <div class="m-foot">
          <div class="m-right">dateline: {{ item.dateline }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';
import request from '../utils/request';
import { reactive, toRefs } from 'vue';

export default {
  name: 'WithdrawalRecord',
  components: {
    OutView
  },
  setup() {
    let moneyData = [{ id: 1, title: 'a' }];
    const state = reactive({
      moneyData: []
    });
    // 金额明细
    var url = '/Api/Money/lists';
    const getMoney = () => request.get(url);
    getMoney()
      .then(res => {
        state.moneyData = res.data;
        console.log(moneyData);
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
.money {
  border-bottom: 1px solid #ddd;
  padding: 5px 10px;
}
.money .m-ft,
.money .m-bd,
.money .m-hd {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.money .m-mid {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  padding: 0 10px;
}
.money .m-left {
  width: 200px;
  white-space: nowrap;
}
.money .m-right {
  white-space: nowrap;
}
</style>
