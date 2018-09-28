<template>
    <div class="swiper-box">
        <swiper :options="swiperOption"
                v-if='showSwiper'
          >
            <swiper-slide
                v-for='item of swiperList'
                :key='item.id'
                data-swiper-autoplay="2000"
            >
                <img class='swiper-img' :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',    /*导航点*/
        loop: true,                          /*在第一张到最后一张之间循环*/
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style lang='stylus' scoped>
    .swiper-box >>> .swiper-pagination-bullet-active
        background: #fff
    .swiper-box
       width: 100%
       height: 85.33%
       background: #eee
       .swiper-img
           width: 100%
</style>