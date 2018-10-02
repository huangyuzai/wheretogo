<template>
    <div class='header'>
        <div class='header-abs'
             v-show='showAbs'
        >
            <router-link to='/'
                         tag='div'
            >
                <span class="iconfont callback">&#xe606;</span>
            </router-link>
        </div>
        <div class="header-fixed"
             v-show='!showAbs'
             :style='opacityStyle'
        >
            <router-link to='/'
                         class='header--fixed'
                         tag='div'
            >
                <span class="iconfont callback">&#xe606;</span>
            </router-link>
            <h1 class="header-title">锦绣中华民俗村</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data () {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        scrollMethod () {
            const top = document.documentElement.scrollTop
            if (top > 0) {
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.showAbs = false
                this.opacityStyle = {
                    opacity
                }
            } else {
                this.showAbs = true
            }
        }
    },
    mounted () {
        window.addEventListener('scroll',this.scrollMethod,true)
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/mixins.styl'
@import '~styles/varibles.styl'

    .header-abs
        width: .72rem
        height: .72rem
        border-radius: 100%
        background: rgba(0,0,0,.5)
        position: absolute
        top: 0
        margin: .1rem
        text-align: center
        line-height: .72rem
        .callback
            color: white
            font-size: .36rem
    .header-fixed
        titleStyle()
        background: $headerBg
        text-align: center
        padding-left: 0
        position: fixed
        width: 100%
        top: 0
        left: 0
        .header--fixed
            position: absolute
            left: .26rem
            .callback
                color: white
        .header-title
            display: inline-block
            color: white
            font-size: .32rem
</style>