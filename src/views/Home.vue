<template>
  <div class="home">
    <Loading v-if="isLoad" />
    <Welcome :panelShow="true" />
    <BoxTop />
    <ProductList />
    <div class="OrderRecord">
      <img src="../assets/shuadan_dt_btn_order.png" />
    </div>
    <div class="endText" @click="go">No other new types of products</div>
  </div>
</template>

<script>
import BoxTop from '@/components/BoxTop.vue';
import ProductList from '@/components/ProductList.vue';
import Welcome from '@/components/Welcome.vue';
import Loading from '@/components/Loading.vue';
// import request from '../utils/request';
import { ref, onMounted } from 'vue';

export default {
  name: 'Home',
  components: {
    ProductList,
    BoxTop,
    Welcome,
    Loading
  },
  setup() {
    var isLoad = ref(true); // 设置isLoad=true响应
    // request({
    //   url: 'v1/console/namespaces?namespaceId=',
    //   beforeSend() {
    //     // self.openLoading();
    //   },
    //   success() {
    //     self.closeLoading();
    //   }
    // });
    onMounted(() => {
      setTimeout(() => {
        // 测试loading隐藏
        isLoad.value = false;
      }, 2000);
    });
    return {
      isLoad
    };
  },
  methods: {}
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
