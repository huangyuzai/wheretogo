<template>
    <div class="list" ref='wrapper'>
        <div>
            <div class="current-location listModule">
                <h2 class="title">当前位置</h2>
                <ul class="list-container">
                    <li class='list-one'>
                        <div class="city-title">{{this.$store.state.city}}</div>
                    </li>
                </ul>
            </div>
            <div class="popular-cities listModule">
                <h2 class="title">热门城市</h2>
                <ul class="list-container">
                    <li class='list-one'
                        v-for='item of hotCities'
                        :key='item.id'
                        @click='cityClick(item.name)'
                    >
                        <div class="city-title">{{item.name}}</div>
                    </li>
                </ul>
            </div>
            <div class="letters-list listModule"
                 v-for='(item,key) of cities'
                 :key='key'
                 :ref='key'
            >
                <h2 class="title">{{key}}</h2>
                <ul class="list-container">
                    <li class='list-one'
                    v-for='citiesItem of item'
                    :key='citiesItem.id'
                    @click='cityClick(citiesItem.name)'
                    >
                        <div class="city-title">{{citiesItem.name}}</div>
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
    props: {
        hotCities: Array,
        cities: Object,
        letter: String
    },
    methods: {
        cityClick (city) {
            this.$store.dispatch('changeCity',city)
            this.$router.push('/')
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    watch: {
        letter () {
            if(this.letter) {
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
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