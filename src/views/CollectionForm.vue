<template>
  <div class="order">
    <OutView title="收款单" :isBack="true" />
    <div class="out-wraper">
      <Input placeholder="email" iconuser="icon-q07" :hasIcon="true" objkey="email" maxLen="30" v-model:formData="collectionForm" />
      <Input placeholder="first name" iconuser="icon-q07" :hasIcon="true" objkey="firstName" maxLen="20" v-model:formData="collectionForm" />
      <Input placeholder="last name" iconuser="icon-q07" :hasIcon="true" objkey="lastName" maxLen="20" v-model:formData="collectionForm" />
      <!-- sex下拉 -->
      <div class="sel-ipt-wrap">
        <i></i>
        <select name="" id="" class="sel-ipt" v-model="sex" @change="sexSelect">
          <option value="male" selected>male</option>
          <option value="female">female</option>
        </select>
        <span class="caret"></span>
      </div>
      <Input placeholder="city" iconuser="icon-q07" :hasIcon="true" objkey="city" maxLen="50" v-model:formData="collectionForm" />
      <Input placeholder="address" iconuser="icon-q07" :hasIcon="true" objkey="address" maxLen="255" v-model:formData="collectionForm" />
      <Input placeholder="mobile area" iconuser="icon-q07" :hasIcon="true" objkey="mobileArea" maxLen="10" v-model:formData="collectionForm" />
      <Input placeholder="mobile" iconuser="icon-q07" :hasIcon="true" objkey="mobile" maxLen="20" v-model:formData="collectionForm" />
      <!-- id_type下拉 -->
      <div class="sel-ipt-wrap">
        <i></i>
        <select name="" id="" class="sel-ipt" v-model="idType" @change="idTypeSelect">
          <option value="identity_card" selected>identity_card</option>
          <option value="passport">passport</option>
          <option value="driving_licence">driving_licence</option>
        </select>
        <span class="caret"></span>
      </div>
      <Input placeholder="id number" type="date" iconuser="icon-q07" :hasIcon="true" objkey="idNumber" v-model:formData="collectionForm" />
    </div>
    <Button :btnText="lang.locale.save" theme="primary" class="tipBtn" @click="saveName" />
    <Toast v-show="visible" :message="message" />
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import { reactive, toRefs } from 'vue';
// import request from '../utils/request';

export default {
  name: 'CollectionForm',
  components: {
    OutView,
    Button,
    Input
  },
  inject: ['lang'],
  setup() {
    const state = reactive({
      collectionForm: { email: '', firstName: '', lastName: '', sex: '', city: '', address: '', mobileArea: '', mobile: '', idType: '', idNumber: '' },
      visible: false,
      sex: 'male',
      idType: 'identity_card',
      message: ''
    });
    return {
      ...toRefs(state)
    };
  },
  methods: {
    saveName() {
      var vals = this.collectionValidate();
      if (vals) {
        console.log('校验通过...');
        // 校验通过并获取值
        // const tokenVal = JSON.parse(localStorage.token);
        // const collectionForm = Object.assign({}, this.collectionForm, { token: tokenVal });
        // const url = '/Api/Account/ChangeName';
        // const addName = user => request.post(url, user);
        // addName(collectionForm)
        //   .then(res => {
        //     if (res.status == 1) {
        //       this.$router.back(-1);
        //     } else {
        //       this.showToast(res.msg);
        //     }
        //   })
        //   .catch(() => {
        //     alert('login fail!');
        //   });
      }
    },
    // 表单校验
    collectionValidate() {
      var errors = {
        email: 'email cannot be empty',
        firstName: 'first name cannot be empty',
        lastName: 'last name cannot be empty',
        sex: 'sex cannot be empty',
        city: 'city cannot be empty',
        address: 'address cannot be empty',
        mobileArea: 'mobile area cannot be empty',
        mobile: 'mobile cannot be empty',
        idType: 'id type cannot be empty',
        idNumber: 'id type cannot be empty'
      };
      var errorsLog = [];
      var vals = Object.keys(errors).map(key => {
        const val = this.collectionForm[key];
        if (!val) {
          errorsLog.push(errors[key]);
        }
        return val;
      });
      if (vals.filter(v => v).length === 10) {
        // var numReg = /^[0-9]*$/;
        // eslint-disable-next-line no-useless-escape
        var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!emailReg.test(vals[0])) {
          this.showToast('email is error!');
          return null;
        }
        return vals;
      } else {
        this.showToast(errorsLog[0]);
      }

      return null;
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
  padding: 10px 0 20px;
}
.sel-ipt-wrap > i {
  background-image: url(../assets/icon_modify.png);
}
</style>
