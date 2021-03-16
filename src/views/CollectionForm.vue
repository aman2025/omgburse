<template>
  <div class="order">
    <OutView :title="lang.locale.fillInPersonalInformation" :isBack="true" />
    <div class="out-wraper">
      <Input :placeholder="lang.locale.enterYourEmail" iconuser="icon-q07" :hasIcon="true" objkey="email" maxLen="30" v-model:formData="collectionForm" />
      <Input :placeholder="lang.locale.enterYourFirstName" iconuser="icon-q07" :hasIcon="true" objkey="first_name" maxLen="20" v-model:formData="collectionForm" />
      <Input :placeholder="lang.locale.enterYourLastName" iconuser="icon-q07" :hasIcon="true" objkey="last_name" maxLen="20" v-model:formData="collectionForm" />
      <!-- sex下拉 -->
      <div class="sel-ipt-wrap">
        <i></i>
        <select name="" id="" class="sel-ipt" v-model="collectionForm.sex">
          <option value="male">{{ lang.locale.male }}</option>
          <option value="female">{{ lang.locale.female }}</option>
        </select>
        <span class="caret"></span>
      </div>
      <Input :placeholder="lang.locale.enterTheAccount" iconuser="icon-q07" :hasIcon="true" objkey="theaccount" maxLen="50" v-model:formData="collectionForm" />
      <Input :placeholder="lang.locale.enterBankAccountNumber" iconuser="icon-q07" :hasIcon="true" objkey="bank_account_number" maxLen="50" v-model:formData="collectionForm" />
      <!-- thebank 下拉 -->
      <div class="sel-ipt-wrap">
        <i></i>
        <select name="" id="" class="sel-ipt" v-model="collectionForm.thebank">
          <option v-for="item in banklist" :key="item.id" :value="item.id">{{ item.title }}</option>
        </select>
        <span class="caret"></span>
      </div>
      <Input :placeholder="lang.locale.enterBankCode" type="number" iconuser="icon-q07" :hasIcon="true" objkey="bank_code" maxLen="20" v-model:formData="collectionForm" />
      <Input :class="{ 'ipt-date': collectionForm.id_expire_date == '' }" :placeholder="lang.locale.enterExpireDate" type="date" iconuser="icon-q07" :hasIcon="true" objkey="id_expire_date" v-model:formData="collectionForm" />
      <Input :class="{ 'ipt-date': collectionForm.id_issue_date == '' }" :placeholder="lang.locale.enterIssueDate" type="date" iconuser="icon-q07" :hasIcon="true" objkey="id_issue_date" v-model:formData="collectionForm" />
      <Input :class="{ 'ipt-date': collectionForm.birth_date == '' }" :placeholder="lang.locale.enterBirthDate" type="date" iconuser="icon-q07" :hasIcon="true" objkey="birth_date" v-model:formData="collectionForm" />
      <Input :placeholder="lang.locale.enterIdNumber" iconuser="icon-q07" :hasIcon="true" objkey="id_number" maxLen="20" v-model:formData="collectionForm" />
      <!-- id_type下拉 -->
      <div class="sel-ipt-wrap">
        <i></i>
        <select name="" id="" class="sel-ipt" v-model="collectionForm.id_type">
          <option value="identity_card">{{ lang.locale.identity_card }}</option>
          <option value="passport">{{ lang.locale.passport }}</option>
          <option value="driving_licence">{{ lang.locale.driving_licence }}</option>
        </select>
        <span class="caret"></span>
      </div>
      <Input :placeholder="lang.locale.enterMobileArea" iconuser="icon-q07" :hasIcon="true" objkey="mobile_area" maxLen="10" v-model:formData="collectionForm" />
      <Input :placeholder="lang.locale.enterMobile" type="number" iconuser="icon-q07" :hasIcon="true" objkey="mobile" maxLen="20" v-model:formData="collectionForm" />
      <Input :placeholder="lang.locale.enterAddress" iconuser="icon-q07" :hasIcon="true" objkey="address" maxLen="255" v-model:formData="collectionForm" />
      <Input :placeholder="lang.locale.enterCity" iconuser="icon-q07" :hasIcon="true" objkey="city" maxLen="50" v-model:formData="collectionForm" />
    </div>
    <Button :btnText="lang.locale.save" theme="primary" class="tipBtn" @click="saveName" />
    <Toast v-show="visible" :message="message" />
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import { inject, reactive, toRefs } from 'vue';
import request from '../utils/request';

