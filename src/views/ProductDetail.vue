<template>
  <div class="product-detail">
    <Loading v-if="isLoad" />
    <OutView :title="lang.locale.orderGrabbing" :isBack="true" />
    <!-- <div class="instruction">
      <h3>{{ lang.locale.changeName }}</h3>
      <div>
        <p>1: {{ lang.locale.accountPerDay }}</p>
        <p>2: {{ lang.locale.matchingBusiness }}</p>
      </div>
    </div> -->
    <div class="text1">{{ lang.locale.commission }}: {{ goodsDetail.per }} {{ lang.locale.productPrice }}</div>
    <div class="goods">
      <h3>
        {{ goodsDetail.theusertype }}
      </h3>
      <h5>
        {{ goodsDetail.title }}
      </h5>
      <div class="g-pic">
        <img :src="goodsDetail.img" />
      </div>
      <div class="g-logo">
        <img :src="goodsDetail.cateimg" />
      </div>
      <div class="g-foot">
        <span>{{ lang.locale.price }}</span>
        <em>{{ goodsDetail.price }}R$</em>
      </div>
    </div>
    <div class="btn-group">
      <button class="btn1" @click="recharge">{{ lang.locale.recharge }}</button>
      <button class="btn2" @click="addOrder">{{ lang.locale.orderGrabbing }}</button>
    </div>
    <h3 class="r-title">{{ lang.locale.TodayResults }}</h3>
    <div class="result-group">
      <div class="result-info">
        <ul>
          <li>
            <span>{{ lang.locale.TodayAssets }}</span>
            <em>{{ goodsDetail.totalassets }}</em>
          </li>
          <li>
            <span>{{ lang.locale.yesterdayEarnings }}</span>
            <em>{{ goodsDetail.yesterday }}</em>
          </li>
          <li>
            <span>{{ lang.locale.teamEarnings }}</span>
            <em>{{ goodsDetail.yesterdayteam }}</em>
          </li>
        </ul>
      </div>
      <div class="result-info">
        <ul>
          <li>
            <span>{{ lang.locale.TodayOrder }}</span>
            <em>{{ goodsDetail.todayorder }}</em>
          </li>
          <li>
            <span>{{ lang.locale.todayEarnings }}</span>
            <em>{{ goodsDetail.today }}</em>
          </li>
          <li>
            <span>{{ lang.locale.TeamBenefitsToday }}</span>
            <em>{{ goodsDetail.benefitstoday }}</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <Dialog v-if="show" :content="content" :onOk="onOk" :onCancel="onCancel" title="tip" :hasHead="false" />
  <Toast v-show="visible" :message="message" />
  <div class="loadingpic" v-show="isJiazai">
    <img src="../assets/jiazai.gif" />
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';
import Toast from '@/components/Toast.vue';
import Loading from '@/components/Loading.vue';
import Dialog from '@/components/Dialog.vue';
import { reactive, ref, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import request from '../utils/request';

export default {
  name: 'productDetail',
  components: {
    OutView,
    Loading,
    Dialog,
    Toast
  },
  inject: ['lang'],
  setup() {
    const toastState = reactive({
      visible: false,
      message: '',
      isJiazai: false
    });
    const routers = useRouter();
    const router = useRoute();
    const isLoad = ref(false); // 设置isLoad=true响应
    const goodsDetail = ref({});
    const goodDetailUrl = '/Api/Index/Goodsdetail';
    let orderid = '';
    // 商品详情
    // console.log(router.query); 获取路由参数
    const params = router.query;
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
          if (res.status == '1') {
            confirm(orderid);
          } else {
            show.value = true;
            content.value = res.msg;
          }
          // 返回的orderid
        })
        .catch(() => {});
    };

    // 确认交易
    const confirm = id => {
      const url = '/Api/Change/Confirm';
      const params = {
        orderid: id
      };
      const getConfirm = param => request.get(url, param);
      getConfirm({ params: params })
        .then(res => {
          if (res.status == '1') {
            // 显示动图5秒
            showJiazai(res);
          } else {
            show.value = true;
            content.value = res.msg;
          }
        })
        .catch(() => {});
    };

    // 显示隐藏toast
    const showToast = msg => {
      if (toastState.visible) {
        return;
      }
      toastState.visible = true;
      toastState.message = msg;
      var timeout = null;
      timeout && clearTimeout(timeout);
      timeout = setTimeout(() => {
        toastState.visible = false;
      }, 1500);
    };
    // 显示动图5秒
    const showJiazai = res => {
      if (toastState.isJiazai) {
        return;
      }
      toastState.isJiazai = true;
      setTimeout(() => {
        toastState.isJiazai = false;
        showToast(res.msg);
        // 刷新页面
        // routes.go(0);
        location.reload();
      }, 5000);
    };

    // 确定dialog
    const show = ref(false);
    const content = ref('');
    const callback = ref(function() {
      routers.push('/Recharge');
    });
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
  methods: {
    recharge() {
      this.$router.push('/Recharge');
    }
  }
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
  width: 55vw;
  border-radius: 5px;
  border: 1px solid #e44e2e;
  margin: 0 auto;
  background-color: #fff;
}
.product-detail .goods h3 {
  color: #fff;
  font-size: 15px;
  padding-left: 10px;
  border-radius: 5px 5px 0 0;
  background-color: #e5502e;
  font-weight: 700;
  width: 100%;
}
.product-detail .goods h5 {
  text-align: center;
  padding-top: 5px;
}
.product-detail .goods .g-pic {
  padding: 10px 0;
  text-align: center;
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
  min-width: 130px;
  padding: 0 5px;
  color: #ffffff;
  text-align: center;
  border-radius: 5px;
  line-height: 36px;
  margin: 0 10px;
  font-size: 16px !important;
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
.loadingpic {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
  height: 55px;
  text-align: center;
  z-index: 99999;
}
</style>
