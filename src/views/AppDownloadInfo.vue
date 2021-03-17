<template>
  <div>
    <div style="padding:8px">
      <div v-html="content"></div>
    </div>
    <div class="btn-wrap">
      <Button :btnText="lang.locale.appDownload" theme="primary" class="tipBtn" @click="download" />
    </div>
    <!-- download -->
  </div>
</template>
<script>
import { inject, reactive, toRefs } from 'vue';
import Button from '@/components/Button.vue';
import request from '../utils/request';

export default {
  name: 'AppDownload',
  components: { Button },
  inject: ['lang'],
  setup() {
    // app download url
    const appUrl = inject('appUrl');
    const state = reactive({
      content: {}
    });
    // 语言选择
    var curLangKey = localStorage.getItem('language_key') || 'PT';
    var url = `/Api/System/Downloadinfo?lang=${curLangKey}`;

    const getApp = () => request.get(url);
    getApp()
      .then(res => {
        console.log(res);
        state.content = res.data.content;
      })
      .catch(() => {});
    // return
    return {
      appUrl,
      ...toRefs(state)
    };
  },
  methods: {
    download() {
      console.log(this.appUrl);
      window.location.href = this.appUrl;
    }
  }
};
</script>
<style scoped lang="scss">
.btn-wrap {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
}
</style>
