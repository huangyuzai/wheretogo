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
            title: '锦绣中华民俗村',
            grade: '(AAAAA景区)',
            bannerImg: 'http://img1.qunarzz.com/sight/p0/1603/9d/9d8c0e9a01bba92e90.water.jpg_600x330_18d5b736.jpg',
            galleryImgs: [
            "http://img1.qunarzz.com/sight/p0/1603/9d/9d8c0e9a01bba92e90.water.jpg_350x240_bda2a037.jpg",
            "http://img1.qunarzz.com/sight/p0/1701/46/46348d2b494ac227a3.water.jpg_350x240_2c4e8c61.jpg",
            "http://img1.qunarzz.com/sight/p0/1601/da/da957ca1602bdc9190.water.jpg_350x240_ef614bd3.jpg",
            "http://img1.qunarzz.com/sight/p0/1601/19/1993fb00037a3ffd90.water.jpg_350x240_61a2616f.jpg",
            "http://img1.qunarzz.com/sight/p0/1601/2c/2c34835cb1432a2890.water.jpg_350x240_08f08899.jpg",
            "http://img1.qunarzz.com/sight/p0/1601/8f/8f4871e82d670ece90.water.jpg_350x240_7340e7f5.jpg"
            ],
            ticketList: [{
            "title": "活动票",
            "children": [{
                "title": "[国庆促销]锦绣中华成人票",
                "price": "99.9",
                "children": [{
                    "title": "[国庆促销]锦绣中华成人票",
                    "price": "99.9"
                }]
            }]
        }, {
            "title": "日场门票",
            "children": [{
                "title": "成人票",
                "price": "187.1"
            }, {
                "title": "儿童/老人票",
                "price": "100"
            }]
        }, {
            "title": "夜场门票",
            "children": [{
                "title": "夜场成人票【周末】",
                "price": "65"
            }, {
                "title": "夜场成人票【平日】",
                "price": "45"
            }]
        }, {
            "title": "欢乐干线",
            "children": [{
                "title": "成人票(锦绣中华站点)",
                "price": "45"
            }]
        }, {
            "title": "一日游",
            "children": [{
                "title": "【深圳出发】中英街+地王大厦+锦绣中华民俗村+金色海岸游艇1日游",
                "price": "358"
            }, {
                "title": "【深圳出发】金色海岸码头+大梅沙+中英街+锦绣中华民俗村+滨海栈道2日游",
                "price": "828"
            }]
        }]
        }
    },
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    }/*,
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
    }*/
 }
</script>

<style lang='stylus' scoped>

</style>