<template>
  <div class="bank-information">
    <OutView title="Fill in personal information" :isBack="true" />

    <div class="out-wraper">
      <div class="form-title">Bank information</div>
      <Input placeholder="Enter your name" iconuser="icon-q01" :hasIcon="true" objkey="uname" v-model:formData="accoutForm" />
      <Input placeholder="Enter your mobile phone number" iconuser="icon-q02" :hasIcon="true" objkey="uphone" v-model:formData="accoutForm" />
      <!-- 下拉 -->
      <div class="sel-ipt-wrap ">
        <i></i>
        <select name="" id="" class="sel-ipt" v-model="thebank">
          <option v-for="item in banklist" :key="item.id" :value="item.id">{{ item.title }}</option>
        </select>
        <span class="caret"></span>
        <div class="pholder">{{ thebank == '' ? 'Select your bank name' : '' }}</div>
      </div>
      <Input placeholder="Enter your bank name" iconuser="icon-q04" :hasIcon="true" objkey="bankuname" v-model:formData="accoutForm" />
      <Input placeholder="Enter your bank account" iconuser="icon-q03" :hasIcon="true" objkey="bankcode" v-model:formData="accoutForm" />
      <Input type="password" placeholder="Enter password" iconuser="icon-q05" :hasIcon="true" objkey="password" v-model:formData="accoutForm" />
    </div>
    <Button btnText="save" theme="primary" class="tipBtn" @click="saveAccount" />
    <Toast v-show="visible" :message="message" />
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import Toast from '@/components/Toast.vue';
import { reactive, toRefs } from 'vue';
import request from '../utils/request';

export default {
  name: 'BankInformation',
  components: {
    OutView,
    Button,
    Toast,
    Input
  },
  setup() {
    const state = reactive({
      accoutForm: { uname: '', uphone: '', bankcode: '', bankuname: '', password: '', thebank: '' },
      visible: false,
      thebank: '',
      banklist: [],
      message: ''
    });
    // userinfo
    var userUrl = '/Api/Account/UserInfo';
    const getUserinfo = () => request.get(userUrl);
    getUserinfo()
      .then(res => {
        state.accoutForm.uname = res.data.uname;
        state.accoutForm.uphone = res.data.uphone;
        state.accoutForm.bankcode = res.data.bankcode;
        state.accoutForm.bankuname = res.data.bankuname;
        state.accoutForm.thebank = res.data.bankuname;
        state.thebank = res.data.thebank;
      })
      .catch(() => {});

    //banklist
    const url = '/Api/System/banklist';
    const getBankList = () => request.post(url);
    getBankList()
      .then(res => {
        state.banklist = res.data;
      })
      .catch(() => {});

    return {
      ...toRefs(state)
    };
  },

  methods: {
    saveAccount() {
      var vals = this.accoutValidate();
      if (vals) {
        // 校验通过并获取值
        const tokenVal = JSON.parse(localStorage.token);
        const accoutForm = Object.assign({}, this.accoutForm, { token: tokenVal, thebank: this.thebank });
        const url = '/Api/Account/Addinfo';
        const addinfo = user => request.post(url, user);
        addinfo(accoutForm)
          .then(res => {
            if (res.status == 1) {
              this.$router.back(-1);
            } else {
              this.showToast(res.msg);
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
        uname: 'uname cannot be empty',
        uphone: 'uphone cannot be empty',
        bankcode: 'bankcode cannot be empty',
        bankuname: 'your bank name cannot be empty',
        password: 'password cannot be empty',
        thebank: 'bank cannot be empty'
      };
      var errorsLog = [];
      var vals = Object.keys(errors).map(key => {
        const val = this.accoutForm[key];
        if (!val) {
          errorsLog.push(errors[key]);
        }
        return val;
      });
      if (vals.filter(v => v).length !== 6) {
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
.form-title {
  padding-left: 28px;
}
.sel-ipt {
  position: relative;
  height: 38px;
  line-height: 38px;
  padding: 0 10px 0 50px;
  font-size: 14px;
  width: 100%;
  color: #555;
  border-bottom: 1px solid #a1a1a1;
  background-color: transparent !important;
  z-index: 2;
}
.sel-ipt-wrap {
  position: relative;
  padding: 10px 20px;
}
.sel-ipt-wrap > i {
  display: block;
  position: absolute;
  top: 15px;
  left: 28px;
  width: 29px;
  height: 25px;
  background-image: url(../assets/icon-q04.png);
  background-size: 100%;
}
.sel-ipt-wrap .caret {
  position: absolute;
  top: 25px;
  right: 25px;
  display: block;
  border-right: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
  border-left: 5px solid #5096ac;
  height: 0;
  width: 0;
  z-index: 99;
  transform: rotate3d(0, 0, 1, 90deg);
}
.sel-ipt-wrap .pholder {
  position: absolute;
  top: 5px;
  left: 5px;
  top: 15px;
  left: 69px;
  color: #555;
  z-index: 1;
}
</style>
