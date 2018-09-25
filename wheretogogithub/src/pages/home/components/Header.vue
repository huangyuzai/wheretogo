<template>
  <div class='header'>
      <div class="header-left">
        <span class="iconfont">&#xe606;</span>
      </div>
      <div class="header-input">
        <span class="iconfont input-icon">&#xe615;</span>
       输入城市/景点/游玩主题</div>
      <router-link to='/city'>
        <div class="header-right">
         {{this.$store.state.city}}
          <span class="iconfont city-icon">&#xe6aa;</span>
        </div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .header
     line-height: $headerHeight
     display: flex
     background: $headerBg
     color: #fff
     .header-left
        float: left
        width: .80rem
        text-align: center
     .header-input
        flex: 1
        height: .60rem
        line-height: .60rem
        background: #fff
        border-radius: .1rem
        margin-top: .13rem
        color: #e4e7ea
        .input-icon
           margin-left: .1rem
     .header-right
        color: white
        float: right
        padding: 0 .21rem
        text-align: center
        .city-icon
           font-size: 12px

</style>