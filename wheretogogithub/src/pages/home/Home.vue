<template>
  <div class='home'>
      <home-header></home-header>
      <home-swiper :swiperList='swiperList'></home-swiper>
      <home-icons :iconsList='iconsList'></home-icons>
      <home-recommend :recommendList='recommendList'></home-recommend>
      <home-weekend :weekendList='weekendList'></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
        swiperList: [],
        iconsList: [],
        recommendList: [],
        weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  methods: {
    getHomeData () {
        axios.get('/api/index.json')
        .then(this.getHomeSucc)
    },
    getHomeSucc (res) {
        const data = res.data.data
        if(res.data.ret && data){
            this.swiperList = data.swiperList
            this.iconsList = data.iconsList
            this.recommendList = data.recommendList
            this.weekendList = data.weekendList
        }
    }
  },
  mounted () {
    this.getHomeData()
  }
}
</script>

<style scoped></style>