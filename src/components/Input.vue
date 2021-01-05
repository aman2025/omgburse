<template>
  <div class="wraper">
    <i v-if="hasIcon" :class="iconuser"></i>
    <input :type="type ? type : 'text'" :placeholder="placeholder" @input="getValue" :class="'ipt ' + (hasIcon ? 'iptpadd' : '')" />
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'Button',
  props: {
    placeholder: String,
    iconuser: String,
    hasIcon: Boolean,
    formData: Object,
    type: String,
    objkey: String
  },
  setup(props) {
    var newFormData = ref(props.formData);
    return {
      newFormData
    };
  },
  methods: {
    getValue(event) {
      const el = event.target;
      this.newFormData[this.objkey] = el.value;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ipt {
  border-bottom: 1px solid #a1a1a1;
  height: 40px;
  line-height: 40px;
  width: 100%;
  padding: 0 15px;
  background-color: transparent;
}
.wraper {
  padding: 10px 20px;
  position: relative;
}
.wraper i {
  display: block;
  position: absolute;
  top: 18px;
  left: 28px;
  width: 29px;
  height: 25px;
}
.wraper .iptpadd {
  padding-left: 50px;
}
.wraper i.icon-q01 {
  background-image: url(../assets/icon-q01.png);
  background-size: 100%;
}
.wraper i.icon-q02 {
  background-image: url(../assets/icon-q02.png);
  background-size: 100%;
}
.wraper i.icon-q03 {
  background-image: url(../assets/icon-q03.png);
  background-size: 100%;
}
.wraper i.icon-q04 {
  background-image: url(../assets/icon-q04.png);
  background-size: 100%;
}
.wraper i.icon-q05 {
  background-image: url(../assets/icon-q05.png);
  background-size: 100%;
}
.wraper i.icon-q06 {
  background-image: url(../assets/icon-q06.png);
  background-size: 100%;
}
</style>
