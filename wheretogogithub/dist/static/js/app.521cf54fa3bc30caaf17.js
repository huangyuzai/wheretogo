webpackJsonp([1],{"7fdW":function(t,e){},"9n10":function(t,e){},IzMJ:function(t,e){},KZfI:function(t,e){},LRF3:function(t,e){},M6Sr:function(t,e){},MTBa:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("QYc4")},null,null).exports,r=i("NYxO");s.a.use(r.a);var o=new r.a.Store({state:{city:"深圳"},actions:{changeCity:function(t,e){t.commit("changeCity",e)}},mutations:{changeCity:function(t,e){t.city=e}}}),c=i("/ocq"),l={name:"HomeHeader",props:{city:String}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v("\n       "+this._s(this.$store.state.city)+"\n        "),e("span",{staticClass:"iconfont city-icon"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("span",{staticClass:"iconfont"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont input-icon"},[this._v("")]),this._v("\n     输入城市/景点/游玩主题")])}]};var u=i("VU/8")(l,d,!1,function(t){i("WUSB")},"data-v-2260ab7f",null).exports,p={name:"HomeSwiper",props:{swiperList:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1}}}},computed:{showSwiper:function(){return this.swiperList.length}}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-box"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.swiperList,function(t){return e("swiper-slide",{key:t.id,attrs:{"data-swiper-autoplay":"2000"}},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var v=i("VU/8")(p,h,!1,function(t){i("LRF3")},"data-v-2be3fef0",null).exports,f={name:"HomeIcons",props:{iconsList:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination"}}},computed:{pages:function(){var t=[];return this.iconsList.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons-container"},[i("swiper",{staticClass:"icons-swiper",attrs:{options:t.swiperOption}},[t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icons"},[i("div",{staticClass:"icons-img-box"},[i("img",{staticClass:"icons-img",attrs:{src:e.imgUrl}})]),t._v(" "),i("p",{staticClass:"icons-title"},[t._v(t._s(e.title))])])}))}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var _=i("VU/8")(f,m,!1,function(t){i("mMVw")},"data-v-70d721d7",null).exports,C={name:"HomeRecommend",props:{recommendList:Array},data:function(){return{}}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend-container"},[i("h2",{staticClass:"recommend-title"},[t._v("热销推荐")]),t._v(" "),i("ul",{staticClass:"attractions-box"},t._l(t.recommendList,function(e){return i("router-link",{key:e.id,staticClass:"attractions",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"attractions-img",attrs:{src:e.imgUrl}}),t._v(" "),i("div",{staticClass:"attractions-text"},[i("p",{staticClass:"attractions-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"attractions-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"attractions-details"},[t._v("查看详情")])])])}))])},staticRenderFns:[]};var g=i("VU/8")(C,y,!1,function(t){i("UISj")},"data-v-b3a4d556",null).exports,w={name:"HomeWeekend",props:{weekendList:Array},data:function(){return{}}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weekend-container"},[i("h2",{staticClass:"weekend-title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",{staticClass:"weekend-box"},t._l(t.weekendList,function(e){return i("li",{key:e.id,staticClass:"weekend-attractions"},[i("div",{staticClass:"img-box"},[i("img",{staticClass:"weekend-img",attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"weekend-text"},[i("p",{staticClass:"attractions-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"attractions-desc"},[t._v(t._s(e.desc))])])])}))])},staticRenderFns:[]};var b=i("VU/8")(w,k,!1,function(t){i("R4jP")},"data-v-18824bda",null).exports,x=i("mtWM"),L=i.n(x),$={name:"home",data:function(){return{swiperList:[],iconsList:[],recommendList:[],weekendList:[]}},components:{HomeHeader:u,HomeSwiper:v,HomeIcons:_,HomeRecommend:g,HomeWeekend:b},methods:{getHomeData:function(){L.a.get("/api/index.json").then(this.getHomeSucc)},getHomeSucc:function(t){var e=t.data.data;t.data.ret&&e&&(this.swiperList=e.swiperList,this.iconsList=e.iconsList,this.recommendList=e.recommendList,this.weekendList=e.weekendList)}},mounted:function(){this.getHomeData()}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("home-header"),t._v(" "),i("home-swiper",{attrs:{swiperList:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{iconsList:t.iconsList}}),t._v(" "),i("home-recommend",{attrs:{recommendList:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{weekendList:t.weekendList}})],1)},staticRenderFns:[]};var H=i("VU/8")($,S,!1,function(t){i("WFHw")},"data-v-6c7c5320",null).exports,I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"header-left"},[e("span",{staticClass:"iconfont"},[this._v("")])])]),this._v(" "),e("h1",{staticClass:"header-title"},[this._v("城市选择")])],1)},staticRenderFns:[]};var D=i("VU/8")({name:"CityHeader"},I,!1,function(t){i("zF3+")},"data-v-57bd8b58",null).exports,T=i("GQaK"),E={name:"CitySearch",props:{cities:Object},data:function(){return{keyWord:"",list:[],timer:null}},methods:{cityClick:function(t){this.$store.dispatch("changeCity",t),this.$router.push("/")}},computed:{hasNoData:function(){return this.keyWord.length},noData:function(){return!this.list.length}},watch:{keyWord:function(){var t=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyWord)>-1||i.name.indexOf(t.keyWord)>-1)&&e.push(i)});t.list=e},100)}},mounted:function(){this.scroll=new T.a(this.$refs.content)}},F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyWord,expression:"keyWord"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyWord},on:{input:function(e){e.target.composing||(t.keyWord=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],ref:"content",staticClass:"search-content"},[i("ul",{staticClass:"content-box"},[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"content-title",on:{click:function(i){t.cityClick(e.name)}}},[t._v("\n            "+t._s(e.name))])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.noData,expression:"noData"}],staticClass:"content-title noData"},[t._v("没有找到匹配的数据~")])],2)])])},staticRenderFns:[]};var U=i("VU/8")(E,F,!1,function(t){i("dTyd")},"data-v-9cdb0a10",null).exports,R={name:"CityList",props:{hotCities:Array,cities:Object,letter:String},methods:{cityClick:function(t){this.$store.dispatch("changeCity",t),this.$router.push("/")}},mounted:function(){this.scroll=new T.a(this.$refs.wrapper)},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"current-location listModule"},[i("h2",{staticClass:"title"},[t._v("当前位置")]),t._v(" "),i("ul",{staticClass:"list-container"},[i("li",{staticClass:"list-one"},[i("div",{staticClass:"city-title"},[t._v(t._s(this.$store.state.city))])])])]),t._v(" "),i("div",{staticClass:"popular-cities listModule"},[i("h2",{staticClass:"title"},[t._v("热门城市")]),t._v(" "),i("ul",{staticClass:"list-container"},t._l(t.hotCities,function(e){return i("li",{key:e.id,staticClass:"list-one",on:{click:function(i){t.cityClick(e.name)}}},[i("div",{staticClass:"city-title"},[t._v(t._s(e.name))])])}))]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"letters-list listModule"},[i("h2",{staticClass:"title"},[t._v(t._s(s))]),t._v(" "),i("ul",{staticClass:"list-container"},t._l(e,function(e){return i("li",{key:e.id,staticClass:"list-one",on:{click:function(i){t.cityClick(e.name)}}},[i("div",{staticClass:"city-title"},[t._v(t._s(e.name))])])}))])})],2)])},staticRenderFns:[]};var V=i("VU/8")(R,M,!1,function(t){i("TBeY")},"data-v-634508b9",null).exports,A={name:"CityLetter",props:{cities:Object},data:function(){return{touchstatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},methods:{letterClick:function(t){this.$emit("change",t.target.innerText)},touchstart:function(){this.touchstatus=!0},touchmove:function(t){var e=this;this.touchstatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY,s=Math.floor((i-e.startY)/15);s>=0&&s<e.letters.length&&e.$emit("change",e.letters[s])},16))},touchend:function(){this.touchstatus=!1}},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}}},W={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"letter"},[i("ul",{staticClass:"letter-box"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"letter-list",on:{touchstart:t.touchstart,touchmove:t.touchmove,touchend:t.touchend,click:t.letterClick}},[t._v("\n        "+t._s(e)+"\n        ")])}))])},staticRenderFns:[]};var j={name:"City",data:function(){return{hotCities:[],cities:{},letter:""}},components:{CityHeader:D,CitySearch:U,CityList:V,CityLetter:i("VU/8")(A,W,!1,function(t){i("x8sC")},"data-v-1caab9dd",null).exports},methods:{getCitiesData:function(){L.a.get("/api/city.json").then(this.getCitiesDataSucc)},getCitiesDataSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.hotCities=e.hotCities,this.cities=e.cities}},clickLetter:function(t){this.letter=t}},mounted:function(){this.getCitiesData()}},N={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"city"},[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{hotCities:t.hotCities,cities:t.cities,letter:t.letter}}),t._v(" "),i("city-letter",{attrs:{cities:t.cities},on:{change:t.clickLetter}})],1)},staticRenderFns:[]};var O=i("VU/8")(j,N,!1,function(t){i("XvHd")},"data-v-29e7e91c",null).exports,B={name:"ModuleGallery",props:{galleryImgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{galleryHide:function(){this.$emit("galleryHide",!1)}}},G={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gallery"},[i("div",{staticClass:"wrapper"},[i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.galleryImgs,function(e,s){return i("swiper-slide",{key:s},[i("img",{staticClass:"gallery-img",attrs:{src:e},on:{click:t.galleryHide}})])}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var Y=i("VU/8")(B,G,!1,function(t){i("jyyD")},"data-v-5466351b",null).exports,P={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var z=i("VU/8")({name:"Animation"},P,!1,function(t){i("KZfI")},"data-v-30ff9ad9",null).exports,Q={name:"DetailBanner",props:{title:String,grade:String,bannerImg:String,galleryImgs:Array},data:function(){return{isGallery:!1}},components:{ModuleGallery:Y,ModuleAnimation:z},methods:{galleryBtn:function(){this.isGallery=!0},galleryHide:function(){this.isGallery=!1}}},X={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",attrs:{id:"banner"},on:{click:t.galleryBtn}},[i("div",{staticClass:"bannerImgBox"},[i("img",{staticClass:"bannerImg",attrs:{src:this.bannerImg}}),t._v(" "),i("div",{staticClass:"titleBox"},[i("p",{staticClass:"bannerTitle"},[t._v(t._s(this.title)+t._s(this.grade))]),t._v(" "),i("span",{staticClass:"iconfont imgNum"},[t._v("  "+t._s(this.galleryImgs.length))])])])]),t._v(" "),i("module-animation",[i("module-gallery",{directives:[{name:"show",rawName:"v-show",value:t.isGallery,expression:"isGallery"}],attrs:{galleryImgs:this.galleryImgs},on:{galleryHide:t.galleryHide}})],1)],1)},staticRenderFns:[]};var J=i("VU/8")(Q,X,!1,function(t){i("QDGs")},"data-v-68948e5a",null).exports,K={name:"DetailHeader",props:{title:String},data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{scrollMethod:function(){var t=document.documentElement.scrollTop;if(t>10){var e=t/140;e=e>1?1:e,this.showAbs=!1,this.opacityStyle={opacity:e}}else this.showAbs=!0}},mounted:function(){window.addEventListener("scroll",this.scrollMethod,!0)},destroyed:function(){window.removeEventListener("scroll",this.scrollMethod,!0)}},q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showAbs,expression:"showAbs"}],staticClass:"header-abs"},[i("router-link",{attrs:{to:"/",tag:"div"}},[i("span",{staticClass:"iconfont callback"},[t._v("")])])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:t.opacityStyle},[i("router-link",{staticClass:"header--fixed",attrs:{to:"/",tag:"div"}},[i("span",{staticClass:"iconfont callback"},[t._v("")])]),t._v(" "),i("h1",{staticClass:"header-title"},[t._v(t._s(this.title))])],1)])},staticRenderFns:[]};var Z=i("VU/8")(K,q,!1,function(t){i("MTBa")},"data-v-a0eb4a6a",null).exports,tt={name:"DetailList",props:{ticketList:Array}},et={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list"},t._l(t.ticketList,function(e,s){return i("div",{key:s,staticClass:"oneList"},[i("div",{staticClass:"listTitle"},[i("span",{staticClass:"titleIcon"}),t._v("\n            "+t._s(e.title)+"\n        ")]),t._v(" "),t._l(e.children,function(e,s){return i("div",{key:s,staticClass:"ticketList",attrs:{"data-index":s}},[i("div",{staticClass:"titleBox"},[t._v("\n                "+t._s(e.title)+"\n            ")]),t._v(" "),i("div",{staticClass:"tickerPrice"},[i("span",{staticClass:"priceBox"},[t._v("￥"),i("span",{staticClass:"price"},[t._v(t._s(e.price))])]),t._v("起\n            ")])])})],2)}))},staticRenderFns:[]};var it={name:"Detail",data:function(){return{title:"",grade:"",bannerImg:"",galleryImgs:[],ticketList:[]}},components:{DetailBanner:J,DetailHeader:Z,DetailList:i("VU/8")(tt,et,!1,function(t){i("IzMJ")},"data-v-001af28b",null).exports},methods:{getTicketData:function(){L.a.get("/api/detail.json",{params:{id:this.$route.params.id}}).then(this.getTickerSucc)},getTickerSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.title=e.title,this.grade=e.grade,this.bannerImg=e.bannerImg,this.galleryImgs=e.galleryImgs,this.ticketList=e.ticketList}}},mounted:function(){this.getTicketData()}},st={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"DetailBanner"},[i("detail-banner",{attrs:{title:t.title,grade:t.grade,bannerImg:t.bannerImg,galleryImgs:t.galleryImgs}}),t._v(" "),i("detail-header",{attrs:{title:t.title}}),t._v(" "),i("detail-list",{attrs:{ticketList:t.ticketList}})],1)},staticRenderFns:[]};var nt=i("VU/8")(it,st,!1,function(t){i("7fdW")},"data-v-223fedad",null).exports;s.a.use(c.a);var at=new c.a({routes:[{path:"/",name:"Home",component:H},{path:"/city",name:"City",component:O},{path:"/detail/:id",name:"Detail",component:nt}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),rt=i("DVXL"),ot=i.n(rt),ct=i("F3EI"),lt=i.n(ct);i("j1ja"),i("v2ns"),i("9n10"),i("M6Sr"),i("TzC8");s.a.config.productionTip=!1,ot.a.attach(document.body),s.a.use(lt.a),new s.a({el:"#app",router:at,store:o,components:{App:a},template:"<App/>"})},QDGs:function(t,e){},QYc4:function(t,e){},R4jP:function(t,e){},TBeY:function(t,e){},TzC8:function(t,e){},UISj:function(t,e){},WFHw:function(t,e){},WUSB:function(t,e){},XvHd:function(t,e){},dTyd:function(t,e){},jyyD:function(t,e){},mMVw:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},v2ns:function(t,e){},x8sC:function(t,e){},"zF3+":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.521cf54fa3bc30caaf17.js.map