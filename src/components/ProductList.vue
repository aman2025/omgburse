<template>
  <div class="product-list">
    <div class="product-list-container">
      <div v-for="item in goods" :key="item.id" class="product-item" @click="showDetail">
        <div class="title-bg">
          <span class="text">{{ item[0].title }}</span>
          <span class="text" style="margin-left: 16px">{{ item[0].theusertype }}</span>
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
            <div class="info">Ornaments</div>
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
    showDetail() {
      this.$router.push('/ProductDetail?id=1');
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
  width: 47%;
  height: 212px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAGJCAYAAAAe6S+6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NTY4Y2M5Ni1kYzkwLWFhNDMtYjZlZi03MTFiZTJjNGRkOTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDZFRTIxNDY0RjVCMTFFQjlGREREMjg2MjlCODM5NTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDZFRTIxNDU0RjVCMTFFQjlGREREMjg2MjlCODM5NTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZTZiN2ZjZmYtYzlmMC0zMzRhLWFhZmUtMGRhMmYxZmU4NmIxIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YWYxY2YxYzEtOWU2MS0zYTRkLTg0N2Qt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)
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
