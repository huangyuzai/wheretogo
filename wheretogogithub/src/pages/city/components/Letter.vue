<template>
    <div class="letter">
        <ul class="letter-box">
            <li class="letter-list"
                v-for='item of letters'
                :key='item'
                :ref='item'
                @touchstart.prevent='touchstart'
                @touchmove='touchmove'
                @touchend='touchend'
                @click='letterClick'
            >
            {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CityLetter',
    props: {
        cities: Object
    },
    data () {
        return {
            touchstatus: false,
            startY: 0,
            timer: null
        }
    },
    /*updated () {
        this.startY = this.$refs['A'][0].offsetTop
    },*/
    methods: {
        letterClick (e) {
            console.log(e)
            this.$emit('change',e.target.innerText)
        },
        touchstart () {
            this.touchstatus = true
        },
        touchmove (e) {
            this.startY = this.$refs['A'][0].offsetTop
            if(this.touchstatus) {
                if(this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    const touchY = e.touches[0].clientY
                    const index = Math.floor((touchY - this.startY) / 15)
                    if(index >= 0 && index < this.letters.length) {
                        this.$emit('change',this.letters[index])
                    }
                },16)
            }
        },
        touchend () {
            this.touchstatus = false
        }
    },
    computed: {
        letters () {
            const letters = []
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
    .letter
        box-sizing: border-box
        height: 100%;
        padding-top: 1.6rem
        position: absolute
        top: 0
        right: 0
        display: flex
        flex-direction: column
        justify-content: center
        width: .4rem
        .letter-box
            width: 100%
            .letter-list
                text-align: center
                height: .3rem
                line-height: .3rem
                font-size: .24rem
                color: $headerBg
</style>