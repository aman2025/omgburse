<template>
  <div style="height:100%">
    <Tabbar v-if="this.$route.meta.showTab" />
    <router-view />
    <Contact v-model="this.$route.meta.singleContact" />
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar.vue';
import Contact from '@/components/Contact.vue';
import { provide, reactive, ref, watchEffect } from 'vue';
import request from './utils/request';
import enUS from '@/locales/en-US.js';
import PT from '@/locales/PT.js';
import SP from '@/locales/SP.js';

export default {
  name: 'Home',
  components: {
    Tabbar,
    Contact
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
    const teamimg = ref('');
    provide('appUrl', appUrl);
    provide('teamimg', teamimg);
    var url = '/Api/System/AllConfig';
    const getApp = () => request.get(url);
    getApp()
      .then(res => {
        appUrl.value = res.data.download;
        teamimg.value = res.data.teamimg;
      })
      .catch(() => {});

    // 切换语言
    const storeLang = localStorage.getItem('language_key');
    const lang = reactive({
      locale: enUS,
      storeLang: storeLang
    });
    const changeLanguage = val => {
      if (val == 'PT') {
        localStorage.setItem('language_key', 'PT');
        lang.locale = PT;
      } else if (val == 'enUS' || val == undefined) {
        localStorage.setItem('language_key', 'enUS');
        lang.locale = enUS;
      } else if (val == 'SP') {
        localStorage.setItem('language_key', 'SP');
        lang.locale = SP;
      }
    };

    watchEffect(() => {
      if (storeLang) {
        changeLanguage(storeLang);
      }
    });
    provide('lang', lang);
    provide('changeLanguage', changeLanguage);

    // return
    return {
      panelShow,
      updatePanelShow,
      teamimg,
      appUrl
    };
  }
};
</script>
<style scoped lang="scss"></style>
