<template>
    <div class="DetailBanner">
        <detail-banner
            :title='title'
            :grade='grade'
            :bannerImg='bannerImg'
            :galleryImgs='galleryImgs'
        ></detail-banner>
        <detail-header
            :title='title'
        ></detail-header>
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
            title: '',
            grade: '',
            bannerImg: '',
            galleryImgs: [],
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
            axios.get('/api/detail.json',{
                params: {
                    id: this.$route.params.id
                }
            })
            .then(this.getTickerSucc)
        },
        getTickerSucc (res) {
            var res = res.data
            if(res.ret && res.data) {
                const data = res.data
                this.title = data.title
                this.grade = data.grade
                this.bannerImg = data.bannerImg
                this.galleryImgs = data.galleryImgs
                this.ticketList = data.ticketList
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