<template>
    <div class="container">
        <swiper class='icons-swiper' :options="swiperOption">
            <swiper-slide v-for='(page,index) of pages' :key='index'>
                <div class="icons"
                     v-for='item of page'
                     :key='item.id'
                >
                    <div class="icons-img-box">
                        <img class="icons-img" :src="item.imgUrl" />
                    </div>
                    <p class="icons-title">{{item.title}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',    /*导航点*/
            },
            iconsList: [
                {
                    id: '00001',
                    title: '景点门票',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
                },
                {
                    id: '00002',
                    title: '水上乐园',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png'
                },
                {
                    id: '00003',
                    title: '游乐场',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png'
                },
                {
                    id: '00004',
                    title: '海洋馆',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png'
                },
                {
                    id: '00005',
                    title: '动植物园',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'
                },
                {
                    id: '00006',
                    title: '玩转长隆',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png'
                },
                {
                    id: '00007',
                    title: '城市观光',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png'
                },
                {
                    id: '00008',
                    title: '一日游',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
                },
                {
                    id: '00009',
                    title: '东部华侨城',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png'
                },
            ]
        }
    },
    computed: {
        pages () {
            const pages = []
            this.iconsList.forEach((item,index) => {
                const page = Math.floor(index/8)
                if(!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
    .container >>> .swiper-wrapper
        width: 100%
        height: 0
        padding-bottom: 3.7rem
    .container
        padding-top: 0.1rem
        .icons
            float: left
            width: 25%
            height: 0
            padding-bottom: 25%
            text-align: center
            .icons-img-box
                width: 100%
                box-sizing: border-box
                padding: .1rem
                overflow: hidden
                .icons-img
                    width: 79%
            .icons-title
                color: $iconsTitleColor
                ellipsis()
        .swiper-pagination
            bottom: 0
</style>