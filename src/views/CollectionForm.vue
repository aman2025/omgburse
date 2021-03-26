<template>
  <div class="order">
    <OutView :title="lang.locale.fillInPersonalInformation" :isBack="true" />
    <div class="out-wraper">
      <Input :placeholder="lang.locale.enterPayName" iconuser="icon-q07" :hasIcon="true" objkey="pay_name" v-model:formData="collectionForm" />
      <Input :placeholder="lang.locale.enterPayMobile" iconuser="icon-q07" :hasIcon="true" objkey="pay_mobile" v-model:formData="collectionForm" />
      <Input :placeholder="lang.locale.enterDocumentId" iconuser="icon-q07" :hasIcon="true" objkey="document_id" v-model:formData="collectionForm" />
      <Input :placeholder="lang.locale.enterAccountNumber" iconuser="icon-q07" :hasIcon="true" objkey="account_number" v-model:formData="collectionForm" />
      <Input :placeholder="lang.locale.enterAccountDigit" iconuser="icon-q07" :hasIcon="true" objkey="account_digit" v-model:formData="collectionForm" />
      <!-- thebank 下拉 -->
      <div class="sel-ipt-wrap">
        <i></i>
        <select name="" id="" class="sel-ipt" v-model="collectionForm.thebank">
          <option v-for="item in banklist" :key="item.id" :value="item.id">{{ item.title }}</option>
        </select>
        <span class="caret"></span>
      </div>
      <Input placeholder="enter branch code" iconuser="icon-q07" :hasIcon="true" objkey="branch_code" v-model:formData="collectionForm" />
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
        pay_name: '',
        pay_mobile: '',
        document_id: '',
        account_number: '',
        account_digit: '',
        branch_code: '',
        thebank: '22'
      },
      visible: false,
      banklist: '',
      message: ''
    });

    // Get User BankInfo
    var userBankUrl = '/Api/Bank/GetUserBankInfot';
    const getUserBankInfo = () => request.get(userBankUrl);
    getUserBankInfo()
      .then(res => {
        state.collectionForm.pay_name = res.data.pay_name;
        state.collectionForm.pay_mobile = res.data.pay_mobile;
        state.collectionForm.document_id = res.data.document_id;
        state.collectionForm.document_id = res.data.document_id;
        state.collectionForm.account_number = res.data.account_number;
        state.collectionForm.branch_code = res.data.branch_code;
        state.collectionForm.thebank = res.data.thebank;
      })
      .catch(() => {});

    // banklist
    const bankurl = '/Api/Bank/banklistt';
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
        const url = '/Api/Bank/bankinfot';
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
        pay_name: 'pay name cannot be empty',
        pay_mobile: 'pay mobile cannot be empty',
        document_id: 'document id cannot be empty',
        account_number: 'account number cannot be empty',
        account_digit: 'account digit cannot be empty',
        branch_code: 'branch code cannot be empty',
        thebank: this.lang.locale.theBankCannotBeEmpty
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
      if (vals.filter(v => v).length === 7) {
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
