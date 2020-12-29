<template>
  <div class="order">
    <OutView title="Withdrawal record" :isBack="true" />
    <div class="list">
      <div v-for="(item, index) in lists" :key="index">
        {{ item.title }}
      </div>
    </div>
    <Pagination />
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'WithdrawalRecord',
  components: {
    OutView,
    Pagination
  },
  setup() {
    var lists = [
      {
        id: 1,
        title: 'record-----1'
      },
      {
        id: 2,
        title: 'record-----2'
      }
    ];
    return {
      lists
    };
  }
};
</script>
<style scoped lang="scss"></style>
