<template>
    <div class="weekend-container">
        <h2 class="weekend-title">周末去哪儿</h2>
        <ul class="weekend-box">
            <li class="weekend-attractions"
                v-for='item of weekendList'
                :key='item.id'
            >
                <div class="img-box">
                    <img class="weekend-img" :src="item.imgUrl" />
                </div>
                <div class="weekend-text">
                    <p class="attractions-title">{{item.title}}</p>
                    <p class="attractions-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props: {
        weekendList: Array
    },
    data () {
        return {

        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
    .weekend-container
        margin-top: .2rem
        .weekend-title
            titleStyle()
        .weekend-box
            .weekend-attractions
                background: $Color-f5f5f5
                padding-bottom: .05rem
                .img-box
                    .weekend-img
                        width: 100%
                .weekend-text
                    padding-left: .26rem
                    background: white
                    padding-top: .2rem
                    .attractions-title
                        font-size: .28rem
                        height: .27rem
                        ellipsis()
                    .attractions-desc
                        height: .5rem
                        line-height: .5rem
                        margin: .05rem 0
                        font-size: .24rem
                        color: #616161
                        ellipsis()


</style>