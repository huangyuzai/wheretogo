<template>
    <div>
        <div class="banner" id="banner" @click='galleryBtn'>
            <div class="bannerImgBox">
                <img class="bannerImg" :src="this.bannerImg"/>
                <div class="titleBox">
                    <p class="bannerTitle">{{this.title}}{{this.grade}}</p>
                    <span class="iconfont imgNum">&#xe66b;&nbsp;&nbsp;{{this.galleryImgs.length}}</span>
                </div>
            </div>
        </div>
        <module-animation>
            <!-- <div class="gallery"
                 v-show='isGallery'
            > -->
                <module-gallery
                    @galleryHide='galleryHide'
                    :galleryImgs='this.galleryImgs'
                    v-show='isGallery'
                ></module-gallery>
            <!-- </div> -->
        </module-animation>
    </div>
</template>

<script>
import ModuleGallery from 'module/gallery/Gallery'
import ModuleAnimation from 'module/fade/Animation'

export default {
    name: 'DetailBanner',
    props: {
        title: String,
        grade: String,
        bannerImg: String,
        galleryImgs: Array
    },
    data () {
        return {
            isGallery: false
        }
    },
    components: {
        ModuleGallery,
        ModuleAnimation
    },
    methods: {
        galleryBtn () {
            this.isGallery = true
        },
        galleryHide () {
            this.isGallery = false
        }
    }
}
</script>

<style lang='stylus' scoped>
    .bannerImgBox
        position: relative
        .bannerImg
            width: 100%
        .titleBox
            width: 100%
            box-sizing: border-box
            position: absolute
            bottom: 0
            padding-left: .2rem
            color: white
            background: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
            .bannerTitle
                font-size: .36rem
                padding-bottom: .2rem
            .imgNum
                font-size: .24rem
                display: inline-block
                position: absolute
                right: .2rem
                top: 0
                padding: .06rem .3rem
                background: rgba(0,0,0,.5)
                border-radius: .2rem
</style>