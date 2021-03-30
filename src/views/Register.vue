<template class="login">
  <div class="login">
    <div class="login-head">
      <img src="../assets/login-top.png" />
    </div>
    <div class="login-bd">
      <div class="phone-prev-warp">
        <span class="phone-prev">+55</span>
        <Input :placeholder="lang.locale.enterYourPhone" objkey="username" v-model:formData="loginForm" iconuser="icon-q02" :hasIcon="true" maxLen="11" class="ipadd" />
      </div>
      <div class="phone-prev-warp get-code">
        <span class="btn-code" v-if="mins == 60 || mins == 0" @click="getAuthCode">{{ lang.locale.getCode }}</span>
        <span class="btn-code disabled" v-else>{{ lang.locale.after }} {{ mins }}s {{ lang.locale.reacquire }} </span>
        <Input :placeholder="lang.locale.authCode" objkey="authCode" v-model:formData="loginForm" iconuser="icon-q03" :hasIcon="true" />
      </div>
      <div>
        <Input type="password" :placeholder="lang.locale.enterYourPassword" objkey="password" v-model:formData="loginForm" iconuser="icon-q05" :hasIcon="true" />
      </div>
      <div>
        <Input type="password" :placeholder="lang.locale.repeatYourPassword" objkey="repassword" v-model:formData="loginForm" iconuser="icon-q06" :hasIcon="true" />
      </div>
      <div class="phone-prev-warp">
        <span class="phone-prev">{{ lang.locale.shareId }}</span>
        <Input placeholder="" objkey="upid" v-model:formData="loginForm" iconuser="icon-q03" :hasIcon="true" class="ipadd2" />
      </div>
      <!-- <div>
        <Input placeholder="Enter upid" objkey="upid" v-model:formData="loginForm" iconuser="icon-q03" :hasIcon="true" />
      </div> -->
      <div class="login-btn-wrap">
        <Button :btnText="lang.locale.register" theme="primary" class="tipBtn" @click="handleSubmit" />
      </div>
      <div class="login-register">
        <span @click="goLogin">{{ lang.locale.login }}</span>
      </div>
    </div>
    <Toast v-show="visible" :message="message" />
    <!-- <img src="../assets/app.png" class="app" alt="" @click="appDownload" /> -->
    <Dialog v-if="show" :content="content" :onOk="onOk" :onCancel="onCancel" title="tip" :hasHead="false" />
  </div>
</template>
<script>
import request from '../utils/request';
import { toRefs, reactive, inject, ref } from 'vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import Toast from '@/components/Toast.vue';
import { useRoute } from 'vue-router';
import Dialog from '@/components/Dialog.vue';

