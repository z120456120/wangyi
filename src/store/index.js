import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/util/http'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    dingid: 310100,
    dingname: '上海',
    stolist: [],
    isShow: true
  },
  mutations: {
    dingstorea (state, dasid) {
      state.dingid = dasid
    },
    dingstoreb (state, dasname) {
      state.dingname = dasname
    },
    dingstorec (state, daslist) {
      state.stolist = daslist
    },
    clearstore (state, dasname) {
      state.stolist = []
    },
    isShowa (state) {
      state.isShow = true
    },
    isShowb (state) {
      state.isShow = false
    }
  },
  actions: {
    qingstorea (store, dasid) {
      return http({
        url: `/gateway?cityId=${dasid}&ticketFlag=1&k=3297439`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res => {
        store.commit('dingstorec', res.data.data.cinemas)
      })
    }
  },
  modules: {
  }
})
