<template>
  <div style="height:100%">
    <Tabbar v-if="this.$route.meta.showTab" />
    <router-view />
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar.vue';
import { provide, ref } from 'vue';

export default {
  name: 'Home',
  components: {
    Tabbar
  },
  setup() {
    const panelShow = ref(true);
    const updatePanelShow = () => {
      panelShow.value = false;
    };
    provide('panelShow', panelShow);
    provide('updatePanelShow', updatePanelShow);
    return {
      panelShow,
      updatePanelShow
    };
  }
};
</script>
<style scoped lang="scss"></style>
