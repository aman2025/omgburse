<template>
  <div class="order">
    <Loading v-if="isLoad" />
    <OutView title="Order Record" />
    <div class="money-wrap">
      <div class="moneyx hasimg" v-for="item in order" :key="item.id">
        <div class="mx-img"><img :src="item.img" /></div>
        <div class="m-hd">
          <div class="m-left m-title">{{ item.title }}</div>
        </div>
        <div class="m-bd">
          <div class="m-left">₽{{ item.money }}</div>
          <div class="m-mid m-tip">(commission {{ item.permoney }})</div>
          <div class="m-right m-dateline">{{ item.dateline }}</div>
        </div>
      </div>
    </div>
    <NoData v-if="noData" resultText="No Data!" />
    <div class="blank" style="height: 50px"></div>
    <!-- <Button btnText="Go to order finance" class="tipBtn" @click="goHome" /> -->
    <!-- 获取订单 -->
  </div>
</template>
<script>
import { onMounted, reactive, ref, toRefs } from 'vue';
import request from '../utils/request';
import OutView from '@/components/OutView.vue';
import NoData from '@/components/NoData.vue';
import Loading from '@/components/Loading.vue';

export default {
  name: 'Order',
  components: {
    OutView,
    NoData,
    Loading
  },
  setup() {
    const isLoad = ref(false);
    const state = reactive({
      order: [],
      noData: false
    });
    const order = () => {
      var orderUrl = '/Api/Change/Lists';
      var params = {
        p: '1',
        limit: '10',
        ord: ''
      };
      const getOrder = param => request.get(orderUrl, param);
      getOrder({
        params: params,
        beforesend() {
          //axios拦截器中自定义的事件
          isLoad.value = true;
        }
      })
        .then(res => {
          isLoad.value = false;
          if (!res.data) {
            state.noData = true;
          }
          state.order = res.data;
        })
        .catch(() => {});
    };
    onMounted(() => {
      order();
    });
    return {
      isLoad,
      ...toRefs(state)
    };
  },
  inject: ['location'],
  methods: {
    goHome() {
      this.$router.push('/');
    }
  }
};
</script>
<style scoped lang="scss"></style>
