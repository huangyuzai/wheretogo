<template>
    <div class="city">
        <city-header></city-header>
        <city-search></city-search>
        <city-list :hotCities='hotCities' :cities='cities'></city-list>
        <city-letter :cities='cities'></city-letter>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityLetter from './components/Letter.vue'

export default {
    name: 'City',
    data () {
        return {
            hotCities: [],
            cities: {}
        }
    },
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityLetter
    },
    methods: {
        getCitiesData () {
            axios.get('/api/city.json')
            .then(this.getCitiesDataSucc)
        },
        getCitiesDataSucc (res) {
            res = res.data
            if(res.ret && res.data) {
                const data = res.data
                this.hotCities = data.hotCities
                this.cities = data.cities
            }
        }
    },
    mounted () {
        this.getCitiesData()
    }
}
</script>

<style lang='stylus' scoped>

</style>