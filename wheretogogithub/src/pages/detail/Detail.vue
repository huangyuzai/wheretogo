<template>
    <div class="DetailBanner">
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <detail-list :ticketList='ticketList'></detail-list>
    </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
    name: 'Detail',
    data () {
        return {
            ticketList: []
        }
    },
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    methods: {
        getTicketData () {
            axios.get('/api/ticket.json')
            .then(this.getTickerSucc)
        },
        getTickerSucc (res) {
            var res = res.data
            if(res.ret && res.data) {
                this.ticketList = res.data.ticketList
            }
        }
    },
    mounted () {
        this.getTicketData()
    }
 }
</script>

<style lang='stylus' scoped>

</style>