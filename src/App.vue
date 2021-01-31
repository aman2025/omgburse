<template>
  <div style="height:100%">
    <Tabbar v-if="this.$route.meta.showTab" />
    <router-view />
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar.vue';
import { provide, reactive, ref, toRefs, watchEffect } from 'vue';
import request from './utils/request';
import enUS from '@/locales/en-US.js';
import PT from '@/locales/PT.js';

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

    // 切换语言
    const lang = reactive({
      locale: enUS
    });
    const changeLanguage = val => {
      console.log('changelanguage......1');
      console.log(val);
      if (val == 'PT') {
        localStorage.setItem('language_key', 'PT');
        lang.locale = PT;
        console.log(1);
      } else if (val == 'enUS' || val == undefined) {
        console.log(2);
        localStorage.setItem('language_key', 'enUS');
        lang.locale = enUS;
      }
    };

    watchEffect(() => {
      const storeLang = localStorage.getItem('language_key');
      if (storeLang) {
        console.log('watch......');
        changeLanguage();
      }
    });
    provide('lang', lang);
    provide('changeLanguage', changeLanguage);

    // return
    return {
      ...toRefs(lang),
      panelShow,
      updatePanelShow,
      appUrl
    };
  }
};
</script>
<style scoped lang="scss"></style>
