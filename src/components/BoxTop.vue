<template>
  <div :class="'box ' + top">
    <div id="title" class="fixed">
      <div class="top">
        <div class="leftUserInfo">
          <div class="Hi">Hi</div>
          <div class="UserName">{{ userinfo.uname }}</div>
          <div class="myTotalAssets">Your Total Assets</div>
          <div class="money">{{ userinfo.ymoney }}</div>
          <div class="Virtual" v-if="!custom">Virtual currency</div>
          <div class="VirtualMoney" v-if="!custom">{{ userinfo.virtual }}</div>
          <div class="LvImgBg">
            <div class="lvText">{{ userinfo.level }}</div>
          </div>
        </div>
        <div class="rightButton">
          <div class="btnRecharge" @click="recharge">
            <div class="image">
              <img src="" />
            </div>
            <div class="text">
              Recharge
            </div>
          </div>
          <div class="btnRecharge btnWithdraw" @click="withdraw">
            <div class="image">
              <img src="" />
            </div>
            <div class="text">
              Withdraw
            </div>
          </div>
        </div>
      </div>
      <div class="myid" v-if="custom">ID: {{ userinfo.id }}</div>
      <div class="bottom">
        <div class="infoNum" v-if="!custom">
          <span class="numValue">{{ userinfo.yesterday }}</span>
          <span class="text">Yesterday's earnings</span>
        </div>
        <div class="infoNum" v-if="!custom">
          <span class="numValue">{{ userinfo.cumulative }}</span>
          <span class="text">Cumulative income</span>
        </div>
        <div class="infoNum" v-if="!custom">
          <span class="numValue">{{ userinfo.today }}</span>
          <span class="text">Today's earnings</span>
        </div>
      </div>
    </div>
    <div style="width: 100%; height: 121px;"></div>
  </div>
</template>

