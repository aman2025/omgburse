<template>
  <div class="product-type">
    <div class="type-bar" v-for="item in depositLists" :key="item.id">
      <div class="type-bar-name">
        <span>Type</span>
        <em>{{ item.title }}</em>
      </div>
      <div class="type-bar-info">
        <h3>
          One day: <span>Interest rate +{{ $filters.toPercent(item.per) }}</span>
        </h3>
        <h5>
          [set] <em>{{ item.days }}</em> days
        </h5>
        <button>+{{ $filters.toPercent(item.days * item.per) }}</button>
      </div>
      <div class="type-bar-btn" @click="onDeposite(item.id)">
        <span>Deposit</span>
      </div>
    </div>
    <Dialog v-if="show" :content="content" :onOk="onOk" :onCancel="onCancel" title="tip" :hasHead="false">
      <template v-slot>
        <div class="depositeText">
          <span>amount:</span>
          <input type="text" class="ipt02" v-model="money" />
        </div>
      </template>
    </Dialog>
    <Loading v-if="isLoad" />
    <Toast v-show="visible" :message="message" />
  </div>
</template>

<script>
import Dialog from '@/components/Dialog.vue';
import Toast from '@/components/Toast.vue';
import { reactive, ref, toRefs } from 'vue';
import request from '../utils/request';
export default {
  name: 'ProductType',
  components: {
    Dialog,
    Toast
  },
  props: {
    depositLists: Array
  },
  setup() {
    const toastState = reactive({
      visible: false,
      message: ''
    });
    // 确定dialog
    const show = ref(false);
    const content = ref('');
    const depositeId = ref('');
    const money = ref('');
    const callback = ref(function() {});
    const onOk = ref(val => {
      show.value = val;
      callback.value();
    });
    //关闭dialog
    const onCancel = ref(val => {
      show.value = val;
    });
    const isLoad = ref(false);
    // 点击 deposite
    const onDeposite = sid => {
      depositeId.value = sid;
      show.value = true;
      callback.value = depositeSubmit;
    };
    const depositeSubmit = () => {
      // 金额为空返回
      if (!money.value) {
        toastState.visible = true;
        toastState.message = 'money can not be empty';
        return;
      }
      const url = '/Api/Deposit/Addthedeposit';
      const params = {
        id: depositeId.value,
        money: money.value
      };
      const addthedeposit = param => request.get(url, param);
      addthedeposit({
        params: params,
        beforesend() {
          isLoad.value = true;
        }
      })
        .then(res => {
          isLoad.value = false;
          console.log(res);
          showToast(res.msg);
        })
        .catch(() => {});
    };

    // 显示隐藏toast
    const showToast = msg => {
      if (toastState.visible) {
        return;
      }
      toastState.visible = true;
      toastState.message = msg;
      var timeout = null;
      timeout && clearTimeout(timeout);
      timeout = setTimeout(() => {
        toastState.visible = false;
      }, 1500);
    };
    //return
    return {
      isLoad,
      content,
      callback,
      onOk,
      onCancel,
      onDeposite,
      depositeId,
      money,
      ...toRefs(toastState),
      show
    };
  },
  methods: {
    deposit() {
      // this.$router.push();
    }
  }
};
</script>

<style scoped lang="scss">
.product-type {
  padding: 0;
}
.product-type .type-bar {
  background-color: #fff;
  border-radius: 5px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  overflow: hidden;
  margin-bottom: 10px;
}
.product-type .type-bar .type-bar-name {
  width: 60px;
  text-align: center;
  background-color: #2185bf;
}
.product-type .type-bar .type-bar-btn {
  position: relative;
  width: 80px;
  text-align: center;
  padding: 20px 10px 10px;
}
.product-type .type-bar .type-bar-btn :after {
  position: absolute;
  top: 5px;
  left: 0px;
  bottom: 5px;
  content: '';
  display: block;
  width: 5px;
  border-right: 1px dashed #e0e0e0;
}
.product-type .type-bar .type-bar-info {
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  width: 100%;
  border: none;
  padding: 5px;
  height: 15vw;
}
.product-type .type-bar .type-bar-info button {
  position: absolute;
  top: 7vw;
  right: 1vw;
  border-radius: 3px;
  background-color: #ff2525;
  border: none;
  text-align: center;
  padding: 3px 10px;
  color: #ffffff;
}
.product-type .type-bar .type-bar-name span {
  color: #fcef7f;
  font-size: 18px;
  display: block;
}
.product-type .type-bar .type-bar-name em {
  color: #fff;
  font-size: 20px;
  display: block;
  text-align: center;
}
.product-type .type-bar .type-bar-info h3 {
  font-size: 12px;
}
.product-type .type-bar .type-bar-info h3 span {
  color: #fb6400;
}
.product-type .type-bar .type-bar-info h5 {
  font-size: 14px;
}
.product-type .type-bar .type-bar-info h5 em {
  margin: 0 5px;
}
.product-type .type-bar .type-bar-btn span {
  color: #16bc05;
}
.depositeText {
  width: 80%;
  margin: 0 auto;
}
.depositeText span {
  display: block;
  text-align: left;
}
.depositeText .ipt02 {
  border-radius: 3px;
  border: 1px solid #999;
  width: 100%;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
}
</style>
