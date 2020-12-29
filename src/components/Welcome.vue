<template>
  <div class="welcome" v-show="ps">
    <div class="welcome-box">
      <h1>Welcome</h1>
      <h3>Goods news</h3>
      <div class="info">
        <p>The latest good news, OMG will resume normal withdrawals next Monday, and all rewards will be credited immediately.</p>
      </div>
      <h3>Important Notice</h3>
      <div class="info">
        <p>Christmas is coming soon. In order to thank users for their long-term trust and support, OMG presents the third Christmas gift for everyone, and 100% ofthe recharge will be given immediately. Thank you for your support to OMG.</p>
      </div>
      <div class="w-blank"></div>
      <Button btnText="Got it" class="tipBtn" @click="gotIt" />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import { ref } from 'vue';

export default {
  name: 'Welcome',
  props: {
    panelShow: Boolean
  },
  components: {
    Button
  },
  setup(props) {
    var ps = ref(props.panelShow);
    return {
      ps
    };
  },
  methods: {
    gotIt() {
      this.ps = false;
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
  margin-top: 15%;
  padding: 0 25px 35px;
  background-color: #ffffff;
  border: 2px solid #ffb101;
  border-radius: 5px;
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
}
.w-blank {
  height: 25px;
}
</style>
