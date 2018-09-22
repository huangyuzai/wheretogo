<template>
    <div class="city">
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <city-letter></city-letter>
    </div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityLetter from './components/Letter.vue'

export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityLetter
    }
}
</script>

<style lang='stylus' scoped>

</style>