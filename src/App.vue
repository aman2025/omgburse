<template>
  <div>
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
  }
};
</script>
<style scoped lang="scss"></style>
