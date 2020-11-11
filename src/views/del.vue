<template>
    <div v-if="date" id="dels">
      <delhead v-top :title="date.name"></delhead>
      <div :style="{
        backgroundImage:'url('+date.poster+')'
      }" class="bakdiv">
      </div>
      <buttn></buttn>
        <div class="nei">
          <h5>{{date.name}}</h5>
          <p>{{date.category}}</p>
          <p>{{date.premiereAt | datenow}} 上映</p>
          <p>{{date.nation}} | {{date.runtime}} 分钟</p>
          <p class="p1" :class="thk?'p2':''">{{date.synopsis}}</p>
          <div><i class="iconfont" :class="thk?'icon-top-line':'icon-xia'" @click="thk=!thk"></i></div>
        </div>
        <div id="yanyuan">
          <h1>演职人员</h1>
          <delban :perview="3" title="yan" :spaceBetween="20">
            <div class="swiper-slide" v-for="(item,index) in date.actors" :key="index">
              <img :src="item.avatarAddress"/>
              <div style="text-align:center;">{{item.name}}</div>
              <div style="text-align:center;">{{item.role}}</div>
            </div>
          </delban>
        </div>
        <div id="juzhao">
          <h1>剧照</h1>
          <delban :perview="4" title="ju" :spaceBetween="10">
               <div class="swiper-slide" v-for="(item,index) in date.photos" :key="index">
                  <div :style="
            {
              backgroundImage:'url('+item+')'
            }
          " class="photobg" @click="jubtn(index)"></div>
                </div>
          </delban>
        </div>
        <div id="gou">选座购票</div>
    </div>
</template>
<script>
import axios from 'axios'
import http from '@/util/http'
import buttn from '@/views/buttn'
import moment from 'moment'
import delban from '@/components/delban'
import '@/assets/iconfont/iconfont.css'
import delhead from '@/views/lia/delhead'
import Vue from 'vue'
import { ImagePreview } from 'vant'
import { mapMutations } from 'vuex'
Vue.directive('top', {
  unbind () {
    window.onscroll = null
  },
  inserted (el, binding) {
    el.style.display = 'none'

    window.onscroll = () => {
      console.log(el)
      const taget = binding.value ? binding.value : 80
      if ((document.documentElement.scrollTop || document.body.scrollTop) > taget) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  }
})
export default {
  data () {
    return {
      id: this.$route.params.id,
      date: null,
      thk: false
    }
  },
  filters: {
    datenow (path) {
      return moment(path * 1000).format('YYYY-MM-DD')
    }
  },
  methods: {
    ...mapMutations(['isShowb', 'isShowa']),
    jubtn (index) {
      ImagePreview({ images: this.date.photos, startPosition: index })
    }
  },
  mounted () {
    this.isShowb()
    http({
      url: `/gateway?filmId=${this.$route.params.id}&k=3285072`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    })
      .then(res => {
        // this.date = res.data.data.films.filter(item => item.filmId == this.id)[0]
        this.date = res.data.data.film
        console.log(this.date)
      })
  },
  destroyed () {
    // 显示tabbar
    this.isShowa()
  },
  // filters: {
  //   itemfilter (path) {
  //     return path.replace('/w.h', '') + '@1l_1e_1c_128w_180h'
  //   }
  // }
  components: {
    buttn,
    delban,
    delhead
  }
}
</script>
<style lang="scss" scoped>
  *{
    padding: 0;
    margin: 0;
  }
  ul{
      list-style: none;
  }
  .bakdiv{
     background-position: center;
    background-size: cover;
    height:200px;
  }
  .photobg{
    background-position: center;
    background-size: cover;
    height:100px;
  }
  #yanyuan{
    padding-bottom: 20px;
    border-bottom: 10px solid #ccc;
  }
  #juzhao{
    margin-bottom: 90px;
  }
  div{
    .nei{
      padding: 15px;
      padding-top: 12px;
      border-bottom:10px solid #ededed;
      h5{
        color: #191a1b;
        font-size: 18px;
        height: 24px;
        line-height: 24px;
        margin-right: 7px;
      }
      p{
        font-size: 13px;
        color: #797d82;
        line-height: 22px;
        overflow: hidden;
      }
      .p1{
        margin-top: 15px;
        height: 40px;
      }
      .p2{
        height: 110px;
      }
      div{
        text-align: center;
        margin-top: 5px;
      }
    }
  }
  #gou{
    height: 55px;
    line-height: 55px;
    text-align: center;
    background-color: #ff5f16;
    color: #fff;
    font-size: 16px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
  }
</style>
