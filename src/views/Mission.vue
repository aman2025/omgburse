<template>
  <div class="Mission">
    <OutView title="Mission" :isBack="true" />
    <div class="title1">Upgrade task: users who have recharged are valid users</div>
    <div class="title2">
      <div class="text1">Total people:2</div>
      <div class="btn">Details</div>
    </div>
    <div class="product-mission-container">
      <!-- mission-item -->
      <div class="mission-item">
        <div class="left-block">1</div>
        <div class="left-info">
          <div class="text1">Invited 1 valid member</div>
          <div class="text2">Task reward:R$50</div>
        </div>
        <div class="right-ProgressBar">
          <div class="text1">1/1</div>
          <div class="uni-progress-box progreebar">
            <div class="progress-bottom"><div class="progress" style="width: 80%; background: linear-gradient(to right, rgb(254, 139, 185), rgb(180, 14, 139));"></div></div>
            <div class="percentage"></div>
          </div>
        </div>
        <div class="right"><div class="text">Completed</div></div>
      </div>
      <!-- mission-item -->
      <div class="mission-item">
        <div class="left-block">1</div>
        <div class="left-info">
          <div class="text1">Invited 1 valid member</div>
          <div class="text2">Task reward:R$50</div>
        </div>
        <div class="right-ProgressBar">
          <div class="text1">1/1</div>
          <div class="uni-progress-box progreebar">
            <div class="progress-bottom"><div class="progress" style="width: 50%; background: linear-gradient(to right, rgb(254, 139, 185), rgb(180, 14, 139));"></div></div>
            <div class="percentage"></div>
          </div>
        </div>
        <div class="right">
          <div class="button" style="background: linear-gradient(to right, rgb(46, 161, 242), rgb(6, 80, 190));">Receive</div>
        </div>
      </div>
      <!-- mission-item -->
      <div class="mission-item">
        <div class="left-block">1</div>
        <div class="left-info">
          <div class="text1">Invited 1 valid member</div>
          <div class="text2">Task reward:R$50</div>
        </div>
        <div class="right-ProgressBar">
          <div class="text1">1/1</div>
          <div class="uni-progress-box progreebar">
            <div class="progress-bottom"><div class="progress" style="width: 50%; background: linear-gradient(to right, rgb(254, 139, 185), rgb(180, 14, 139));"></div></div>
            <div class="percentage"></div>
          </div>
        </div>
        <div class="right">
          <div class="button">Receive</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OutView from '@/components/OutView.vue';

export default {
  name: 'TotalTeamContribution',
  components: {
    OutView
  },
  setup() {},
  methods: {}
};
</script>
<style scoped lang="scss">
.Mission .title1 {
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
}
.Mission .title2 {
  width: 96%;
  margin-left: 2%;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  padding-top: 8px;
}
.Mission .title2 .text1 {
  padding-left: 8px;
  color: #e3462c;
  font-size: 20px;
}
.Mission .title2 .btn {
  margin-top: -1px;
  margin-right: 10px;
  text-align: center;
  width: 66px;
  height: 28px;
  background: -webkit-gradient(linear, left top, right top, from(#f7ac0a), to(#e54d2c));
  background: -webkit-linear-gradient(left, #f7ac0a, #e54d2c);
  background: linear-gradient(90deg, #f7ac0a, #e54d2c);
  color: #fff;
  -webkit-border-radius: 15px;
  border-radius: 15px;
  line-height: 28px;
  font-size: 14px;
}
.Mission .product-mission-container {
  width: 96%;
  margin-left: 2%;
  padding-top: 5px;
}
.Mission .product-mission-container .mission-item {
  margin-top: 10px;
  width: 100%;
  min-height: 49px;
  height: auto !important;
  height: 60px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-border-radius: 8px;
  border-radius: 8px;
  background: #fff;
}
.Mission .product-mission-container .mission-item .left-block {
  margin-left: 0px;
  margin-top: 0px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  background: -webkit-gradient(linear, left top, right bottom, from(#ec6f75), color-stop(50%, #ee86b9), color-stop(51%, #fff), color-stop(50%, #fff));
  background: -webkit-linear-gradient(top left, #ec6f75 0, #ee86b9 50%, #fff 51%, #fff 0);
  background: linear-gradient(to bottom right, #ec6f75 0, #ee86b9 50%, #fff 51%, #fff 0);
  width: 60px;
  height: 45px;
  line-height: 35px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  text-indent: 6px;
}
.Mission .product-mission-container .mission-item .left-info {
  font-size: 10px;
  margin-left: 5px;
  width: 130px;
}
.Mission .product-mission-container .mission-item .left-info .text1 {
  margin-top: 10px;
}
.Mission .product-mission-container .mission-item .left-info .text2 {
  font-size: 13px;
  color: #8bbfff;
}
.Mission .product-mission-container .mission-item .right-ProgressBar {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  font-size: 10px;
  margin-left: 11px;
}
.Mission .product-mission-container .mission-item .right-ProgressBar .text1 {
  padding-top: 10px;
  margin-left: 25px;
}
.Mission .product-mission-container .mission-item .right-ProgressBar .progreebar {
  padding-top: 4px;
  width: 68px;
  height: 10px;
}
.uni-progress-box .progress-bottom {
  height: 100%;
  width: 100%;
  background: #ccc;
  -webkit-border-radius: 25px;
  border-radius: 25px;
}
.uni-progress-box .progress-bottom .progress {
  height: 100%;
  width: 100%;
  -webkit-border-radius: 25px;
  border-radius: 25px;
}
.uni-progress-box .percentage {
  margin: 0 4%;
}
.Mission .product-mission-container .mission-item .right {
  margin-left: 20px;
  text-align: center;
  height: 30px;
  width: 80px;
}
.Mission .product-mission-container .mission-item .right .text {
  font-size: 12px;
  margin-right: 13px;
  line-height: 50px;
  color: #2de75d;
  font-weight: 700;
}
.uni-progress-box .progress-bottom .progress {
  height: 100%;
  width: 100%;
  -webkit-border-radius: 25px;
  border-radius: 25px;
}
.Mission .product-mission-container .mission-item .right .button {
  font-size: 14px;
  margin-top: 10px;
  margin-right: 10px;
  height: 27px;
  width: 65px;
  line-height: 25px;
  -webkit-border-radius: 15px;
  border-radius: 15px;
  background: -webkit-gradient(linear, left top, right top, from(#9b9b9b), to(#5e5e5e));
  background: -webkit-linear-gradient(left, #9b9b9b, #5e5e5e);
  background: linear-gradient(90deg, #9b9b9b, #5e5e5e);
  color: #fff;
}
</style>
