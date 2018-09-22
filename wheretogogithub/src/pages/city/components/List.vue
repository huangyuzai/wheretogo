<template>
    <div class="list" ref='wrapper'>
        <div>
            <div class="current-location listModule">
                <h2 class="title">当前位置</h2>
                <ul class="list-container">
                    <li class='list-one'>
                        <div class="city-title">深圳</div>
                    </li>
                </ul>
            </div>
            <div class="popular-cities listModule">
                <h2 class="title">热门城市</h2>
                <ul class="list-container">
                    <li class='list-one'>
                        <div class="city-title">深圳</div>
                    </li>
                    <li class='list-one'>
                        <div class="city-title">广州</div>
                    </li>
                    <li class='list-one'>
                        <div class="city-title">上海</div>
                    </li>
                    <li class='list-one'>
                        <div class="city-title">北京</div>
                    </li>
                </ul>
            </div>
            <div class="letters-list listModule">
                <h2 class="title">A</h2>
                <ul class="list-container">
                    <li class='list-one'>
                        <div class="city-title">阿拉尔</div>
                    </li>
                    <li class='list-one'>
                        <div class="city-title">阿拉尔</div>
                    </li>
                    <li class='list-one'>
                        <div class="city-title">阿拉尔</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
export default {
    name: 'CityList',
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
    .list
        overflow: hidden
        position: absolute
        top: 1.6rem
        left: 0
        bottom: 0
        right: 0
    .title
        background: $Color-f5f5f5
        padding-left: .2rem
        color: $titleColor
        height: .72rem
        line-height: .72rem
        font-size: .24rem
    .list-container
        box-sizing: border-box
        overflow: hidden
        padding: .1rem .2rem .1rem
        .list-one
            margin: .06rem
            float: left
            width: 29%
            border: solid 1px $borderColor
            padding: .1rem 0
            border-radius: .06rem
            .city-title
                padding: 0 .1rem
                text-align: center
                ellipsis()
</style>