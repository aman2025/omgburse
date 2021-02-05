<template>
  <div class="slide">
    <swiper :slides-per-view="1" :space-between="0" :autoplay="{ delay: 100 }" :loop="true" @swiper="onSwiper" @slideChange="onSlideChange">
      <swiper-slide v-for="item in slideData" :key="item.id"><img :src="item.img"/></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import request from '../utils/request';
import { ref } from 'vue';
export default {
  name: 'Slide',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    // 全局幻灯片
    const slideData = ref([]);
    var url = '/Api/Index/getslide';
    const getSlide = () => request.get(url);
    getSlide()
      .then(res => {
        console.log(res);
        slideData.value = res.data;
      })
      .catch(() => {});
    return {
      slideData
    };
  },
  methods: {
    onSwiper(swiper) {
      //初始加载
      setInterval(() => {
        console.log(1);
      }, 1000);
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change...');
    }
  }
};
</script>

<style scoped lang="scss">
.slide {
  background-color: #eee;
  position: fixed;
  top: 5px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  height: 100px;
  z-index: 9999;
  border-radius: 10px;
  overflow: hidden;
}
.swiper-container {
  height: 100%;
}
.swiper-slide {
  height: 100%;
}
.swiper-slide img {
  width: 100% !important;
}
</style>
