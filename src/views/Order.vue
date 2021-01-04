<template>
  <div class="order">
    <Loading v-if="isLoad" />
    <OutView title="Order Record" />
    <NoData resultText="No order today" />
    <Button btnText="Go to order finance" class="tipBtn" @click="goHome" />
    <!-- 获取订单 -->
  </div>
</template>
<script>
import { onMounted, ref } from 'vue';
import request from '../utils/request';
import OutView from '@/components/OutView.vue';
import Button from '@/components/Button.vue';
import NoData from '@/components/NoData.vue';
import Loading from '@/components/Loading.vue';

export default {
  name: 'Order',
  components: {
    OutView,
    Button,
    NoData,
    Loading
  },
  setup() {
    const isLoad = ref(false);
    const order = () => {
      var orderUrl = '/Api/Change/Myorder';
      var params = {
        p: '1',
        limit: '10',
        ord: '',
        status: ''
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
          console.log(res.data);
        })
        .catch(() => {});
    };
    onMounted(() => {
      order();
      console.log('onMounted');
    });
    return {
      isLoad
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
