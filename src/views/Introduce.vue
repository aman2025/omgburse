<template>
  <div class="recharge">
    <OutView title="Introduce" :isBack="true" />
    <div class="box-ipt" style="width:100%">
      <div v-html="content"></div>
    </div>
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';
import { reactive, toRefs } from 'vue';
import request from '../utils/request';

export default {
  name: 'Introduce',
  components: {
    OutView
  },
  setup() {
    const state = reactive({
      content: {}
    });
    var url = '/Api/System/Introduce';
    const getCompany = () => request.get(url);
    getCompany()
      .then(res => {
        console.log(res.data);
        state.content = res.data.content;
      })
      .catch(() => {});
    // return
    return {
      ...toRefs(state)
    };
  }
};
</script>
<style scoped lang="scss"></style>
