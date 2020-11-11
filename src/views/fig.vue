<template>
    <div>
         <div>
            <van-nav-bar title="影院"  @click-left="dingwei()" ref="figovb" @click-right="chaxun()">
            <template #left>
                {{dingname}}
                 <van-icon name="arrow-down" size="14" color="black"/>
            </template>
            <template #right>
            <van-icon name="search" size="24" color="black"/>
            </template>
            </van-nav-bar>
            <div class="figas" :style="{
            height:heights
        }">
            <ul>
            <li v-for="item in stolist" :key="item.cinemaId">
                <div id="figleft">
                    <h3>{{item.name}}</h3>
                    <p>{{item.address}}</p>
                </div>
                <div id="figright">
                    <span class="figy">￥{{item.lowPrice | figfilter}} 起</span>
                    <p>距离未知</p>
                </div>
            </li>
        </ul>
            </div>
        </div>
    </div>
</template>
<script>
import http from '@/util/http'
import BetterScroll from 'better-scroll'
import Vue from 'vue'
import { mapActions, mapMutations, mapState } from 'vuex'
import { NavBar, Icon } from 'vant'

Vue.use(NavBar).use(Icon)
export default {
  data () {
    return {
      list: [],
      heights: '0px'
    }
  },
  filters: {
    figfilter (path) {
      return String(path).substr(0, 2)
    }
  },
  components: {
    // foot
  },
  computed: {
    ...mapState(['dingname', 'dingid', 'stolist'])
  },
  methods: {
    ...mapMutations(['clearstore']),
    ...mapActions(['qingstorea']),
    dingwei () {
      this.clearstore()
      this.$router.push('/ding')
    },
    chaxun () {
      this.$router.push('/chaxun')
    }
  },
  mounted () {
    // 动态计算 betterscroll 高度
    console.log(this.$refs.figovb.$el.clientHeight)
    this.heights = document.documentElement.clientHeight - 50 - this.$refs.figovb.$el.clientHeight + 'px'
    if (this.stolist.length === 0) {
      // 请求数据
      this.qingstorea(this.dingid)
        .then(res => {
          this.$nextTick(() => {
            new BetterScroll('.figas', {
              scrollbar: {
                fade: true
              },
              click: true,
              mouseWheel: true
            })
          })
        })
    } else {
      console.log('使用缓存')
      this.$nextTick(() => {
        new BetterScroll('.figas', {
          scrollbar: {
            fade: true
          },
          click: true,
          mouseWheel: true
        })
      })
    }
    // http({
    //   url: `/gateway?cityId=${this.$store.state.dingid}&ticketFlag=1&k=3297439`,
    //   headers: {
    //     'X-Host': 'mall.film-ticket.cinema.list'
    //   }
    // }).then(res => {
    //   this.list = res.data.data.cinemas
    //   console.log(this.list)
    //   // 赋值完数据，异步插入dom
    //   this.$nextTick(() => {
    //     new BetterScroll('.figas', {
    //       scrollbar: {
    //         fade: true
    //       },
    //       click: true,
    //       mouseWheel: true
    //     })
    //   })
    // })
  }
}
</script>
<style lang="scss" scoped>
    div{
        .van-nav-bar{
            height: 50px;
            line-height: 50px;
            text-align: center;
            background: white;
            width: 100%;
        }
    }
    ul{
        list-style: none;
    }
        li{
           overflow: hidden;
           line-height: 40px;
           padding: 10px 0;
           border-bottom: 1px solid #ccc;
        #figleft{
            float: left;
            padding-left:15px ;
            h3{
                color:#333;
                font-size: 18px;
            }
            p{
                color:#666;
                font-size: 14px;
                width: 250px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
        }
        #figright{
            padding-right: 15px;
            float: right;
            text-align: right;
            span{
                 color: #f60;
            }
            p{
                 color:#666;
                font-size: 14px;
            }
        }
    }
    .figas{
        height: 500px;
        overflow: hidden;
        position: relative;
    }
</style>
