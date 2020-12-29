<template>
  <div class="home">
    <BoxTop />
    <TotalAssets />
    <div class="line"></div>
    <div class="product-wrap">
      <h3 class="product-type">Product type</h3>
      <ProductType />
    </div>
    <Button btnText="Transfer out" theme="primary" class="tipBtn" @click="saveName" />
  </div>
</template>

<script>
import BoxTop from '@/components/BoxTop.vue';
import TotalAssets from '@/components/TotalAssets.vue';
import ProductType from '@/components/ProductType.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'FinancialProduct',
  components: {
    BoxTop,
    TotalAssets,
    ProductType,
    Button
  }
};
</script>
<style scoped lang="scss">
.line {
  border-bottom: 1px solid #000;
  margin: 0 0 10px;
  height: 5px;
}
.product-wrap {
  padding: 0 20px;
}
</style>
