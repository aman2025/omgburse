<template>
  <div class="product-list">
    <div class="product-list-container">
      <div v-for="item in goods" :key="item[0].id" class="product-item" @click="showDetail(item[0].id)">
        <div class="title-bg">
          <span class="text">{{ item[0].title }}</span>
          <span class="text t-wrap">{{ item[0].theusertype }} Member</span>
        </div>
        <div class="icon">
          <img :src="item[0].img" />
          <div class="resize-sensor">
            <div><div></div></div>
            <div><div></div></div>
          </div>
        </div>
        <div class="amazon">
          <img :src="item[0].cateimg" />
        </div>
        <div class="bottom">
          <div class="price"><span class="profit">profit</span>{{ $filters.toPercent(item[0].per) }}</div>
          <div style="display: flex; flex-direction: column; justify-content: space-around;">
            <div class="info">price</div>
            <div class="price1">{{ item[0].price }}</div>
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
    goods: Array
  },
  computed: {
    newPer() {
      return '$' + this.goods.per;
    }
  },
  methods: {
    showDetail(id) {
      this.$router.push('/ProductDetail?id=' + id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product-list {
  padding-top: 5px;
}
.product-list .product-list-container {
  width: 100%;
  padding-top: 18px;
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
  width: 45vw;
  height: 56vw;
  background: url(data:image/png;base64,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)
    no-repeat;
  background-size: cover;
}
.product-list .product-list-container .product-item .title-bg {
  width: 100%;
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
  position: relative;
}
.product-list .product-list-container .product-item .title-bg .text {
  font-size: 13px;
  color: #fff;
  font-weight: 700;
  padding-left: 2%;
  white-space: nowrap;
}
.product-list .product-list-container .product-item .title-bg .text:last-child {
  position: absolute;
  top: 26px;
  left: 50%;
  transform: translate(-50%, 0);
  color: #7579a5;
  font-weight: normal;
}
.product-list .product-list-container .product-item .icon {
  height: 28vw;
  display: block;
  margin: auto;
  text-align: center;
  padding-top: 6vw;
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
  position: relative;
}
.product-list .product-list-container .product-item .bottom .price .profit {
  position: absolute;
  top: -5px;
  left: 5px;
  color: #fff;
  font-size: 12px;
  font-weight: normal;
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
@media (min-width: 380px) and (max-width: 500px) {
  .product-list .product-list-container .product-item {
    width: 44.7vw;
    height: 55.7vw;
  }
  .product-list .product-list-container .product-item .icon {
    height: 30.2vw;
    line-height: 30.2vw;
    padding-top: 3vw;
  }
  .product-list .product-list-container .product-item .title-bg .text:last-child {
    top: 8vw;
  }
}
@media (min-width: 800px) {
  .product-list .product-list-container .product-item .title-bg .text {
    font-size: 18px;
    margin-top: 1vw;
  }
  .product-list .product-list-container .product-item .icon {
    padding-top: 10vw;
    height: 37vw;
  }
  .product-list .product-list-container .product-item .icon img {
    height: 16vw;
  }
  .product-list .product-list-container .product-item .title-bg .text:last-child {
    right: 20px;
    top: 0.5vw;
  }
  .product-list .product-list-container .product-item .bottom .price {
    font-size: 5vw;
    width: 21vw;
    padding-top: 1.1vw;
  }
  .product-list .product-list-container .product-item .bottom .price .profit {
    left: 1vw;
    font-size: 2vw;
  }
  .product-list .product-list-container .product-item .bottom .info {
    font-size: 2vw;
    margin-left: 6vw;
    height: auto;
    line-height: 6.8vw;
    width: auto;
  }
  .product-list .product-list-container .product-item .bottom .price1 {
    font-size: 2.5vw;
    line-height: 2.5vw;
    margin-left: 5vw;
    width: auto;
    margin-top: auto;
  }
}
@media (min-width: 1280px) {
  .product-list .product-list-container .product-item .title-bg .text {
    font-size: 22px;
    margin-top: 2vw;
  }
  .product-list .product-list-container .product-item .icon {
    padding-top: 10vw;
    height: 38vw;
  }
}
</style>
