<template>
  <div class="home">
    <!-- <Loading /> -->
    <Welcome :panelShow="true" />
    <BoxTop />
    <ProductList />
    <div class="OrderRecord">
      <img src="../assets/shuadan_dt_btn_order.png" />
    </div>
    <div class="endText">No other new types of products</div>
  </div>
</template>

<script>
import BoxTop from '@/components/BoxTop.vue';
import ProductList from '@/components/ProductList.vue';
import Welcome from '@/components/Welcome.vue';
// import Loading from '@/components/Loading.vue';
// import request from '../utils/request';

export default {
  name: 'Home',
  components: {
    ProductList,
    BoxTop,
    Welcome
    // Loading
  },
  setup() {
    // request({
    //   url: 'v1/console/namespaces?namespaceId=',
    //   beforeSend() {
    //     // self.openLoading();
    //   },
    //   success() {
    //     self.closeLoading();
    //   }
    // });
  }
};
</script>
<style scoped lang="scss">
.OrderRecord {
  width: 90%;
  margin-left: 5%;
  margin-top: 5%;
  height: 50px;
}
.endText {
  margin-top: 5%;
  font-size: 15px;
  text-align: center;
  background: #fdf3dc;
  margin-left: -10%;
  height: 30px;
  line-height: 30px;
}
</style>
