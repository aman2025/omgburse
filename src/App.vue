<template>
  <div style="height:100%">
    <Tabbar v-if="this.$route.meta.showTab" />
    <router-view />
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar.vue';
import { provide, reactive, ref } from 'vue';
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
    const rechargeType = reactive({
      typeOne: false,
      typeTwo: false
    });
    provide('appUrl', appUrl);
    provide('rechargeType', rechargeType);
    var url = '/Api/System/AllConfig';
    const getApp = () => request.get(url);
    getApp()
      .then(res => {
        appUrl.value = res.data.download;
        rechargeType.typeOne = res.data.recharge1;
        rechargeType.typeTwo = res.data.recharge2;
      })
      .catch(() => {});
    return {
      panelShow,
      updatePanelShow,
      rechargeType,
      appUrl
    };
  }
};
</script>
<style scoped lang="scss"></style>
