<template>
    <div>
        <van-list
         v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :immediate-check="false"
        @load="onLoad">
            <van-cell v-for="item in list" :key=item.filmId @click="foo(item.filmId)">
                <img :src="item.poster" v-lazy="item.poster" />
                <div>
                    <h5>{{item.name}} <span>{{item.item.name}}</span></h5>
                    <p v-show="item.grade">观众评分 <span>{{item.grade}}</span></p>
                    <p>主演 :{{item.actors | itemfil}}</p>
                    <p>{{item.nation}} | {{item.runtime}}分钟</p>
                </div>
            </van-cell>
        </van-list>
    </div>
</template>
<script>
import axios from 'axios'
import http from '@/util/http'
import Vue from 'vue'
import { Lazyload, List, Cell } from 'vant'

Vue.use(List).use(Lazyload).use(Cell)

// Vue.use(Lazyload, {
//   lazyComponent: true,
// });
// Vue.filter('itemcc', (path) => {
//   return path.replace('/w.h', '') + '@1l_1e_1c_128w_180h'
// })
export default {
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      consnet: 1,
      total: 0
    }
  },
  mounted () {
    http({
      url: `/gateway?cityId=${this.$store.state.dingid}&pageNum=1&pageSize=10&type=1&k=5275130`,
      // method:"post"
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    })
      .then(res => {
        this.list = res.data.data.films
        console.log(this.list)
        this.total = res.data.data.total
      })
  },
  methods: {
    foo (id) {
      console.log(id)
      // this.$router.push({ name: 'del', params: { id } })
      this.$router.push(`/del/${id}`)
    },
    onLoad () {
      if (this.list.length === 0) {
        this.loading = false
        return
      }
      if (this.list.length === this.total) {
        this.finished = true // 请求结束，禁用懒加载
        return
      }
      this.consnet++
      http({
        url: `/gateway?cityId=${this.$store.state.dingid}&pageNum=${this.consnet}&pageSize=10&type=1&k=5275130`,
        // method:"post"
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      })
        .then(res => {
          this.list = [...this.list, ...res.data.data.films]

          this.loading = false
        })
    }
  },
  filters: {
    itemfil (path) {
      return path.map(item => item.name).join(' ')
    }
  }
}
</script>
<style lang="scss" scoped>
   *{
    padding: 0;
    margin: 0;
  }
  div{
    overflow: hidden;
  }
      .van-cell{
        padding: 15px 15px 15px 0;
        img{
          width: 78px;
          margin-left: 10px;
          float: left;
          height: 100%;
        }
        div{
          margin-left: 10px;
          width: 229px;
          float: left;
          h5{
            color: #191a1b;
            font-size: 16px;
            height: 22px;
            font-weight: 300;
            overflow: hidden;
            span{
            font-size: 9px;
            color: #fff;
            background-color: #d2d6dc;
            height: 14px;
            line-height: 14px;
            padding: 0 2px;
            border-radius: 2px;
            display: inline-block;
            vertical-align: middle;
            margin-bottom: 4px;
            }
          }
          p{
            font-size: 13px;
            margin-top: 4px;
            color: #797d82;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            span{
              color: #f60;
            }
          }
        }
      }

</style>
