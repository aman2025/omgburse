<template>
  <div class="recharge">
    <Loading v-if="isLoad" />
    <Toast v-show="visible" :message="message" />
    <OutView title="Withdraw" :isBack="true" />
    <div class="box-ipt">
      <h3>Money</h3>
      <div>
        <img class="xiaji" src="../assets/xiaji_bg_btn1.png" />
        <input type="text" v-model="money" />
      </div>
    </div>
    <div class="box-ipt">
      <h3>Mark</h3>
      <div>
        <i></i>
        <textarea v-model="mark" />
      </div>
    </div>
    <div class="illustration" v-html="illustration"></div>
    <Button btnText="Withdraw" theme="primary" class="tipBtn" @click="withdraw" />
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';
import Button from '@/components/Button.vue';
import { reactive, ref, toRefs } from 'vue';
import request from '../utils/request';
import Loading from '@/components/Loading.vue';
import Toast from '@/components/Toast.vue';

export default {
  name: 'Withdraw',
  components: {
    OutView,
    Button,
    Loading,
    Toast
  },
  setup() {
    const isLoad = ref(false); // 设置isLoad=true响应
    const state = reactive({
      money: '',
      mark: '',
      visible: false,
      message: ''
    });
    const illustration = ref('');
    const url = 'Api/System/Withdraw';
    const illustrate = () => request.post(url);
    illustrate()
      .then(res => {
        console.log(res);
        illustration.value = res.data.content;
      })
      .catch(() => {});
    // return
    return {
      isLoad,
      illustration,
      ...toRefs(state)
    };
  },
  methods: {
    withdraw() {
      if (this.money) {
        const url = '/Api/Money/Tixian';
        const tokenVal = JSON.parse(localStorage.token);
        var withdrawForm = { money: this.money, mark: this.mark, token: tokenVal };
        console.log(withdrawForm);
        const Tixian = param => request.post(url, param);
        Tixian(withdrawForm)
          .then(res => {
            if (res.status == 0) {
              this.showToast(res.msg);
            } else {
              this.showToast(res.msg);
              setTimeout(() => {
                this.$router.back(-1);
              }, 2000);
            }
          })
          .catch(() => {});
      } else {
        this.showToast('money can not be empty');
      }
    },
    closeToast() {
      var timeout = null;
      timeout && clearTimeout(timeout);
      timeout = setTimeout(() => {
        this.visible = false;
      }, 1500);
    },
    showToast(msg) {
      if (this.visible) {
        return;
      }
      this.visible = true;
      this.message = msg;
      this.closeToast();
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
  height: 22vw;
}
.illustration {
  font-size: 12px;
  color: #333;
  padding: 0 0 20px;
  white-space: pre-wrap;
}
</style>
