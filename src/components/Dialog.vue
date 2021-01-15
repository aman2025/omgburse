<template>
  <teleport to="body">
    <div v-show="modelValue">
      <div class="dialog">
        <h3 class="dl-hd">
          <span v-show="hasHead">{{ title }}</span>
        </h3>
        <h3 class="dl-bd">
          {{ content }}
          <slot></slot>
        </h3>
        <h3 class="dl-ft">
          <button class="cancel" @click="onClose" v-show="type == 'info' ? false : true">NO</button>
          <button class="ok" @click="onOk">YES</button>
        </h3>
      </div>
      <div class="dialog-mask"></div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    modelValue: Boolean,
    content: String,
    title: String,
    hasHead: Boolean,
    type: String,
    ok: Function
  },
  emits: ['update:modelValue', 'ok'],
  setup(props, context) {
    // 点击确定
    const onOk = () => {
      onClose();
      context.emit('ok'); // 触发父组件的事件，类似回调
    };

    // 点击取消
    const onClose = () => {
      context.emit('update:modelValue', false);
    };
    return {
      onOk,
      onClose
    };
  },
  methods: {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dialog-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
}
.dialog {
  position: relative;
  border: 2px solid #5096ab;
  position: fixed;
  border-radius: 5px;
  background-color: #fff;
  width: 95%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  min-height: 200px;
  z-index: 99999;
}
.dialog .dl-hd {
  height: 25px;
  font-size: 14px;
  padding: 5px 0 0 5px;
}
.dialog .dl-bd {
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  padding: 20px;
}
.dialog .dl-ft {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  justify-content: center;
}
.dialog .dl-ft button {
  height: 28px;
  color: #ffffff;
  line-height: 28px;
  border-radius: 3px;
  text-align: center;
  width: 100px;
  margin: 0 10px;
}
.dialog .dl-ft .ok {
  background-color: #4765fd;
}
.dialog .dl-ft .cancel {
  background-color: #ff7335;
}
.btntest {
  border: 1px solid #000;
}
</style>
