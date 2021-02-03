<template>
  <div class="recharge">
    <div style="padding:8px">App Download...</div>
    <!-- download -->
  </div>
</template>
<script>
import { inject } from 'vue';
export default {
  name: 'AppDownload',
  components: {},
  setup() {
    // app download url
    const appUrl = inject('appUrl');
    window.location.href = appUrl.value;
    // return
    return {};
  }
};
</script>
<style scoped lang="scss"></style>
