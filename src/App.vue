<template>
  <div style="height:100%">
    <Tabbar v-if="this.$route.meta.showTab" />
    <router-view />
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar.vue';

export default {
  name: 'Home',
  components: {
    Tabbar
  },
  provide: {
    //全局数据
    // location: { username: 'test' }
  }
};
</script>
<style scoped lang="scss"></style>
