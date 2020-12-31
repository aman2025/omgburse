<template>
  <div class="order">
    <OutView title="Order Record" />
    <NoData resultText="No order today" />
    <Button btnText="Go to order finance" class="tipBtn" @click="goHome" />
    <!-- 获取订单 -->
  </div>
</template>
<script>
import { onMounted } from 'vue';
import request from '../utils/request';
import OutView from '@/components/OutView.vue';
import Button from '@/components/Button.vue';
import NoData from '@/components/NoData.vue';

export default {
  name: 'Order',
  components: {
    OutView,
    Button,
    NoData
  },
  setup() {
    const order = () => {
      console.log('getOrder...');
      var orderUrl = '/Api/Change/Myorder';
      var params = {
        p: '1',
        limit: '10',
        ord: '',
        status: ''
      };
      const getOrder = param => request.get(orderUrl, param);
      getOrder({ params: params })
        .then(res => {
          console.log(res.data);
        })
        .catch(() => {});
    };
    onMounted(() => {
      order();
      console.log('onMounted');
    });
  },
  methods: {
    goHome() {
      this.$router.push('/');
    }
  }
};
</script>
<style scoped lang="scss"></style>
