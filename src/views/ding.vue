<template>
    <div>
        <van-index-bar :index-list="lisyfoo" @select="selfoo">
           <div v-for="item in lisy" :key="item.type">
                <van-index-anchor :index="item.type"/>
                <van-cell :title="data.name" v-for="data in item.list" :key="data.cityId" @click="dingfoo(data)"/>
           </div>
        </van-index-bar>
    </div>
</template>
<script>
import Vue from 'vue'
import http from '@/util/http.js'
import { IndexBar, IndexAnchor, Toast } from 'vant'
import { mapMutations } from 'vuex'

Vue.use(IndexBar).use(IndexAnchor)
export default {
  data () {
    return {
      lisy: []
    }
  },
  computed: {
    lisyfoo () {
      console.log(this.lisy.map(item => item.type))
      return this.lisy.map(item => item.type)
    }
  },
  mounted () {
    this.isShowb()
    http({
      url: '/gateway?k=9253050',
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      this.lisy = this.zhuan(res.data.data.cities)
      console.log(this.lisy)
    })
  },
  methods: {
    ...mapMutations(['isShowb', 'isShowa']),
    zhuan (list) {
      const zhuana = []
      const newlist = []
      for (var i = 65; i < 91; i++) {
        zhuana.push(String.fromCharCode(i))
      }
      console.log(zhuana)
      zhuana.forEach(letter => {
        const zhuanb = list.filter(item => item.pinyin.substring(0, 1).toUpperCase() === letter)
        zhuanb.length && newlist.push({
          type: letter,
          list: zhuanb
        })
      })
      return newlist
    },
    selfoo (data) {
      Toast(data)
    },
    ...mapMutations(['dingstorea', 'dingstoreb']),
    dingfoo (das) {
      this.dingstorea(das.cityId)
      this.dingstoreb(das.name)

      this.$router.back()
    }
  },
  destroyed () {
    this.isShowa()
  }
}
</script>
