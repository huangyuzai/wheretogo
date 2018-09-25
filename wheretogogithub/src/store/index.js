import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        city: '深圳'
    },
    actions: {
        changeCity (ctx,res) {
            ctx.commit('changeCity',res)
        }
    },
    mutations: {
        changeCity (state,res) {
            state.city = res
        }
    }
})