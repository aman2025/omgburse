<template>
  <div class="product-list">
    <div class="product-list-container">
      <div class="product-item" @click="showDetail">
        <div class="title-bg">
          <span class="text">Member</span>
          <span class="text" style="margin-left: 16px">LV1</span>
        </div>
        <div class="icon">
          <img src="../assets/product/p1.png" />
          <div class="resize-sensor">
            <div><div></div></div>
            <div><div></div></div>
          </div>
        </div>
        <div class="uni-image amazon">
          <img src="../assets/product/shuadan_dt_ymx.png" />
        </div>
        <div class="bottom">
          <div class="price">0.65%</div>
          <div style="display: flex; flex-direction: column; justify-content: space-around;">
            <div class="info">Ornaments</div>
            <div class="price1">500₹ area</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    msg: String
  },
  methods: {
    showDetail() {
      this.$router.push('/ProductDetail');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product-list .product-list-container {
  width: 100%;
  padding-top: 10px;
  padding-left: 2.5%;
  padding-right: 2.5%;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fff;
  -webkit-border-radius: 15px;
  border-radius: 15px;
}
.product-list .product-list-container .product-item {
  margin-bottom: 10px;
  padding-bottom: 2%;
  color: #4cd964;
  font-size: 10px;
  width: 47%;
  height: 212px;
  background: url(data:image/png;base64,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)
    no-repeat;
  background-size: cover;
}
.product-list .product-list-container .product-item .title-bg {
  width: 76.5%;
  padding-left: 5px;
  padding-top: 5px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
}
.product-list .product-list-container .product-item .title-bg .text {
  font-size: 13px;
  color: #fff;
  font-weight: 700;
  padding-left: 2%;
}
.product-list .product-list-container .product-item .icon {
  width: 144px;
  height: 105px;
  display: block;
  margin: auto;
  padding-top: 7px;
}

.product-list .product-list-container .product-item .amazon {
  width: 90px;
  height: 25px;
  padding-left: 5px;
  display: block;
  margin: auto;
  padding-top: 4px;
}
.uni-image {
  overflow: hidden;
  position: relative;
}
.product-list .product-list-container .product-item .bottom {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  width: 100%;
  margin-top: 10px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  text-align: center;
}
.product-list .product-list-container .product-item .bottom .price {
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  padding-top: 6px;
  padding-left: 6px;
  color: #fff;
  width: 60px;
}
.product-list .product-list-container .product-item .bottom .info {
  width: 77px;
  height: 17px;
  color: #fff;
  font-size: 10px;
  line-height: 17px;
  margin-left: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.product-list .product-list-container .product-item .bottom .price1 {
  color: #fff;
  font-size: 10px;
  line-height: 17px;
  margin-left: 3px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 90px;
  margin-top: 3px;
}
</style>
