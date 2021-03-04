<template>
  <div>
    <div class="marquee">
      <h3>{{ lang.locale.memberDynamic }}</h3>
      <ul>
        <li v-for="item in memberDynamic" :key="item.id">
          <span>{{ item.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import request from '../utils/request';

export default {
  name: 'Marquee',
  props: {},
  components: {},
  inject: ['lang'],
  setup() {
    let memberDynamic = ref([]);
    // scrollAnimate
    const scrollAnimate = () => {
      var lists = memberDynamic.value;
      setTimeout(() => {
        lists.push(lists[0]);
        lists.shift();
      }, 500);
    };
    // onMounted
    onMounted(() => {
      const dynamicUrl = '/Api/System/Dynamic';
      const getDynamic = () => request.get(dynamicUrl);
      getDynamic()
        .then(res => {
          console.log(res.data);
          memberDynamic.value = res.data;
          setInterval(scrollAnimate, 1500);
        })
        .catch(() => {});
    });
    return {
      memberDynamic
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.marquee {
  padding: 10px 10px 5px;
  margin-top: 0;
}
.marquee h3 {
  font-weight: bold;
  padding: 10px 0 3px;
  font-size: 16px;
}
.marquee ul {
  height: 118px;
  overflow: hidden;
  border-radius: 8px;
  background-color: #e6e6ec;
  padding: 10px;
  border-bottom: 12px solid #e6e6ec;
}
.marquee li {
  font-weight: bold;
  font-weight: normal;
  font-size: 13px;
  padding: 2px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
