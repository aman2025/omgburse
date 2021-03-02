<template>
  <div class="order">
    <OutView title="collection" :isBack="true" />
    <div class="out-wraper">
      <Input placeholder="email" iconuser="icon-q07" :hasIcon="true" objkey="email" maxLen="30" v-model:formData="collectionForm" />
      <Input placeholder="first name" iconuser="icon-q07" :hasIcon="true" objkey="first_name" maxLen="20" v-model:formData="collectionForm" />
      <Input placeholder="last name" iconuser="icon-q07" :hasIcon="true" objkey="last_name" maxLen="20" v-model:formData="collectionForm" />
      <!-- sex下拉 -->
      <div class="sel-ipt-wrap">
        <i></i>
        <select name="" id="" class="sel-ipt" v-model="sex">
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <span class="caret"></span>
      </div>
      <Input placeholder="the account" iconuser="icon-q07" :hasIcon="true" objkey="theaccount" maxLen="50" v-model:formData="collectionForm" />
      <Input placeholder="bank account number" iconuser="icon-q07" :hasIcon="true" objkey="bank_account_number" maxLen="50" v-model:formData="collectionForm" />
      <!-- thebank 下拉 -->
      {{ thebank }}
      <div class="sel-ipt-wrap">
        <i></i>
        <select name="" id="" class="sel-ipt" v-model="thebank">
          <option v-for="item in banklist" :key="item.id" :value="item.id">{{ item.title }}</option>
        </select>
        <span class="caret"></span>
      </div>
      <Input placeholder="id expire date" type="date" iconuser="icon-q07" :hasIcon="true" objkey="id_expire_date" v-model:formData="collectionForm" />
      <Input placeholder="id issue date" type="date" iconuser="icon-q07" :hasIcon="true" objkey="id_issue_date" v-model:formData="collectionForm" />
      <Input placeholder="id number" iconuser="icon-q07" :hasIcon="true" objkey="id_number" maxLen="20" v-model:formData="collectionForm" />
      <!-- id_type下拉 -->
      <div class="sel-ipt-wrap">
        <i></i>
        <select name="" id="" class="sel-ipt" v-model="id_type">
          <option value="identity_card">identity_card</option>
          <option value="passport">passport</option>
          <option value="driving_licence">driving_licence</option>
        </select>
        <span class="caret"></span>
      </div>
      <Input placeholder="mobile area" iconuser="icon-q07" :hasIcon="true" objkey="mobile_area" maxLen="10" v-model:formData="collectionForm" />
      <Input placeholder="mobile" type="number" iconuser="icon-q07" :hasIcon="true" objkey="mobile" maxLen="20" v-model:formData="collectionForm" />
      <Input placeholder="address" iconuser="icon-q07" :hasIcon="true" objkey="address" maxLen="255" v-model:formData="collectionForm" />
      <Input placeholder="city" iconuser="icon-q07" :hasIcon="true" objkey="city" maxLen="50" v-model:formData="collectionForm" />
    </div>
    <Button :btnText="lang.locale.save" theme="primary" class="tipBtn" @click="saveName" />
    <Toast v-show="visible" :message="message" />
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import { reactive, ref, toRefs } from 'vue';
import request from '../utils/request';

export default {
  name: 'CollectionForm',
  components: {
    OutView,
    Button,
    Input
  },
  inject: ['lang'],
  setup() {
    const sex = ref('male');
    const id_type = ref('identity_card');
    const thebank = ref('');
    const state = reactive({
      collectionForm: {
        sex: sex,
        last_name: '',
        first_name: '',
        email: '',
        theaccount: '',
        bank_account_number: '',
        thebank: thebank,
        id_expire_date: '',
        id_issue_date: '',
        id_number: '',
        id_type: id_type,
        mobile: '',
        mobile_area: '',
        address: '',
        city: ''
      },
      visible: false,
      banklist: '',
      message: ''
    });

    // banklist
    const bankurl = '/Api/Bank/banklist';
    const getBankList = () => request.get(bankurl);
    getBankList()
      .then(res => {
        state.banklist = res.data;
      })
      .catch(() => {});

    return {
      ...toRefs(state),
      sex,
      thebank,
      id_type
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
        sex: 'sex cannot be empty',
        last_name: 'last name cannot be empty',
        first_name: 'first name cannot be empty',
        email: 'email cannot be empty',
        theaccount: 'the account cannot be empty',
        bank_account_number: 'bank account number cannot be empty',
        thebank: 'the bank cannot be empty',
        id_expire_date: 'id expire date cannot be empty',
        id_issue_date: 'id issue date cannot be empty',
        id_number: 'id type cannot be empty',
        id_type: 'id type cannot be empty',
        mobile: 'mobile cannot be empty',
        mobile_area: 'mobile area cannot be empty',
        address: 'address cannot be empty',
        city: 'city cannot be empty'
      };
      var errorsLog = [];
      var vals = Object.keys(errors).map(key => {
        const val = this.collectionForm[key];
        console.log(val);
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