export default {
  name: 'Register',
  components: { Input, Button, Toast, Dialog },
  inject: ['lang'],
  setup() {
    // app download url
    const appUrl = inject('appUrl');
    const appDownload = () => {
      window.location.href = appUrl.value;
    };
    // const { ctx } = getCurrentInstance();
    const router = useRoute();
    const params = router.query;
    const state = reactive({
      loginForm: { username: '', authCode: '', password: '', repassword: '', upid: params.upid },
      visible: false,
      message: '',
      mins: 60,
      isApp: params.app,
      content: 'Baixar agora app'
    });
    // dialog show
    const show = ref(false);
    // 响应式回调方法，dialog点击ok
    const callback = ref(function() {});
    // 确定dialog
    const onOk = ref(val => {
      show.value = val;
      callback.value();
    });
    // 关闭dialog
    const onCancel = ref(val => {
      show.value = val;
    });

    return {
      appDownload,
      ...toRefs(state),
      params,
      onOk,
      onCancel,
      show,
      callback
    };
  },
  methods: {
    handleSubmit() {
      var _this = this;
      var vals = this.loginValidate();
      if (vals) {
        // 校验通过并获取值
        const loginForm = Object.assign({}, this.loginForm);
        const url = '/Api/User/register';
        const login = user => request.post(url, user);
        console.log(loginForm);
        login(loginForm)
          .then(res => {
            // localStorage.setItem('token', JSON.stringify(res.data));
            if (res.status == 1) {
              if (_this.isApp) {
                //  跳转到下载地址
                _this.show = true;
                _this.callback = () => {
                  _this.appDownload();
                };
              } else {
                _this.$router.push('/');
              }
            } else {
              _this.showToast(res.msg);
            }
          })
          .catch(() => {
            alert('login fail!');
          });
      }
    },
    goLogin() {
      this.$router.push('/Login');
    },
    getAuthCode() {
      //获取验证码
      if (!this.loginForm.username) {
        this.showToast(this.lang.locale.phoneEmpty);
        return;
      }
      const codeUrl = `/Api/User/getcode/username/${this.loginForm.username}`;
      console.log(codeUrl);
      const getCode = () => request.get(codeUrl);
      getCode()
        .then(res => {
          this.showToast(res.msg);
          if (res.status !== 0) {
            setTimeout(this.waitOneMinute, 1000);
          }
        })
        .catch(() => {});
    },
    waitOneMinute() {
      let timeout;
      timeout = setInterval(() => {
        this.mins--;
        if (this.mins == 0) {
          clearInterval(timeout);
          this.mins = 60;
        }
      }, 1000);
    },
    loginValidate() {
      var errors = {
        username: this.lang.locale.phoneEmpty,
        authCode: this.lang.locale.authcodeEmpty,
        password: this.lang.locale.passwordEmpty,
        repassword: this.lang.locale.repasswordEmpty,
        upid: this.lang.locale.shareIDEmpty
      };
      var errorsLog = [];
      var vals = Object.keys(errors).map(key => {
        const val = this.loginForm[key];
        if (!val) {
          errorsLog.push(errors[key]);
          console.log(errors[key]);
        }
        return val;
      });
      if (vals.filter(v => v).length !== 5) {
        this.showToast(errorsLog[0]);
        return null;
      }
      var numReg = /^[0-9]*$/;
      if (!numReg.test(vals[0]) || vals[0].length != 11) {
        this.showToast('your phone number is error!');
        return null;
      }
      const [password, repassword] = ['password', 'repassword'].map(k => this.loginForm[k]);
      if (password !== repassword) {
        this.showToast(this.lang.locale.passwordInconsistent);
        return null;
      }
      return vals;
    },
    closeToast() {
      var timeout = null;
      timeout && clearTimeout(timeout);
      timeout = setTimeout(() => {
        this.visible = false;
      }, 1500);
    },
    showToast(msg) {
      this.visible = true;
      this.message = msg;
      this.closeToast();
    }
  }
};
</script>
<style scoped lang="scss">
.login {
  height: 100%;
  width: 100%;
  background-image: url(../assets/loginbg.png);
  background-size: 100%;
  background-position: left bottom;
  position: relative;
}
.login-bd {
  padding: 35px 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #f5f5f5;
  margin-top: -10px;
  position: relative;
}
.login-btn-wrap {
  padding-top: 20px;
}
.login-remember {
  padding: 15px 0 0 32px;
}
.checkbox {
  display: inline-block;
  vertical-align: middle;
  width: 19px;
  height: 19px;
  margin-right: 2px;
  background-image: url(../assets/check.png);
}

.checkbox:checked {
  background-image: url(../assets/check.png);
  background-position: 0 -19px;
}
.login-register {
  padding-top: 20px;
  text-align: center;
  color: #fb6500;
  font-weight: 700;
}
.login-register em {
  margin: 0 10px;
}
.get-code,
.phone-prev-warp {
  position: relative;
}
.phone-prev-warp .phone-prev {
  position: absolute;
  top: 20px;
  left: 68px;
}
.upid {
  padding: 5px 0 0 32px;
  font-weight: bold;
}
.upid span {
  font-weight: normal;
}
.get-code .btn-code {
  position: absolute;
  top: 20px;
  right: 20px;
  border: 1px solid #f47401;
  padding: 0 5px;
  background-color: #fc8c02;
  color: #fff;
  border-radius: 3px;
  z-index: 99;
}
</style>
