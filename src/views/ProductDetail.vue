<template>
  <div class="product-detail">
    <OutView title="Order grabbing" :isBack="true" />
    <div class="instruction">
      <h3>Instructions for use</h3>
      <div>
        <p>1: One account can grerab 30 order per day</p>
        <p>2: The system is basedonLBS technology,through the cloud autom natic matching business</p>
      </div>
    </div>
    <div class="text1">
      Commission: 0.65% of the product price
    </div>
    <div class="goods">
      <h3>LV1 MEMBER</h3>
      <div class="g-pic">
        <img src="../assets/product/p1.png" />
      </div>
      <div class="g-logo">
        <img src="../assets/product/shuadan_dt_ymx.png" />
      </div>
      <div class="g-foot">
        <span>Ornaments</span>
        <em>500 area</em>
      </div>
    </div>
    <div class="btn-group">
      <button class="btn1">Recharge</button>
      <button class="btn2">Order grabbing</button>
    </div>
    <h3 class="r-title">Today's results</h3>
    <div class="result-group">
      <div class="result-info">
        <ul>
          <li>
            <span>Total's assets</span>
            <em>6218.18</em>
          </li>
          <li>
            <span>Yesterday's earnings</span>
            <em>0</em>
          </li>
          <li>
            <span>Yesterday's team earnings</span>
            <em>55.17</em>
          </li>
        </ul>
      </div>
      <div class="result-info">
        <ul>
          <li>
            <span>Today's order</span>
            <em>6218.18</em>
          </li>
          <li>
            <span>Today's earnings</span>
            <em>0</em>
          </li>
          <li>
            <span>Team benefits today</span>
            <em>55.17</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';

export default {
  name: 'Recharge',
  components: {
    OutView
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
}
.product-detail .goods h3 {
  color: #fff;
  font-size: 16px;
  padding-left: 10px;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #e5502e;
  font-weight: 700;
  width: 70%;
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
