<template>
  <div class="">
    <OutView title="Total team contribution" :isBack="true" />
    <div class="list">
      <div v-for="(item, index) in news" :key="item.id">
        <div class="listitem">
          <div class="leftItem">{{ index + 1 }}</div>
          <div class="middleItem">
            <div class="heng1">
              <div class="text1">date:</div>
              <div style="width: 10px;"></div>
              <div class="text2">{{ item.date }}</div>
            </div>
            <div class="heng1">
              <div class="text1">name:</div>
              <div style="width: 10px;"></div>
              <div class="text2">{{ item.name }}</div>
            </div>
          </div>
          <div class="rightItem">
            <div class="text6">{{ item.point }}</div>
          </div>
        </div>
        <div style="border-top: 0.5px solid rgb(0, 0, 0); width: 96%; margin-left: 2%;"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted } from 'vue';
import axios from 'axios';
import OutView from '@/components/OutView.vue';

export default {
  name: 'TotalTeamContribution',
  components: {
    OutView
  },
  setup() {
    const state = reactive({
      page: 1,
      news: []
    });
    // 发送 ajax 请求获取列表数据
    const load = async () => {
      let res = await axios.get('http://localhost:8080/data.json', {
        params: {
          limit: 10,
          page: state.page
        }
      });
      state.news = res.data.data;
    };
    onMounted(() => {
      load();
    });
    return {
      // 让数据保持响应式
      ...toRefs(state)
    };
  },
  methods: {}
};
</script>
<style scoped lang="scss">
.list .listitem {
  width: 96%;
  background: #fff;
  margin-left: 2%;
  margin-top: 2px;
  padding-bottom: 4px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
}
.list .listitem .leftItem {
  font-size: 20px;
  margin-left: 9px;
  padding-top: 7px;
  color: #ff2525;
  width: 20px;
  text-align: center;
  vertical-align: middle;
}
.list .listitem .middleItem {
  margin-left: 13px;
  font-size: 13px;
  font-weight: 700;
  width: 225px;
}
.list .listitem .middleItem .heng1 {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  margin-top: 2px;
  font-size: 13px;
}
.list .listitem .middleItem .heng1 .text2 {
  font-weight: 400;
}
.list .listitem .rightItem .text6 {
  height: 100%;
  font-size: 15px;
  color: #ff2525;
  margin-top: 10px;
}
</style>
