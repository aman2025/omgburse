<template>
  <div class="home">
    <Loading v-if="isLoad" />
    <Welcome :panelShow="false" />
    <BoxTop />
    <ProductList :goods="goods" />
    <div class="OrderRecord" @click="goOrder">
      <img src="../assets/shuadan_dt_btn_order.png" />
    </div>
    <!-- <div class="endText">No other new types of products</div> -->
    <!-- 全局异步数据双向绑定 -->
    <input type="text" v-model="userinfo.id" />
    {{ userinfo.id }}
    <div class="blank"></div>
  </div>
</template>

<script>
import BoxTop from '@/components/BoxTop.vue';
import ProductList from '@/components/ProductList.vue';
import Welcome from '@/components/Welcome.vue';
import Loading from '@/components/Loading.vue';
// import request from '../utils/request';
import { inject, ref, toRefs } from 'vue';
import request from '../utils/request';

export default {
  name: 'Home',
  components: {
    ProductList,
    BoxTop,
    Welcome,
    Loading
  },
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
    // 测试全局异步请求，生命周期
    // 方法二： 通过全局方法修改全局异步数据
    const userinfoState = inject('userinfo');

    // return
    return {
      isLoad,
      goods,
      ...toRefs(userinfoState)
    };
  },
  methods: {
    goOrder() {
      console.log(this.bb);
      // this.$router.push('/Order');
      this.userinfo.id = '1225558'; // 方法一：在method中才能取值，并修改
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
  height: 80px;
}
</style>
