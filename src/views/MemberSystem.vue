<template>
  <div class="member-system">
    <OutView title="Member System" :isBack="true" />
    <h3 class="title">Players will be LV1 members by default after registering an account</h3>
    <div class="card">
      <img src="../assets/member-car01.png" />
    </div>
    <div class="card">
      <img src="../assets/member-car02.png" />
    </div>
    <div class="card">
      <img src="../assets/member-car03.png" />
    </div>
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';

export default {
  name: 'Order',
  components: {
    OutView
  },
  methods: {}
};
</script>
<style scoped lang="scss">
.member-system .title {
  background: #fff;
  padding: 10px;
  font-size: 16px;
}
.member-system .card {
  text-align: center;
  padding: 10px 20px;
}
</style>
