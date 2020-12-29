<template>
  <div class="order">
    <OutView title="Order Record" />
    <NoData resultText="No order today" />
    <Button btnText="Go to order finance" class="tipBtn" @click="goHome" />
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';
import Button from '@/components/Button.vue';
import NoData from '@/components/NoData.vue';

export default {
  name: 'Order',
  components: {
    OutView,
    Button,
    NoData
  },
  methods: {
    goHome() {
      this.$router.replace('/');
    }
  }
};
</script>
<style scoped lang="scss"></style>
