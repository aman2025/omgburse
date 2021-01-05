<template>
  <button :class="theme">{{ btnText }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    btnText: String,
    theme: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-left: 14px;
  padding-right: 14px;
  box-sizing: border-box;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  line-height: 2.55555556;
  border-radius: 5px;
  -webkit-tap-highlight-color: transparent;
  overflow: hidden;
  color: #000;
  background-color: #f8f8f8;
  cursor: pointer;
}
button:after {
  content: ' ';
  width: 200%;
  height: 200%;
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  box-sizing: border-box;
  border-radius: 10px;
}
.tipBtn {
  margin-top: 1 2px;
  background: #5096ac;
  width: 256px;
  height: 42px;
  line-height: 42px;
  color: #fff;
}
.primary {
  border-radius: 20px;
  background: linear-gradient(to right, rgb(253, 144, 2), rgb(223, 44, 0));
  width: 80%;
}
</style>
