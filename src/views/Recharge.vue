<template>
  <div class="recharge">
    <OutView title="Recharge" :isBack="true" />
    <Toast v-show="visible" :message="message" />
    <div class="box-ipt">
      <h3>Recharge amount</h3>
      <div>
        <span class="pri-symbol">₹</span>
        <input type="text" readonly v-model="money" />
      </div>
      <h3 class="typeTitle">Recharge Type</h3>
      <div class="sel-ptype">
        <div><input type="radio" id="scanning" v-model="ptype" value="2" checked /><label for="scanning">Payment by scanning code</label></div>
        <div><input type="radio" id="transfer" v-model="ptype" value="1" /><label for="transfer">Transfer payment</label></div>
      </div>
      <!-- <div class="sel-ipt-wrap ">
        <select name="" id="" class="sel-ipt" v-model="ptype">
          <option value="1">Transfer payment</option>
          <option value="2">Payment by scanning code</option>
        </select>
        <span class="caret"></span>
      </div> -->
    </div>
    <div class="box-opt">
      <ul>
        <li v-for="(item, index) in moneyList" :key="item.id" @click="selectMoney(item.money, index)" :class="{ active: isChange == index }">{{ item.money }}₹</li>
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
      ptype: '',
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
        window.location.href = `${urlOther}?money=${this.money}&token=${tokenVal}&ptype=${this.ptype}`;
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
  padding: 10px 0 10px;
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
.box-ipt div input[type='text'] {
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
.typeTitle {
  padding-top: 10px;
}
//下拉样式
.sel-ipt {
  border-radius: 5px;
  background-color: #fff;
  height: 38px;
  line-height: 38px;
  padding: 0 10px 0 8px;
  font-size: 14px;
  width: 100%;
  color: #555;
}
.sel-ipt-wrap {
  position: relative;
}
.sel-ipt-wrap .caret {
  position: absolute;
  top: 18px;
  right: 12px;
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
// radio 选择
.sel-ptype {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.sel-ptype > div {
  flex: 0 0 48%;
  border: 1px solid #ddd;
  background-color: #ffffff;
  padding: 17px 0;
  text-align: center;
  position: relative;
  font-size: 12px;
}
.sel-ptype label {
  display: block;
  position: absolute;
  top: 0;
  padding: 7px 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 100%;
}
.sel-ptype input[type='radio'] {
  position: absolute;
  top: 0;
  left: 0;
  padding: 17px 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 0;
}
.sel-ptype input[type='radio']:checked {
  background-color: #bde0ea;
}
</style>
