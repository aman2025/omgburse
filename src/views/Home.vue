<template>
  <div class="home">
    <Slide />
    <Loading v-if="isLoad" />
    <Welcome />
    <!-- memberDynamic -->
    <Marquee />
    <ProductList :goods="goods" />
    <div class="OrderRecord" @click="goOrder">
      <span class="orderRecord-text"> {{ lang.locale.orderRecord }}</span>
      <img src="../assets/shuadan_dt_btn_order.png" />
    </div>
    <!-- <div class="endText">No other new types of products</div> -->
    <div class="blank"></div>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import Welcome from '@/components/Welcome.vue';
import Marquee from '@/components/Marquee.vue';
import Loading from '@/components/Loading.vue';
import Slide from '@/components/Slide.vue';
// import request from '../utils/request';
import { ref } from 'vue';
import request from '../utils/request';

export default {
  name: 'Home',
  components: {
    ProductList,
    Welcome,
    Marquee,
    Slide,
    Loading
  },
  inject: ['lang'],
  setup() {
    const isLoad = ref(false); // 设置isLoad=true响应
    const goods = ref([]);
    const goodUrl = '/Api/Index/getgoods';
    const params = {
      p: '1',
      limit: '10'
    };
    const getGoods = param => request.get(goodUrl, param);
    getGoods({
      params: params,
      beforesend() {
        isLoad.value = true;
      }
    })
      .then(res => {
        isLoad.value = false;
        console.log(res.data);
        goods.value = res.data;
      })
      .catch(() => {});
    return {
      isLoad,
      goods
    };
  },
  methods: {
    goOrder() {
      this.$router.push('/Order');
    }
  }
};
</script>
<style scoped lang="scss">
.OrderRecord {
  width: 90%;
  margin-left: 5%;
  margin-top: 5%;
  height: 50px;
  text-align: center;
  position: relative;
}
.OrderRecord .orderRecord-text {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 23px;
  font-weight: bold;
  padding: 10px 0 0 35px;
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
.blank {
  height: 16vw;
}
</style>
