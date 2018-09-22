<template>
    <div class="container">
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
    data () {
        return {
            weekendList: [
                {
                    id: '001',
                    title: '深圳必游TOP10',
                    desc: '来到深圳，你需要来这里签到',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg'
                },
                {
                    id: '002',
                    title: '欢乐长隆',
                    desc: '世界欢乐汇聚长隆',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg'
                },
                {
                    id: '003',
                    title: '当地人游深圳',
                    desc: '当地人带你发现不一样的深圳',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg'
                },
                {
                    id: '004',
                    title: '情侣好去处',
                    desc: '手牵手，一起走到老',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1505/eb/e4b181a6957c36.jpg_r_640x214_4abbdbc0.jpg'
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
                        font-size: .27rem
                        height: .27rem
                        ellipsis()
                    .attractions-desc
                        height: .5rem
                        line-height: .5rem
                        margin: .05rem 0
                        font-size: .24rem
                        color: $Color-616161
                        ellipsis()


</style>