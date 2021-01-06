<template>
  <div class="recharge">
    <Loading v-if="isLoad" />
    <OutView title="TeamMember" :isBack="true" />
    <div class="money-wrap">
      <div class="money" v-for="item in moneyData" :key="item.id">
        <div class="m-hd">
          <div class="m-left">nickname: {{ item.nickname }}</div>
          <div class="m-right">leftmoney: {{ item.leftmoney }}</div>
        </div>
        <div class="m-foot">
          <div class="m-right">dateline: {{ item.dateline }}</div>
        </div>
      </div>
      <NoData v-if="noData" resultText="No Data!" />
    </div>
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';
import Loading from '@/components/Loading.vue';
import NoData from '@/components/NoData.vue';
import request from '../utils/request';
import { reactive, ref, toRefs } from 'vue';

export default {
  name: 'TeamMember',
  components: {
    OutView,
    NoData,
    Loading
  },
  setup() {
    const isLoad = ref(false);
    const state = reactive({
      member: [],
      noData: false
    });
    // 金额明细
    var url = '/Api/Team/Member';
    const params = {
      p: '',
      limit: ''
    };
    const getMember = param => request.get(url, param);
    getMember({
      params: params,
      beforesend() {
        isLoad.value = true;
      }
    })
      .then(res => {
        isLoad.value = false;
        // 没数据
        var data = res.data.data;
        if (!data) {
          state.noData = true;
        }
        state.member = data;
      })
      .catch(() => {});
    // return
    return {
      isLoad,
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
