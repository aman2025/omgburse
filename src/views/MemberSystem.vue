<template>
  <div class="member-system">
    <Loading v-if="isLoad" />
    <OutView :title="lang.locale.memberSystem" :isBack="true" />
    <h3 class="title">Players will be LV1 members by default after registering an account</h3>
    <div class="card-wrap">
      <div class="card" v-for="item in memberList" :key="item.id">
        <h3>
          {{ item.title + ' members' }}
          <span>inmoney: {{ item.inmoney }}</span>
        </h3>
        <div class="c-text">{{ item.mark }}</div>
        <p class="c-foot">{{ item.title2 }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';
import { ref } from 'vue';
import request from '../utils/request';

export default {
  name: 'Order',
  components: {
    OutView
  },
  inject: ['lang'],
  setup() {
    const isLoad = ref(false); // 设置isLoad=true响应
    // member列表
    const memberList = ref([]);
    const url = '/Api/System/Memberlist';
    const getMemberList = () => request.get(url);
    getMemberList({
      beforesend() {
        isLoad.value = true;
      }
    })
      .then(res => {
        isLoad.value = false;
        memberList.value = res.data;
      })
      .catch(() => {});
    return {
      isLoad,
      memberList,
      getMemberList
    };
  }
};
</script>
<style scoped lang="scss">
.member-system .title {
  background: #fff;
  padding: 10px;
  font-size: 16px;
}
.member-system .card {
  text-align: left;
  padding: 0;
  border-radius: 6px;
  width: 82%;
  margin: 15px auto;
  background-color: #089cfe;
  color: #fff;
}

.member-system .card h3 {
  border-radius: 6px;
  background-color: #86abef;
  height: 32px;
  line-height: 32px;
  min-width: 50%;
  padding: 0 10px;
}
.member-system .card h3 span {
  float: right;
}
.member-system .card .c-text {
  padding: 10px;
  line-height: 1;
}
.member-system .card .c-foot {
  padding: 5px 0 5px 10px;
  border-top: 1px dashed #fff;
}
.member-system .card-wrap > div:nth-child(1) {
  background-color: #ff797a;
}
.member-system .card-wrap > div:nth-child(2) {
  background-color: #f89a38;
}
</style>
