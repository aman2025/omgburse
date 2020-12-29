<template>
  <div class="no-data">
    <div>
      <img src="../assets/pic_nobata.png" /><span>{{ resultText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoData',
  props: {
    resultText: String
  }
};
</script>

<style scoped lang="scss">
.no-data div {
  padding: 10% 28%;
}
.no-data div span {
  padding-top: 10px;
  display: block;
  text-align: center;
}
</style>