export default {
  name: 'CollectionForm',
  components: {
    OutView,
    Button,
    Input
  },
  setup() {
    const lang = inject('lang');
    const state = reactive({
      collectionForm: {
        sex: lang.locale.male,
        last_name: '',
        first_name: '',
        email: '',
        theaccount: '',
        bank_account_number: '',
        thebank: '22',
        id_expire_date: '',
        id_issue_date: '',
        birth_date: '',
        bank_code: '',
        id_number: '',
        id_type: lang.locale.identity_card,
        mobile: '',
        mobile_area: '',
        address: '',
        city: ''
      },
      visible: false,
      banklist: '',
      message: ''
    });

    // Get User BankInfo
    var userBankUrl = '/Api/Bank/GetUserBankInfo';
    const getUserBankInfo = () => request.get(userBankUrl);
    getUserBankInfo()
      .then(res => {
        state.collectionForm.sex = res.data.sex;
        state.collectionForm.last_name = res.data.last_name;
        state.collectionForm.first_name = res.data.first_name;
        state.collectionForm.email = res.data.email;
        state.collectionForm.theaccount = res.data.theaccount;
        state.collectionForm.bank_account_number = res.data.bank_account_number;
        state.collectionForm.thebank = res.data.thebank;
        state.collectionForm.id_expire_date = res.data.id_expire_date;
        state.collectionForm.id_issue_date = res.data.id_issue_date;
        state.collectionForm.birth_date = res.data.birth_date;
        state.collectionForm.bank_code = res.data.bank_code;
        state.collectionForm.id_number = res.data.id_number;
        state.collectionForm.id_type = res.data.id_type;
        state.collectionForm.mobile = res.data.mobile;
        state.collectionForm.mobile_area = res.data.mobile_area;
        state.collectionForm.address = res.data.address;
        state.collectionForm.city = res.data.city;
      })
      .catch(() => {});

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
      lang
    };
  },
  methods: {
    saveName() {
      var vals = this.collectionValidate();
      if (vals) {
        // 校验通过并获取值
        const tokenVal = JSON.parse(localStorage.token);
        const collectionForm = Object.assign({}, this.collectionForm, { token: tokenVal });
        const url = '/Api/Bank/bankinfo';
        const addName = opts => request.post(url, opts);
        console.log(collectionForm);
        addName(collectionForm).then(res => {
          if (res.status == 1) {
            this.showToast(res.msg);
            setTimeout(() => {
              this.$router.back(-1);
            }, 2000);
          } else {
            this.showToast(res.msg);
          }
        });
      }
    },
    // 表单校验
    collectionValidate() {
      var errors = {
        sex: this.lang.locale.sexCannotBeEmpty,
        last_name: this.lang.locale.lastNameCannotBeEmpty,
        first_name: this.lang.locale.firstNameCannotBeEmpty,
        email: this.lang.locale.emailCannotBeEmpty,
        theaccount: this.lang.locale.theAccountCannotBeEmpty,
        bank_account_number: this.lang.locale.bankAccountNumberCannotBeEmpty,
        thebank: this.lang.locale.theBankCannotBeEmpty,
        id_expire_date: this.lang.locale.idExpireDateCannotBeEmpty,
        id_issue_date: this.lang.locale.idIssueDateCannotBeEmpty,
        birth_date: this.lang.locale.birthDateCannotBeEmpty,
        bank_code: this.lang.locale.bankCodeCannotBeEmpty,
        id_number: this.lang.locale.idNumberCannotBeEmpty,
        id_type: this.lang.locale.idTypeCannotBeEmpty,
        mobile: this.lang.locale.mobileCannotBeEmpty,
        mobile_area: this.lang.locale.mobileAreaCannotBeEmpty,
        address: this.lang.locale.addresCannotBeEmpty,
        city: this.lang.locale.cityCannotBeEmpty
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
      if (vals.filter(v => v).length === 17) {
        // var numReg = /^[0-9]*$/;
        // eslint-disable-next-line no-useless-escape
        var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!emailReg.test(vals[3])) {
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
