<template>
    <div>
        <div class="search">
            <input
                type="text"
                class="search-input"
                placeholder="输入城市名或拼音"
                v-model='keyWord'
            />
        </div>
        <div class="search-content"
             v-show='hasNoData'
             ref='content'
        >
            <ul class="content-box">
                <li class="content-title"
                    v-for='item of list'
                    :key='item.id'
                    @click='cityClick(item.name)'
                >
                {{item.name}}</li>
                <li class="content-title noData"
                    v-show='noData'
                >没有找到匹配的数据~</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    data () {
        return {
            keyWord: '',
            list: [],
            timer: null
        }
    },
    methods: {
        cityClick (city) {
            this.$store.dispatch('changeCity',city)
            this.$router.push('/')
        }
    },
    computed: {
        hasNoData () {
            return this.keyWord.length
        },
        noData () {
            return !this.list.length
        }
    },
    watch: {
        keyWord () {
            if(this.timer) {
                clearTimeout(this.timer)
            }
            this.timer = setTimeout( () => {
                const result = []
                for(let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        if(value.spell.indexOf(this.keyWord) > -1 || value.name.indexOf(this.keyWord) > -1) {
                            result.push(value)
                        }
                    })
                }
                this.list = result
            },100)
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.content,{click: true})
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
    .search
        padding:.1rem .2rem
        background: $headerBg
        .search-input
            box-sizing: border-box
            width: 100%
            padding: .06rem .2rem
            text-align: center
            border-radius: .06rem
            color: #666
    .search-content
        box-sizing: border-box
        overflow: hidden
        background: #eee
        position: absolute
        top: 1.6rem
        left: 0
        right: 0
        bottom: 0
        z-index: 1
        .content-box
            .content-title
                padding: .2rem
                background: white
                border-bottom: solid 1px $borderColor
            .noData
                text-align: center
</style>