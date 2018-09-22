<template>
    <div class="letter">
        <ul class="letter-box">
            <li class="letter-list">A</li>
            <li class="letter-list">A</li>
            <li class="letter-list">A</li>
            <li class="letter-list">A</li>
            <li class="letter-list">A</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CityLetter'
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