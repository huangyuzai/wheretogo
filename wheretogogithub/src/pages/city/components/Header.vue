<template>
    <div class="header">
        <router-link to='/'>
            <div class="header-left">
                <span class="iconfont">&#xe606;</span>
            </div>
        </router-link>
        <h1 class="header-title">城市选择</h1>
    </div>
</template>

<script>
export default {
    name: 'CityHeader'
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
    .header
        position: relative
        line-height: $headerHeight
        background: $headerBg
        color: #fff
        text-align: center
        font-size: $headerFont
        .header-left
            color: white
            position: absolute
            width: .80rem
            text-align: center
</style>