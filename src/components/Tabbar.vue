<template>
  <nav class="tabbar">
    <router-link to="/" active-class="active" exact>
      <i class="icon-nav01"></i>
      <span>HOME</span>
    </router-link>
    <router-link to="/order" active-class="active">
      <i class="icon-nav02"></i>
      <span>ORDER FINANCE</span>
    </router-link>
    <router-link to="/team" active-class="active">
      <i class="icon-nav03"></i>
      <span>TEAM</span>
    </router-link>
    <router-link to="/financial" active-class="active">
      <i class="icon-nav04"></i>
      <span>FINANCIAL PRODUCT</span>
    </router-link>
    <router-link to="/my" active-class="active">
      <i class="icon-nav05"></i>
      <span>MY</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Tabbar',
  props: {}
};
</script>

<style scoped lang="scss">
/* 导航栏 */
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  height: 1rem;
  background-color: #fff;
}
nav::before {
  content: '';
  width: 100%;
  border-top: 0.5px solid #b2b2b2;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}
nav a {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-align: center;
  justify-content: center;
  text-align: center;
  font-size: 0.2rem;
  color: #999;
}
nav a i {
  width: 40px;
  height: 40px;
}
nav a i.icon-nav01 {
  background-image: url(../assets/shuadan_dt_btn_1.png);
}
nav a i.icon-nav02 {
  background-image: url(../assets/shuadan_dt_btn_2.png);
}
nav a i.icon-nav03 {
  background-image: url(../assets/shuadan_dt_btn_3.png);
}
nav a i.icon-nav04 {
  background-image: url(../assets/shuadan_dt_btn_4.png);
}
nav a i.icon-nav05 {
  background-image: url(../assets/shuadan_dt_btn_5.png);
}
nav a.active i.icon-nav01 {
  background-image: url(../assets/shuadan_dt_btn_1_1.png);
}
nav a.active i.icon-nav02 {
  background-image: url(../assets/shuadan_dt_btn_2_1.png);
}
nav a.active i.icon-nav03 {
  background-image: url(../assets/shuadan_dt_btn_3_1.png);
}
nav a.active i.icon-nav04 {
  background-image: url(../assets/shuadan_dt_btn_4_1.png);
}
nav a.active i.icon-nav05 {
  background-image: url(../assets/shuadan_dt_btn_5_1.png);
}
nav span {
  white-space: nowrap;
  position: absolute;
  font-weight: 700;
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
  font-size: 10px;
  line-height: 14px;
  -webkit-transform-origin: center 100%;
  transform-origin: center 100%;
  bottom: 2px;
  color: rgb(102, 102, 102);
}
</style>
