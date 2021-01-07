<template>
  <div>
    <!-- <Message /> -->
    <button @click="show">pop</button>
    <div>{{ visibleGlobal.text }}</div>
    <div>{{ location.username }}</div>
  </div>
</template>
<script>
// import Message from '@/components/Message.vue';
export default {
  name: 'MessageTest',
  components: {},
  setup() {
    // return
    return {};
  },
  inject: ['visibleGlobal', 'location'],
  methods: {
    show() {
      // this.visibleGlobal.isVisible = true;
      // this.visibleGlobal.text = 'ok';
      this.location.username = 'AA';
      console.log('show...');
    }
  }
};
</script>
<style scoped lang="scss"></style>
