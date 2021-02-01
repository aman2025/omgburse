<template>
  <div class="home">
    <Loading v-if="isLoad" />
    <BoxTop />
    <TotalAssets :depositLogs="logs" />
    <div class="line"></div>
    <div class="product-wrap">
      <h3 class="product-type">{{ lang.locale.producType }}</h3>
      <ProductType :depositLists="lists" />
    </div>
    <Button :btnText="lang.locale.transferOut" theme="primary" class="tipBtn" @click="saveName" />
  </div>
</template>

<script>
import BoxTop from '@/components/BoxTop.vue';
import TotalAssets from '@/components/TotalAssets.vue';
import ProductType from '@/components/ProductType.vue';
import Button from '@/components/Button.vue';
import { reactive, ref, toRefs } from 'vue';
import request from '../utils/request';
import Loading from '@/components/Loading.vue';

export default {
  name: 'FinancialProduct',
  components: {
    BoxTop,
    TotalAssets,
    ProductType,
    Button,
    Loading
  },
  inject: ['lang'],
  setup() {
    const isLoad = ref(false); // 设置isLoad=true响应
    // 投资列表
    const state = reactive({
      lists: [],
      logs: {}
    });
    const depositUrl = '/Api/Deposit/Lists';
    const getGoods = () => request.get(depositUrl);
    getGoods({
      beforesend() {
        isLoad.value = true;
      }
    })
      .then(res => {
        isLoad.value = false;
        console.log(res.data);
        state.lists = res.data.lists;
        state.logs = res.data.logs;
      })
      .catch(() => {});
    return {
      isLoad,
      ...toRefs(state)
    };
  }
};
</script>
<style scoped lang="scss">
.line {
  border-bottom: 1px solid #000;
  margin: 0 0 10px;
  height: 5px;
}
.product-wrap {
  padding: 0 20px;
}
</style>
