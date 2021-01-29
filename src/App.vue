<template>
  <div style="height:100%">
    <Tabbar v-if="this.$route.meta.showTab" />
    <router-view />
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar.vue';
import { provide, ref } from 'vue';
import request from './utils/request';

export default {
  name: 'Home',
  components: {
    Tabbar
  },
  setup() {
    // 首页welcome，提示
    const panelShow = ref(true);
    const updatePanelShow = () => {
      panelShow.value = false;
    };
    provide('panelShow', panelShow);
    provide('updatePanelShow', updatePanelShow);

    // 全局app下载连接

    const appUrl = ref('');
    provide('appUrl', appUrl);
    var url = '/Api/System/AllConfig';
    const getApp = () => request.get(url);
    getApp()
      .then(res => {
        appUrl.value = res.data.download;
      })
      .catch(() => {});
    return {
      panelShow,
      updatePanelShow,
      appUrl
    };
  }
};
</script>
<style scoped lang="scss"></style>
