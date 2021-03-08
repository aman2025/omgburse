<template>
  <div class="recharge">
    <Loading v-if="isLoad" />
    <OutView :title="lang.locale.teamMember" :isBack="true" />
    <div class="money-wrap">
      <div class="moneyx" v-for="item in member" :key="item.id">
        <div class="m-hd">
          <div class="m-left m-title">{{ item.uname }}</div>
        </div>
        <div class="m-bd">
          <div class="m-left">₹{{ item.leftmoney }}</div>
          <div class="m-mid m-tip">(tel: {{ item.uphone }})</div>
          <div class="m-right m-dateline">{{ item.dateline }}</div>
        </div>
      </div>
      <NoData v-if="noData" :resultText="lang.locale.noData" />
    </div>
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';
import Loading from '@/components/Loading.vue';
import NoData from '@/components/NoData.vue';
import request from '../utils/request';
import { reactive, ref, toRefs } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'TeamMember',
  components: {
    OutView,
    NoData,
    Loading
  },
  inject: ['lang'],
  setup() {
    const router = useRoute();
    const routerQuery = router.query;
    const isLoad = ref(false);
    const state = reactive({
      member: [],
      noData: false
    });
    // 金额明细
    var url = '/Api/Team/Member';
    const params = {
      p: '1',
      limit: '10',
      ord: routerQuery.ord
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
<style scoped lang="scss"></style>
