<template>
  <div class='header'>
      <div class="header-left">
        <span class="iconfont">&#xe606;</span>
      </div>
      <div class="header-input">
        <span class="iconfont input-icon">&#xe615;</span>
       输入城市/景点/游玩主题</div>
      <div class="header-right">
       城市
        <span class="iconfont city-icon">&#xe64a;</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header
     line-height: .86rem
     display: flex
     background: $Color-00b4cd
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
        float: right
        width: 1.28rem
        text-align: center
        .city-icon
           font-size: 12px

</style>