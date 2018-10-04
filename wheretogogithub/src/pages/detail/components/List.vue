<template>
    <div class="list">
        <div class="oneList"
             v-for='(item,index) of ticketList'
             :key='index'
        >
            <div class="listTitle">
                <span class="titleIcon"></span>
                {{item.title}}
            </div>
            <div class="ticketList"
                 v-for='(item_1,index) of item.children'
                 :key='index'
                 :data-index='index'
            >
                <div class="titleBox">
                    {{item_1.title}}
                </div>
                <div class="tickerPrice">
                    <span class="priceBox">￥<span class="price">{{item_1.price}}</span></span>起
                </div>
                <!--
                    递归组件用法
                    <detail-list :ticketList='item.childern'></detail-list> -->
            </div>

            <!-- <div @click='btn'>点击查看更多</div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailList',
    props: {
        ticketList: Array
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'

    .list
        background: #f5f5f5
        .oneList
            margin-bottom: .2rem
            background: white
            .listTitle
                height: .88rem
                line-height: .88rem
                border-bottom: solid 1px $borderColor
                font-size: .32rem
                margin-left: .2rem
                .titleIcon
                    display: inline-block
                    width: .36rem
                    height: .36rem
                    background: url('../../../../static/images/titleIcon.png') no-repeat
                    background-size: 100%
                    position: relative
                    top: .05rem
            .ticketList
                padding: .2rem
                padding-left: .4rem
                border-bottom: solid 1px $borderColor
                font-size: .26rem
                line-height: .4rem
                position: relative
                .titleBox
                    margin-right: 1.8rem
                    ellipsisMore()
                .tickerPrice
                    position: absolute
                    right: .5rem
                    top: 30%
                    font-size: .24rem
                    color: #9e9e9e
                    .priceBox
                        color: #ff9800
                        .price
                            font-size: .4rem


</style>