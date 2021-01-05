<template>
  <div class="myTeam">
    <Loading v-if="isLoad" />
    <!-- 头部图片 -->
    <div class="title">
      <img src="../assets/shuadan_yqlj_bg.png" />
      <div class="titleText">{{ teamList.referral }}</div>
      <div class="copyBtn">copy</div>
      <div class="titleText" style="top: 43vw;">{{ teamList.referralurl }}</div>
      <div class="copyBtn" style="top: 43vw;">copy</div>
    </div>
    <!-- 头部图片 end -->
    <!-- team size  -->
    <div class="playerInfo">
      <div class="text1">Team size</div>
      <div class="text2">Total team contribution</div>
      <div class="uni-image image1" style="height: 26px;">
        <div></div>
        <img src="../assets/xiaji_bg_btn2.png" />
        <div class="resize-sensor">
          <div><div></div></div>
          <div><div></div></div>
        </div>
      </div>
      <div class="uni-image image2" style="height: 26px;">
        <div></div>
        <img src="../assets/xiaji_bg_btn1.png" />
        <div class="resize-sensor">
          <div><div></div></div>
          <div><div></div></div>
        </div>
      </div>
      <div class="text3">{{ teamList.teamnum }}</div>
      <div class="text4">{{ teamList.teamcontribution }}</div>
    </div>
    <!-- List component  -->
    <List :listdatas="lists" />
    <!-- team LV list component -->
    <TeamLVList :teamData="teamList.team" />
  </div>
</template>
<script>
import TeamLVList from '@/components/TeamLVList.vue';
import List from '@/components/List.vue';
import { ref } from 'vue';
import Loading from '@/components/Loading.vue';
import request from '../utils/request';

export default {
  name: 'Team',
  components: {
    TeamLVList,
    List,
    Loading
  },
  setup() {
    const isLoad = ref(false); // 设置isLoad=true响应
    var lists = [
      {
        id: 1,
        title: 'Mission',
        className: 'icon_mission',
        img: 'icon_mission',
        url: '/Mission'
      },
      {
        id: 2,
        title: 'Income list',
        className: 'shuadan_btn_incomelist',
        img: 'shuadan_btn_incomelist',
        url: '/TotalTeamContribution'
      }
    ];
    // 团队
    const teamList = ref([]);
    const url = '/Api/Team/index';
    const getGoods = () => request.get(url);
    getGoods({
      beforesend() {
        isLoad.value = true;
      }
    })
      .then(res => {
        isLoad.value = false;
        console.log(res.data);
        teamList.value = res.data;
      })
      .catch(() => {});
    // return
    return {
      lists,
      isLoad,
      teamList
    };
  }
};
</script>
<style scoped lang="scss">
.myTeam .title {
  position: relative;
}
.myTeam .title img {
  position: relative;
  z-index: 1;
  width: 100vw;
}
.myTeam .title .titleText {
  position: absolute;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  top: 32.6vw;
  left: 8vw;
  width: 37vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 9;
}
.myTeam .title .copyBtn {
  position: absolute;
  background: -webkit-gradient(linear, left top, left bottom, from(#2ea1f2), to(#0752bf));
  background: -webkit-linear-gradient(#2ea1f2, #0752bf);
  background: linear-gradient(#2ea1f2, #0752bf);
  -webkit-border-radius: 6px;
  border-radius: 6px;
  color: #fff;
  width: 57px;
  height: 25px;
  text-align: center;
  line-height: 20px;
  font-size: 16px;
  top: 32.6vw;
  left: 48vw;
  z-index: 9;
}
.myTeam .playerInfo {
  height: 73px;
  margin-top: 0px;
  margin-left: 2%;
  width: 96%;
  -webkit-border-radius: 5px 5px 0px 0px;
  border-radius: 5px 5px 0px 0px;
}
.myTeam .playerInfo .text1,
.myTeam .playerInfo .text2 {
  position: absolute;
  margin-left: 16px;
  margin-top: 7px;
  font-size: 14px;
  color: #999;
}
.myTeam .playerInfo .text2 {
  margin-left: 182px;
}
.myTeam .playerInfo .image1 {
  position: absolute;
  width: 8%;
  margin-left: 19px;
  margin-top: 36px;
}
.myTeam .playerInfo .image1 > div {
  background-image: url(../assets/xiaji_bg_btn2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.myTeam .playerInfo .image2 {
  position: absolute;
  width: 8%;
  margin-left: 188px;
  margin-top: 36px;
}
.playerInfo .image2 > div {
  background-image: url(../assets/xiaji_bg_btn1.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.myTeam .playerInfo .text4,
.myTeam .playerInfo .text3 {
  position: absolute;
  color: #fb6400;
  font-size: 27px;
  margin-left: 66px;
  margin-top: 30px;
}
.myTeam .playerInfo .text4 {
  margin-left: 228px;
}
</style>
