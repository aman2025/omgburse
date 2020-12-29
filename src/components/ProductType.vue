<template>
  <div class="product-type">
    <div class="type-bar">
      <div class="type-bar-name">
        <span>Type</span>
        <em>A</em>
      </div>
      <div class="type-bar-info">
        <h3>One day: <span>Interest rate +5%</span></h3>
        <h5>[set] <em>7</em> days</h5>
        <button>+35%</button>
      </div>
      <div class="type-bar-btn">
        <span>Deposit</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductType',
  props: {
    productTypes: Array
  },
  methods: {
    deposit() {
      // this.$router.push();
    }
  }
};
</script>

<style scoped lang="scss">
.product-type {
  padding: 0;
}
.product-type .type-bar {
  background-color: #fff;
  border-radius: 5px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  overflow: hidden;
  margin-bottom: 10px;
}
.product-type .type-bar .type-bar-name {
  width: 60px;
  text-align: center;
  background-color: #ab6ce5;
}
.product-type .type-bar .type-bar-btn {
  position: relative;
  width: 80px;
  text-align: center;
  padding: 20px 10px 10px;
}
.product-type .type-bar .type-bar-btn :after {
  position: absolute;
  top: 5px;
  left: 0px;
  bottom: 5px;
  content: '';
  display: block;
  width: 5px;
  border-right: 1px dashed #e0e0e0;
}
.product-type .type-bar .type-bar-info {
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  width: 100%;
  border: none;
  padding: 5px;
  height: 15vw;
}
.product-type .type-bar .type-bar-info button {
  position: absolute;
  top: 7vw;
  right: 1vw;
  border-radius: 3px;
  background-color: #ff2525;
  border: none;
  text-align: center;
  padding: 3px 10px;
  color: #ffffff;
}
.product-type .type-bar .type-bar-name span {
  color: #fcef7f;
  font-size: 18px;
  display: block;
}
.product-type .type-bar .type-bar-name em {
  color: #fff;
  font-size: 20px;
  display: block;
  text-align: center;
}
.product-type .type-bar .type-bar-info h3 {
  font-size: 12px;
}
.product-type .type-bar .type-bar-info h3 span {
  color: #fb6400;
}
.product-type .type-bar .type-bar-info h5 {
  font-size: 14px;
}
.product-type .type-bar .type-bar-info h5 em {
  margin: 0 5px;
}
.product-type .type-bar .type-bar-btn span {
  color: #16bc05;
}
</style>
