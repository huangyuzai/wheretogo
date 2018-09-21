<template>
    <div class="swiper-box">
        <swiper :options="swiperOption" >
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
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',    /*导航点*/
        loop: true,                          /*在第一张到最后一张之间循环*/
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }
      },
      swiperList: [
        {
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/59/371af39a4ca5702.jpg_750x200_1a9cfe57.jpg'
        },
        {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/45/cb5d7b479e2fdd02.jpg_750x200_3729c776.jpg'
        },
        {
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/3e/f1975f6bde70b202.jpg_750x200_c28601f0.jpg'
        },
      ]
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