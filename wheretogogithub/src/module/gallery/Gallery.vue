<template>
    <div class='gallery'>
        <div class='wrapper'>
            <swiper :options='swiperOption'>
                <swiper-slide v-for='(item,index) of galleryImgs'
                              :key='index'
                >
                    <img class='gallery-img'
                         :src='item'
                         @click='galleryHide'
                />
                </swiper-slide>
                <div class='swiper-pagination'  slot='pagination'></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModuleGallery',
    props: {
        galleryImgs: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observeParents: true,
                observer: true
            }
        }
    },
    methods: {
        galleryHide () {
            this.$emit('galleryHide',false)
        }
    }
}
</script>

<style lang='stylus' scoped>
    .gallery >>> .swiper-container
        overflow: inherit
    .gallery
        position: fixed
        top: 0
        z-index: 10
        width: 100%
        height: 100%
        background: #000
        color: white
        display: flex
        flex-direction: column
        justify-content: center
        .gallery-img
            width: 100%
    .swiper-pagination
        position: absolute
        bottom: -1rem
</style>