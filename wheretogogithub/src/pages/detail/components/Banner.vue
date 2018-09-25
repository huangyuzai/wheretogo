<template>
    <div class="banner">
        <div class="bannerImgBox">
            <img class="bannerImg" src="//img1.qunarzz.com/sight/p0/1603/9d/9d8c0e9a01bba92e90.water.jpg_600x330_18d5b736.jpg"/>
            <div class="titleBox">
                <p class="bannerTitle">锦绣中华村(AAAAA景区)</p>
                <span class="iconfont imgNum">&#xe66b;&nbsp;&nbsp;74</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailBanner'
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