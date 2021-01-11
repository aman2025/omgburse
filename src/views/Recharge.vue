<template>
  <div class="recharge">
    <OutView title="Recharge" :isBack="true" />
    <Toast v-show="visible" :message="message" />
    <div class="box-ipt">
      <h3>Recharge amount</h3>
      <div>
        <span class="pri-symbol">₽</span>
        <input type="text" readonly v-model="money" />
      </div>
    </div>
    <div class="box-opt">
      <ul>
        <li v-for="(item, index) in moneyList" :key="item.id" @click="selectMoney(item.money, index)" :class="{ active: isChange == index }">{{ item.money }}₽</li>
      </ul>
    </div>
    <Button btnText="Recharge" theme="primary" class="tipBtn" @click="recharge" />
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';
import Button from '@/components/Button.vue';
import { reactive, ref, toRefs } from 'vue';
import Toast from '@/components/Toast.vue';
import request from '../utils/request';

export default {
  name: 'Recharge',
  components: {
    OutView,
    Toast,
    Button
  },
  setup() {
    const state = reactive({
      visible: false,
      message: '',
      moneyList: [],
      isChange: -1
    });
    const url = '/Api/Index/Moneylist';
    const rechargeMo = () => request.post(url);
    rechargeMo()
      .then(res => {
        state.moneyList = res.data;
      })
      .catch(() => {});
    // 选中金额
    const money = ref('');
    const selectMoney = (num, idx) => {
      money.value = num;
      if (idx != state.isChange) {
        state.isChange = idx;
      }
    };
    return {
      ...toRefs(state),
      money,
      selectMoney
    };
  },
  methods: {
    recharge() {
      if (this.money) {
        const urlOther = '/Api/Demo/ttopay';
        const tokenVal = JSON.parse(localStorage.token);
        window.location.href = `${urlOther}?money=${this.money}&token=${tokenVal}`;
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
.box-opt {
  padding: 0 0 10px;
}
.box-opt ul {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  flex-flow: row wrap;
}
.box-opt ul li {
  flex: 0 0 22.5%;
  border: 1px solid #ddd;
  padding: 5px 10px;
  margin-right: 3.2%;
  margin-bottom: 10px;
  background-color: #ffffff;
  text-align: center;
}
.box-opt ul li:nth-child(4) {
  margin-right: 0;
}
.box-opt ul li.active {
  background-color: #bde0ea;
}
.pri-symbol {
  position: absolute;
  top: 3px;
  left: 10px;
  z-index: 9;
  font-size: 20px;
}
.recharge {
  padding: 15px 10px;
}
.box-ipt h3 {
  font-size: 16px;
  padding-bottom: 10px;
  font-weight: bold;
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
  padding: 0 10px 0 28px;
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
