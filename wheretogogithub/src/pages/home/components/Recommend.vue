<template>
    <div class="container">
        <h2 class="recommend-title">热销推荐</h2>
        <ul class="attractions-box">
            <li class='attractions' v-for='item of attractionsList' :key='item.id'>
                <img class="attractions-img" :src="item.imgUrl" />
                <div class="attractions-text">
                    <p class="attractions-title">{{item.title}}</p>
                    <p class="attractions-desc">{{item.desc}}</p>
                    <button class="attractions-details">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    data() {
        return {
            attractionsList: [
                {
                    id:'01',
                    title: '锦绣中华民俗村',
                    desc: '锦绣中华民俗村锦绣中华民俗村锦绣中华民俗村',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/9d/9d8c0e9a01bba92e90.water.jpg_200x200_86f2e623.jpg'
                },
                {
                    id:'02',
                    title: '世界之窗',
                    desc: '世界之窗世界之窗世界之窗世界之窗',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/87/8796d4dfe0366858a3.water.png_200x200_ca6e25bf.png'
                },
                {
                    id:'03',
                    title: '深圳欢乐谷',
                    desc: '深圳欢乐谷深圳欢乐谷深圳欢乐谷深圳欢乐谷',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1807/99/992c99c98928c509a3.water.jpg_200x200_fc4df6ea.jpg'
                }
            ]
        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
    .container
        .recommend-title
            height: .8rem
            line-height: .8rem
            padding-left: .26rem
            background: #f5f5f5
            color: $Color-212121
        .attractions-box
            .attractions
                display: flex
                padding: .2rem 0
                margin-left: .24rem
                border-bottom: solid 1px #e0e0e0
                .attractions-img
                    width: 2rem
                    height: 2rem
                .attractions-text
                    flex: 1
                    margin-left: .2rem
                    margin-top: .2rem
                    min-width: 0
                    .attractions-title
                        font-size: .36rem
                        margin-top: .1rem
                        height: .36rem
                        ellipsis()
                    .attractions-desc
                        height: .5rem
                        line-height: .5rem
                        margin: .05rem 0
                        font-size: .24rem
                        color: #616161
                        ellipsis()
                    .attractions-details
                        padding: .05rem .3rem
                        border-radius: .1rem
                        background: #ffa500
                        color: white
                        margin-top: .2rem
</style>