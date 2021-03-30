<template>
  <div class="welcome" v-if="panelShow">
    <div class="welcome-box">
      <h1>{{ lang.locale.welcome }}</h1>
      <div class="info">
        <p v-html="content"></p>
      </div>
      <div class="w-blank"></div>
      <Button :btnText="lang.locale.gotIt" class="tipBtn" @click="gotIt" />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import { inject, onMounted, ref } from 'vue';
import request from '../utils/request';

export default {
  name: 'Welcome',
  props: {},
  components: {
    Button
  },
  inject: ['lang'],
  setup() {
    var content = ref('');
    var panelShow = inject('panelShow');
    var updatePanelShow = inject('updatePanelShow');
    // onMounted
    onMounted(() => {
      const url = '/Api/System/Notice';
      const getNotice = () => request.get(url);
      getNotice()
        .then(res => {
          console.log(res.data);
          content.value = res.data.content;
        })
        .catch(() => {});
    });
    return {
      panelShow,
      updatePanelShow,
      content
    };
  },
  methods: {
    gotIt() {
      this.updatePanelShow();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.welcome {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.38);
  z-index: 99999;
  padding: 10px;
}
.welcome .welcome-box {
  position: fixed;
  padding: 0 25px 35px;
  background-color: #ffffff;
  border: 2px solid #ffb101;
  border-radius: 5px;
  width: 92%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.welcome h1 {
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  padding: 15px 0 10px;
}
.welcome h3 {
  font-size: 18px;
  color: #df3115;
  font-weight: 700;
  padding: 0 0 5px;
  margin-top: 10px;
}
.welcome .info {
  font-size: 14px;
  color: #df3115;
  font-weight: 700;
  background-color: #fefad5;
  font-weight: normal;
  padding: 2px;
  white-space: pre-wrap;
  min-height: 180px;
  overflow: auto;
  max-height: 320px;
}
.w-blank {
  height: 25px;
}
</style>
