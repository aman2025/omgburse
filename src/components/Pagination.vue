<template>
  <div class="pageination">
    <div class="page-bar">
      <i class="page-prev">&lt;</i>
      <i class="page-next">&gt;</i>
      <div class="page-bar-middle">
        <span>(<em>1</em> / <em>2</em>)</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {}
};
</script>

<style scoped lang="scss">
.pageination {
  padding: 10px 50px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 10px;
}
.pageination .page-bar {
  height: 36px;
  line-height: 36px;
  padding: 0 20px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 18px;
  text-align: center;
  position: relative;
}
.pageination .page-bar i {
  position: absolute;
  display: block;
  height: 32px;
  width: 32px;
  line-height: 32px;
  border-radius: 16px;
  background-color: #fced70;
  color: #fff;
  font-style: normal;
  font-size: 18px;
  text-align: center;
}
.pageination .page-bar i.page-prev {
  top: 1px;
  left: 50px;
}
.pageination .page-bar i.page-next {
  top: 1px;
  right: 50px;
}
</style>
