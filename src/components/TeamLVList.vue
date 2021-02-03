<template>
  <div class="LVList">
    <div>
      <div class="item" v-for="(item, index) in teamData" :key="index">
        <div class="itmeImg">
          <img src="../assets/team_bg_lv.png" alt="" />
        </div>
        <div class="LV">
          <div class="text">{{ item.title }}</div>
        </div>
        <div class="Bonus">
          <div class="text1">{{ lang.locale.bonus }}</div>
          <div class="text2">{{ item.totalmoney }}</div>
        </div>
        <div class="NumberOfPeople">
          <div class="text2">{{ item.num }}</div>
        </div>
        <div class="Details">
          <div class="button" @click="showTeamDetail(index + 1)">{{ lang.locale.details }}</div>
        </div>
      </div>
      <div style="height: 60px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamList',
  props: {
    teamData: Array
  },
  inject: ['lang'],
  methods: {
    showTeamDetail(ord) {
      this.$router.push('/TeamMember?ord=' + ord);
    }
  }
};
</script>

<style scoped lang="scss">
.LVList {
  padding-top: 10px;
}
.LVList .item {
  position: relative;
  padding: 8px;
  height: 31.86vw;
  margin: 10px 0;
}
.LVList .item .itmeImg {
  text-align: center;
}
.LVList .item .itmeImg img {
  position: absolute;
  z-index: 1;
  height: 31.86vw;
  left: 50%;
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}
.LVList .item .text,
.LVList .item .Details,
.LVList .item .NumberOfPeople,
.LVList .item .Bonus,
.LVList .item .LV {
  position: absolute;
  z-index: 2;
  color: #fff;
}
.LVList .item .LV .text {
  color: #e3462c;
  font-weight: 700;
  font-size: 23px;
  top: 0.6vw;
  left: 6vw;
}
.LVList .item .Bonus .text1 {
  position: absolute;
  top: 11.6vw;
  left: 9vw;
  font-size: 20px;
  font-weight: 600;
}
.LVList .item .Bonus .text2 {
  position: absolute;
  top: 19.3vw;
  left: 14.5vw;
  font-weight: 700;
  font-size: 25px;
}
.LVList .item .NumberOfPeople .text2 {
  position: absolute;
  top: 2.3vw;
  left: 77.5vw;
  font-size: 43px;
}
.LVList .item .Details .button {
  width: 80px;
  height: 27px;
  background: #a12740;
  position: absolute;
  top: 20.5vw;
  left: 70.5vw;
  border-radius: 20px;
  border: 2px #fced70 solid;
  color: #fced70;
  font-size: 15px;
  text-align: center;
  line-height: 27px;
}
.uni-image > img {
  opacity: 1;
  position: relative;
}
</style>
