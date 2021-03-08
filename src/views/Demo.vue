<template>
  <div class="recharge">
    <OutView :title="lang.locale.demo" :isBack="true" />
    <div class="box-ipt" style="width:100%">
      <!-- video -->
      <div class="tutorial">
        <div class="t-item" v-for="item in tutorials" :key="item.id">
          <h3>{{ item.title }}</h3>
          <div class="video-wrap">
            <video :src="item.videourl" height="220" controls="controls" preload="none" :poster="item.img"></video>
          </div>
        </div>
      </div>
      <!-- video -->
    </div>
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';
import { reactive, toRefs } from 'vue';
import request from '../utils/request';

export default {
  name: 'Demo',
  components: {
    OutView
  },
  inject: ['lang'],
  setup() {
    const state = reactive({
      tutorials: []
    });
    var url = '/Api/System/getdemo';
    const getDemo = () => request.get(url);
    getDemo()
      .then(res => {
        console.log(res);
        state.tutorials = res.data;
      })
      .catch(() => {});
    // return
    return {
      ...toRefs(state)
    };
  }
};
</script>
<style scoped lang="scss">
.tutorial {
  padding: 10px;
}
.tutorial .t-item {
  width: 100%;
}

.tutorial .t-item h3 {
  font-size: 16px;
  font-weight: bold;
  padding: 15px 0 5px;
}
.tutorial .t-item .video-wrap {
  width: 100%;
  background-color: #ccc;
}
.tutorial .t-item .video-wrap video {
  width: 100%;
}
</style>
