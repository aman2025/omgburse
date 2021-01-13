<template>
  <div>
    <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
    <input type="text" :value="text" @input="$emit('update:text', $event.target.value)" />
  </div>
</template>
<script>
import { watch } from 'vue';
export default {
  name: 'TestVmodel',
  components: {},
  props: {
    modelValue: String,
    text: String
  },
  emits: ['update:modelValue', 'update:text'],
  setup(props, context) {
    // close
    let timeout = null;
    let i = 0;
    const close = () => {
      timeout && clearTimeout(timeout);
      timeout = setTimeout(() => {
        console.log(12);
        context.emit('update:text', 'close...' + i++);
      }, 1230);
    };
    // 监听显示属性
    watch(
      () => props.modelValue,
      () => {
        console.log('watch...');
        close();
      }
    );
    // return
    return {};
  },
  methods: {}
};
</script>
<style scoped lang="scss">
input {
  border: 1px solid #000;
  margin: 0 10px;
}
</style>
