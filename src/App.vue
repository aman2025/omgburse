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
    location: { username: 'test' },
    // 全局显示属性
    visibleGlobal: { isVisible: true, text: '1122globaltext...' }
  }
};
</script>
<style scoped lang="scss"></style>
