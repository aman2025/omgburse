<template>
  <div class="slide">
    <swiper :slides-per-view="1" :space-between="0" autoplay :loop="true" @swiper="onSwiper" @slideChange="onSlideChange">
      <swiper-slide v-for="item in slideData" :key="item.id"><img :src="item.img"/></swiper-slide>
    </swiper>
  </div>
</template>

<script>
// import Swiper core and required modules
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.scss';
import request from '../utils/request';
import { ref } from 'vue';

// install Swiper modules
SwiperCore.use([Autoplay]);

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
  height: 215px;
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
