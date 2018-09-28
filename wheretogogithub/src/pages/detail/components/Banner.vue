<template>
    <div>
        <div class="banner" @click='galleryBtn'>
            <div class="bannerImgBox">
                <img class="bannerImg" src="//img1.qunarzz.com/sight/p0/1603/9d/9d8c0e9a01bba92e90.water.jpg_600x330_18d5b736.jpg"/>
                <div class="titleBox">
                    <p class="bannerTitle">锦绣中华村(AAAAA景区)</p>
                    <span class="iconfont imgNum">&#xe66b;&nbsp;&nbsp;{{imgs.length}}</span>
                </div>
            </div>
        </div>
        <div class="gallery"
             v-show='isGallery'
        >
            <module-gallery
                @galleryHide='galleryHide'
                :imgs='imgs'
            ></module-gallery>
        </div>
    </div>
</template>

<script>
import ModuleGallery from 'module/gallery/Gallery'

export default {
    name: 'DetailBanner',
    data () {
        return {
            isGallery: false,
            imgs: [
            'http://img1.qunarzz.com/sight/p0/1603/9d/9d8c0e9a01bba92e90.water.jpg_350x240_bda2a037.jpg',
            'http://img1.qunarzz.com/sight/p0/1701/46/46348d2b494ac227a3.water.jpg_350x240_2c4e8c61.jpg',
            'http://img1.qunarzz.com/sight/p0/1601/da/da957ca1602bdc9190.water.jpg_350x240_ef614bd3.jpg',
            'http://img1.qunarzz.com/sight/p0/1601/19/1993fb00037a3ffd90.water.jpg_350x240_61a2616f.jpg',
            'http://img1.qunarzz.com/sight/p0/1601/2c/2c34835cb1432a2890.water.jpg_350x240_08f08899.jpg',
            'http://img1.qunarzz.com/sight/p0/1601/8f/8f4871e82d670ece90.water.jpg_350x240_7340e7f5.jpg'
            ]
        }
    },
    components: {
        ModuleGallery
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