<script>
import { inject, toRefs } from 'vue';
// import request from '../utils/request';
export default {
  name: 'ProductList',
  props: {
    top: String,
    custom: Boolean
  },
  setup() {
    const userinfoState = inject('userinfo');
    // return
    return {
      ...toRefs(userinfoState)
    };
  },
  methods: {
    recharge() {
      this.$router.push('/Recharge');
    },
    withdraw() {
      this.$router.push('/Withdraw');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box .myid {
  top: 80px;
  right: 15px;
  position: absolute;
  z-index: 9;
}
.box .fixed {
  background: #5096ab;
  border-radius: 15px;
  color: #fff;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 100;
  top: 5px;
  left: 9px;
  right: 7px;
  padding-top: env(safe-area-inset-top);
}
.box .fixed .top {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.box .fixed .top .leftUserInfo {
  position: relative;
  height: 73px;
}
.box .fixed .top .leftUserInfo .Hi {
  position: absolute;
  left: 11px;
  top: 10px;
  font-size: 20px;
  color: #fff;
}
.box .fixed .top .leftUserInfo .UserName {
  position: absolute;
  left: 40px;
  top: 15px;
  font-size: 15px;
  width: 93px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.box .fixed .top .leftUserInfo .myTotalAssets {
  position: absolute;
  right: 11px;
  top: 16px;
  font-size: 12px;
  color: #fff;
}
.box .fixed .top .leftUserInfo .money {
  position: absolute;
  right: 11px;
  top: 36px;
  font-size: 20px;
  color: #fff;
}
.box .fixed .top .leftUserInfo .Virtual {
  position: absolute;
  left: 125px;
  top: 16px;
  font-size: 12px;
  color: #fff;
}
.box .fixed .top .leftUserInfo .VirtualMoney {
  position: absolute;
  left: 132px;
  top: 36px;
  width: 75px;
  font-size: 18px;
  color: #fff;
  text-align: center;
}
.box .fixed .top .leftUserInfo .LvImgBg {
  position: absolute;
  width: 41px;
  height: 16px;
  top: 44px;
  left: 10px;
  background: #fced70;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.box .fixed .top .leftUserInfo .LvImgBg .lvText {
  color: #480c02;
  font-size: 10px;
  text-align: center;
}
.box .fixed .top .rightButton {
  position: relative;
  top: 1px;
  height: 36px;
}
.box .fixed .top .rightButton .btnRecharge {
  position: absolute;
  top: 0;
  left: 6px;
  width: 110px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN8AAAA7CAMAAADM8q+KAAAA1VBMVEUAAAD//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Pn/+PP/9Oz/8+n+8ef+7uL+59X+4Mr928H92Lr90rH9yqT9x5v8v5D8uYT9toL7s3r7rXD8qmz8qGn7pmX7oVv7n1f7m1D6lUf6kkL6jjv6jTj6hy75gyP5fyD5fR1ZUPf8AAAAJnRSTlMAAgkODxATGyAiJjI0OzxDSk1OT1Jpe4iNlZianK20xODi5ur3+wtOK+8AAAJ6SURBVHgB3duFdvJAEIbhSaDUQz+8rky9uLvt/V/QrxvqxpZju/PUve+J5wz0xF/bjO9Agp345ppPb60EkCVYoVc2IM8GPYkEAFLZ4/M8S3BxepxNAQgiNKfzsme8NLB1zrI68HnlTB4yC+rTDpOPq2gMwCGL6+NDALH52pllgX2cDddQH0idi+w7TwE+rQM5FtnHOWCdtoBjoX3HwBbFgXOW6RyI+x6RTyLpLo8A8AfFRmuRdrPCtgPwaV97qkwMbtzsq0yVmT6H4FjfYKbMzNzsu7o0dOVmnzk3+0YzQxM3+yZK9vY3VoZcWH7bQCp9cLpkn71OD9IpYJtWoSV2L0T15fcS0FaJVgNomfwP+iZTu/vyGWjBKmneyjaAPcO+QbV4d3n1UG5b3LcHYHvFo2drQPLEpG9a5if3A8V2OkkC6/RGAOwb9A1u+b/L21vWKpbuP/eBgN5aAdKL+waXrHWVKth8/pIGVugtD0gt7Jtdc2ioVMnmvhTgLdNX4bm+UkXH+qIG6+eU3/a5tH6a7F9a/Kin1D1rzuxfjI4PJebrsjZSqqHfFjkEy48PXtTs+F5gLqkXth/fox5p5udnD+/7pg6cn5mfX+vld1ur1+u1iVId/U7ZgfPr8Ppo/8Tk+qj8dv9it5P9dBLY/sn1bdf8+ODm9fuVjL6R+kLj5RtKDvfVp+rrPajWnkweHO677M3UF4qP33HJzvZplWbnU73mtYD7uwYE9AkAwP9L9Idk+vv/Wff9Jpn+6ETh8xPS51+kzy9Jnz+TPz8Yzn8eies70vOfwud338xf56TMX+fPj3Nv5q+Fz8/Lf/yD5q9viXn8yta6T4/+AatKCZXsJ72cAAAAAElFTkSuQmCC)
    no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.box .fixed .top .rightButton .btnRecharge .image {
  top: 6px;
  right: 5px;
  width: 21px;
  height: 16px;
}
.images > div,
.images > img {
  width: 100%;
  height: 100%;
}
.box .fixed .top .rightButton .btnRecharge .text {
  padding-left: 2px;
  color: #ff2525;
  font-size: 14px;
  top: 7px;
  line-height: 27px;
  font-weight: 700;
}
.box .fixed .top .rightButton .btnWithdraw {
  position: absolute;
  top: 0;
  left: 137px;
  width: 110px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN8AAAA7CAMAAADM8q+KAAAA1VBMVEX///8AAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////5fR36jTj5gyj7r3T6kD/6izX//fz90rH/9Oz8t4H+8OT8xZr+5tT93cT7rG/6mEz6lkj/+/n9yqP8u4f7qGj7oVr7nVP5gCL9z6z8xJj8s3n6iDD+69z92Lv7pGD/+fT+4Mr8vIv8wJLPWoaqAAAAI3RSTlNNADz7UujiiE8Qm5dpSkM7JiIbCQLFrY007HtOIBMOD8G0MjJsQ1EAAAKKSURBVHgB3dtFesMwEIbh3xRmLsMozMxJ+f5HahRyynq6suZbdfuGBB3D2Je+vI9FwaFo7P4yfWDtfUETvDKDp74E+JU4+q5NALb/1rGIQ5bv1m8DMK/3PsnzO/TvQJ7L8UvgzpcAAjkiRj5ZLgAkpO8KQI7Y+SgH4GrjMwE/MfSRHzANpAH7jKXvzAbSSAJ5YumjPJBEAcgy9WWBAmKAQzxzgBiigEVq1cct0ikLUgeQQs+LXkWICmkVACVfo75ai21dfr7WY28uDjXpm6Cvr1V/2uDcBpx8jdFMfO6BiW/YLZfEN015+F5GT5XBbDKZ9Hrlcnm1WjU3jcevryMOvuGw1aAfqu0bautbVNbVSvG7qietZx0tfHHAjoR85CYUm5CX84UittSlILsIW3RoLtTqkXezwheQpWCkTMjOj8CSUKvsYd45ZGZqe7+UCcYBhBn5wgDiwYx7v3sJBHxqvvbU8z5fAEi697syEwip+CodehS7njz7+xkCTOOjLwhEFHw9ufYP+rLBm2d9ESD4yZcB7L99S2rMGt7fv9hA5h++eZe6QjTr2xZdrXw3f38+Bw0ai5NaOnw+1X9fyjScfjoqafD7or4+jKgjhB7v36f1IXOjsr5L4Prz++fl9f1mt76r78+aRDMhipVdg4YW+zN3f/2nT/Rr1NTiCs3dX7vnIwWfKHWo89xqb1s+ev18FIDUASRT8skVnhZi11S787uCT5Qb48NfLH1iLnj7BGsfA59QbKKpbyrUWmrq4xMA9/+3/LKAqGkAFnhmAgb3+Qnu8y/c55eYz5+xnx/cz3/esfPdBYAE//ldd/46n+Uyf+1k8+78Nf/5ef7PP8jSyQKb51cKyfSB9Q6i8+8wFVKdQgAAAABJRU5ErkJggg==)
    no-repeat;
  background-size: cover;
}
.box .fixed .bottom {
  margin-top: 0px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 375px;
  border-top: 1px dashed rgba(255, 255, 255, 0.2);
}
.box .fixed .bottom .infoNum {
  margin-left: 3px;
  margin-right: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
.box .fixed .bottom .infoNum .numValue {
  color: #fff;
  font-size: 19px;
  min-height: 25px;
}
.box .fixed .bottom .infoNum .text {
  font-size: 10px;
  color: #fff;
}
.top .fixed {
  top: 10px;
}
</style>
