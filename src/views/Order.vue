<template>
  <div class="order">
    <Loading v-if="isLoad" />
    <OutView title="Order Record" />
    <div class="money-wrap">
      <div class="money" v-for="item in order" :key="item.id">
        <div class="m-hd">
          <div class="m-left">title: {{ item.title }}</div>
          <div class="m-right">{{ item.dateline }}</div>
        </div>
        <div class="m-bd">
          <div class="m-left">money: {{ item.money }}</div>
          <div class="m-mid">permoney: {{ item.permoney }}</div>
        </div>
      </div>
    </div>
    <NoData v-if="noData" resultText="No Data!" />
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
