<template>
  <div class="product-list">
    <div class="product-list-container">
      <div v-for="item in goods" :key="item[0].id" class="product-item" @click="showDetail(item[0].id)">
        <div class="title-bg">
          <span class="text">{{ item[0].title }}</span>
          <span class="text">{{ item[0].theusertype }} Member</span>
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
          <div class="price">{{ $filters.toPercent(item[0].per) }}</div>
          <div style="display: flex; flex-direction: column; justify-content: space-around;">
            <div class="info">profit</div>
            <div class="price1">{{ item[0].price }}RS</div>
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
  padding-top: 45px;
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
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAGJCAMAAAApN9+IAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAANJQTFRFAAAAj5K1kJO2kpW3kpW3kpW3kpW3kpW3j5K1kpW3kpW3j5K1kpW3nqG/k5a4lJe5lZi5h4qweHymd3uldHikc3ejfICpjZC0m56+naC/e3+odnqldXmlhoqwoaTBmZy8kJO2iYyxpafDj5K1dXmkoKPBi46ypKfDkpW3fYGqkpW3foKqf4Ord3umeX2nlpm6dHijgoat////hIeug4atgYWssrTMz9Df8/P3wsTX6+zy+fn7zM3d7+/02drmcHShZmqbcXWia2+eY2eWLjBGLjBG0cbe3wAAAEZ0Uk5TAB5vpt74/9g7yoAvxv///////////////////////////////////6z/4P////////////////////////////////8CA2TMWCAAAAfZSURBVHic7dttX9vWGYBxQYsKhGBDC93MNsrKViBQyh6ydU9JOvb9v9Ik7IQYy7J1ScdHx76uV8mLJEf/3Ldl+YezbNLW9hdf7uRW085XX2xvZdPt7sU+VSrt7X7uth/7OCm1/4nt1UH5+9eHIWp+rvJPDYZHxw37+puT0J1++6tflyc8eDWBO5hi6/R/h1TCDUZnzfpNcLZxv/1dccKD5z09D0X2XeNKucFFQ7ez8PP2sd/nk23dnbh1AvF968Zwo8vPWpnJcpVy5R1ib7ynLUemvdgnuOIwF5c9hjv5Q3FvLd6/5ePX457AVQxc7+D+WLBsZdv1AxcF7vCy13AnP+T5dna14BVutXDflZs6uO453HmeX2U3eT7oEVzFwPUP7ijPb7KdPsGNB+5N3+FGxXNrlvcKrmrg+gd3Urj0Da5i4IRbwq1q4IRbAq44ya1wzd1KuDPhmsMVBzmacRNuoVv1wAm3oHzOwAlX3/jx/li45nBzBk44OHDCLR64iyo34RYP3Ei4DgdOODhwwi0auNnHe+GWGrhr4RDcvIETbsHAzXyAKVy7gRNubvUDJ1z9wFV8niTcEgM3+4m5cC0HTrgat0Hl50nC1cOVP4JZM3DCwYETbq7bnA8whVvoVjtwws11q32FSxWumWMjtYLtyW04/6Gh/3Chvt5Qg5x/dGv8s/kVxYEbtPsuDG78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)
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
  top: 3px;
  right: 5px;
}
.product-list .product-list-container .product-item .icon {
  height: 28vw;
  display: block;
  margin: auto;
  text-align: center;
  padding-top: 5px;
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
@media (min-width: 380px) and (max-width: 500px) {
  .product-list .product-list-container .product-item {
    width: 44.7vw;
    height: 55.7vw;
  }
  .product-list .product-list-container .product-item .icon {
    height: 30.2vw;
    line-height: 30.2vw;
  }
}
</style>
