<template>
  <div class="recharge">
    <OutView title="Recharge" :isBack="true" />
    <div class="box-ipt">
      <h3>My total assets</h3>
      <div>
        <img class="xiaji" src="../assets/xiaji_bg_btn1.png" />
        <input type="text" readonly />
      </div>
    </div>
    <div class="box-ipt">
      <h3>Recharge amount</h3>
      <div>
        <i></i>
        <textarea />
      </div>
    </div>
    <Button btnText="Recharge" theme="primary" class="tipBtn" @click="save" />
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'Recharge',
  components: {
    OutView,
    Button
  },
  methods: {
    save() {
      // this.$router.replace('/');
    }
  }
};
</script>
<style scoped lang="scss">
.recharge {
  padding: 15px 10px;
}
.box-ipt h3 {
  font-size: 16px;
}
.box-ipt {
  padding: 10px 0;
}
.box-ipt div {
  position: relative;
}
.box-ipt .xiaji {
  position: absolute;
  top: 5px;
  left: 5px;
  height: 26px;
}
.box-ipt div input {
  border-radius: 5px;
  background-color: #fff;
  height: 38px;
  line-height: 38px;
  padding: 0 10px 0 50px;
  font-size: 18px;
  width: 100%;
}
.box-ipt div textarea {
  border-radius: 5px;
  background-color: #fff;
  padding: 10px 10px;
  font-size: 18px;
  width: 100%;
  height: 50vw;
}
</style>
