<template>
    <div class="recommend-container">
        <h2 class="recommend-title">热销推荐</h2>
        <ul class="attractions-box">
            <li class='attractions' v-for='item of recommendList' :key='item.id'>
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
    props: {
        recommendList: Array
    },
    data() {
        return {

        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
    .recommend-container
        .recommend-title
            titleStyle()
        .attractions-box
            .attractions
                display: flex
                padding: .2rem 0
                margin-left: .24rem
                border-bottom: solid 1px $borderColor
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
                        padding-right: .2rem
                        ellipsis()
                    .attractions-details
                        padding: .05rem .3rem
                        border-radius: .1rem
                        background: #ffa500
                        color: white
                        margin-top: .2rem
</style>