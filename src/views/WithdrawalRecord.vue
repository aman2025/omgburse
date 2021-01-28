<template>
  <div class="recharge">
    <Loading v-if="isLoad" />
    <OutView :title="outViewTitle" :isBack="true" />
    <div class="money-wrap">
      <div class="moneyx" v-for="item in moneyData" :key="item.id">
        <div class="m-hd">
          <div class="m-left m-title">{{ item.title }}</div>
        </div>
        <div class="m-bd">
          <div class="m-left">₹{{ item.money }}</div>
          <div class="m-right m-dateline">{{ item.dateline }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';
import Loading from '@/components/Loading.vue';
import request from '../utils/request';
import { computed, reactive, ref, toRefs } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'WithdrawalRecord',
  components: {
    OutView,
    Loading
  },
  setup() {
    const router = useRoute();
    const routerQuery = router.query;
    const isLoad = ref(false);
    const state = reactive({
      moneyData: []
    });
    // 计算outViewTitle值
    const types = routerQuery.type;
    const outViewTitle = computed(() => {
      if (types == '2') {
        return 'Withdrawl Record';
      } else if (types == '1') {
        return 'Recharge Record';
      } else {
        return 'Income List';
      }
    });
    // 金额明细
    var url = '/Api/Money/lists';
    const params = {
      p: '1',
      limit: '10',
      type: routerQuery.type
    };
    const getMoney = param => request.get(url, param);
    getMoney({
      params: params,
      beforesend() {
        isLoad.value = true;
      }
    })
      .then(res => {
        isLoad.value = false;
        state.moneyData = res.data;
      })
      .catch(() => {});
    // return
    return {
      ...toRefs(state),
      outViewTitle
    };
  }
};
</script>
<style scoped lang="scss"></style>
