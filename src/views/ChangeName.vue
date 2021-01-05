<template>
  <div class="order">
    <OutView title="Change Name" :isBack="true" />
    <div class="out-wraper">
      <Input placeholder="Enter your name" iconuser="icon-q01" :hasIcon="true" objkey="uname" v-model:formData="accoutForm" />
    </div>
    <Button btnText="save" theme="primary" class="tipBtn" @click="saveName" />
    <Toast v-show="visible" :message="message" />
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import { reactive, toRefs } from 'vue';
import request from '../utils/request';

export default {
  name: 'ChangeName',
  components: {
    OutView,
    Button,
    Input
  },
  setup() {
    const state = reactive({
      accoutForm: { uname: '' },
      visible: false,
      message: ''
    });
    return {
      ...toRefs(state)
    };
  },
  methods: {
    saveName() {
      var vals = this.accoutValidate();
      if (vals) {
        // 校验通过并获取值
        const accoutForm = Object.assign({}, this.accoutForm);
        const url = '/Api/Account/ChangeName';
        const addName = user => request.post(url, user);
        addName(accoutForm)
          .then(res => {
            if (res.status == 1) {
              this.$router.back(-1);
            } else {
              this.showToast('add name is error!');
            }
          })
          .catch(() => {
            alert('login fail!');
          });
      }
    },
    // 表单校验
    accoutValidate() {
      var errors = {
        uname: 'uname cannot be empty'
      };
      var errorsLog = [];
      var vals = Object.keys(errors).map(key => {
        const val = this.accoutForm[key];
        if (!val) {
          errorsLog.push(errors[key]);
        }
        return val;
      });
      if (vals.filter(v => v).length !== 1) {
        this.showToast(errorsLog[0]);
        return null;
      }
      return vals;
    },
    // 显示隐藏toast
    showToast(msg) {
      if (this.visible) {
        return;
      }
      this.visible = true;
      this.message = msg;
      var timeout = null;
      timeout && clearTimeout(timeout);
      timeout = setTimeout(() => {
        this.visible = false;
      }, 1500);
    }
  }
};
</script>
<style scoped lang="scss">
.out-wraper {
  padding: 50px 0 70px;
}
</style>
