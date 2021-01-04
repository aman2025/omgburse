<template>
  <div class="product-detail">
    <Loading v-if="isLoad" />
    <OutView title="Order grabbing" :isBack="true" />
    <div class="instruction">
      <h3>Instructions for use</h3>
      <div>
        <p>1: One account can grerab 30 order per day</p>
        <p>2: The system is basedonLBS technology,through the cloud autom natic matching business</p>
      </div>
    </div>
    <div class="text1">Commission: {{ goodsDetail.per }} of the product price</div>
    <div class="goods">
      <h3>{{ goodsDetail.theusertype }} {{ goodsDetail.title }}</h3>
      <div class="g-pic">
        <img :src="goodsDetail.img" />
      </div>
      <div class="g-logo">
        <img :src="goodsDetail.cateimg" />
      </div>
      <div class="g-foot">
        <span>Ornaments</span>
        <em>{{ goodsDetail.price }}</em>
      </div>
    </div>
    <div class="btn-group">
      <button class="btn1">Recharge</button>
      <button class="btn2" @click="addOrder">Order grabbing</button>
    </div>
    <h3 class="r-title">Today's results</h3>
    <div class="result-group">
      <div class="result-info">
        <ul>
          <li>
            <span>Total's assets</span>
            <em>{{ goodsDetail.totalassets }}</em>
          </li>
          <li>
            <span>Yesterday's earnings</span>
            <em>{{ goodsDetail.yesterday }}</em>
          </li>
          <li>
            <span>Yesterday's team earnings</span>
            <em>{{ goodsDetail.yesterdayteam }}</em>
          </li>
        </ul>
      </div>
      <div class="result-info">
        <ul>
          <li>
            <span>Today's order</span>
            <em>{{ goodsDetail.todayorder }}</em>
          </li>
          <li>
            <span>Today's earnings</span>
            <em>{{ goodsDetail.today }}</em>
          </li>
          <li>
            <span>Team benefits today</span>
            <em>{{ goodsDetail.benefitstoday }}</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <Dialog v-if="show" :content="content" :onOk="onOk" :onCancel="onCancel" title="tip" :hasHead="false" />
  <Toast v-show="visible" :message="message" />
</template>
<script>
import OutView from '@/components/OutView.vue';
import Toast from '@/components/Toast.vue';
import Loading from '@/components/Loading.vue';
import Dialog from '@/components/Dialog.vue';
import { getCurrentInstance, reactive, ref, toRefs } from 'vue';
import request from '../utils/request';

export default {
  name: 'productDetail',
  components: {
    OutView,
    Loading,
    Dialog,
    Toast
  },
  setup() {
    const toastState = reactive({
      visible: false,
      message: ''
    });
    const { ctx } = getCurrentInstance();
    const isLoad = ref(false); // 设置isLoad=true响应
    const goodsDetail = ref({});
    const goodDetailUrl = '/Api/Index/Goodsdetail';
    let orderid = '';
    // 商品详情
    const params = ctx.$router.currentRoute.value.query;
    const getGoodsDetail = param => request.get(goodDetailUrl, param);
    getGoodsDetail({
      params: params,
      beforesend() {
        isLoad.value = true;
      }
    })
      .then(res => {
        isLoad.value = false;
        goodsDetail.value = res.data;
      })
      .catch(() => {});

    // 新增交易，返回orderid
    const addOrder = () => {
      const addOrderUrl = '/Api/Change/AddOrder';
      const getAddOrder = param => request.get(addOrderUrl, param);
      getAddOrder({
        params: params,
        beforesend() {
          isLoad.value = true;
        }
      })
        .then(res => {
          isLoad.value = false;
          orderid = res.data.orderid;
          if (res.data.status == '1') {
            show.value = true;
            content.value = `you add a order！orderid： ${orderid}`;
            callback.value = confirm;
          } else {
            show.value = true;
            content.value = 'add fail！';
          }
          // 返回的orderid
        })
        .catch(() => {});
    };

    // 确认交易
    const confirm = () => {
      const url = '/Api/Change/Confirm';
      const params = {
        orderid: orderid
      };
      const getConfirm = param => request.get(url, param);
      getConfirm({
        params: params,
        beforesend() {
          isLoad.value = true;
        }
      })
        .then(res => {
          isLoad.value = false;
          if (res.status == '1') {
            console.log(toastState.visible);
            toastState.visible = true;
            toastState.message = 'successful';
          } else {
            console.log(toastState.visible);
            toastState.visible = true;
            toastState.message = 'fail';
          }
        })
        .catch(() => {});
    };

    // 确定dialog
    const show = ref(false);
    const content = ref('');
    const callback = ref(function() {});
    const onOk = ref(val => {
      show.value = val;
      callback.value();
    });
    //关闭dialog
    const onCancel = ref(val => {
      show.value = val;
    });

    return {
      isLoad,
      goodsDetail,
      addOrder,
      show,
      onOk,
      onCancel,
      callback,
      content,
      ...toRefs(toastState)
    };
  },
  methods: {}
};
</script>
<style scoped lang="scss">
.product-detail {
  padding: 10px;
}
.instruction > h3 {
  font-weight: 700;
}
.instruction > div {
  font-size: 12px;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px;
  line-height: 1.8;
}
.product-detail .text1 {
  padding: 15px 0;
  color: #ff2525;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
}
.product-detail .goods {
  width: 50vw;
  border-radius: 5px;
  border: 1px solid #e44e2e;
  margin: 0 auto;
  background-color: #fff;
}
.product-detail .goods h3 {
  color: #fff;
  font-size: 15px;
  padding-left: 10px;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #e5502e;
  font-weight: 700;
  width: 82%;
}
.product-detail .goods .g-pic {
  padding: 10px 0;
}
.product-detail .goods .g-logo {
  padding: 1px 0 10px;
  text-align: center;
}
.product-detail .goods .g-logo img {
  width: 50%;
}
.product-detail .goods .g-foot {
  text-align: center;
  background-color: #a307d1;
  font-size: 10px;
  line-height: 1.2;
  color: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.product-detail .goods .g-foot span {
  display: block;
}
.product-detail .btn-group {
  padding: 45px 0 0;
  text-align: center;
}
.product-detail .btn-group button {
  height: 36px;
  width: 130px;
  color: #ffffff;
  text-align: center;
  border-radius: 5px;
  line-height: 36px;
  margin: 0 10px;
}
.product-detail .btn-group .btn1 {
  background-color: #4765fd;
}
.product-detail .btn-group .btn2 {
  background-color: #ff7335;
}
.product-detail .r-title {
  padding-top: 20px;
  font-size: 18px;
  font-weight: 700;
}
.product-detail .result-group {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.product-detail .result-group .result-info {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  border-radius: 5px;
  background-color: #ffffff;
  margin: 0 10px;
  text-align: center;
  padding-bottom: 5px;
}
.product-detail .result-group .result-info li {
  font-size: 10px;
}
.product-detail .result-group .result-info li span {
  padding: 10px 0 5px;
  display: block;
}
</style>
