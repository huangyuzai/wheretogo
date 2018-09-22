<template>
    <div class="icons-container">
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
    props: {
        iconsList: Array
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',    /*导航点*/
            },

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
    .icons-container >>> .swiper-wrapper
        width: 100%
        height: 0
        padding-bottom: 3.7rem
    .icons-container
        padding-top: 0.1rem
        .icons
            float: left
            width: 25%
            height: 1.5rem
            text-align: center
            .icons-img-box
                width: 100%
                box-sizing: border-box
                padding: .1rem
                overflow: hidden
                .icons-img
                    width: 1rem
            .icons-title
                color: $titleColor
                ellipsis()
        .swiper-pagination
            bottom: .15rem
</style>