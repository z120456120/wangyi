<template>
    <div>
        <banner :loop="true" :clickable="true">
            <div class="swiper-slide" v-for="item in looplist" :key="item.id">
        <div :style="{
        backgroundImage:'url('+item.imgUrl+')'
      }"></div>
      </div>
        </banner>
        <ul>
          <li>
            <router-link to="/lia/liaa" tag="span" active-class="lisa">正在热映</router-link>
          </li>
         <li>
            <router-link to="/lia/liab" tag="span" active-class="lisa">即将上映</router-link>
         </li>
        </ul>
        <!-- <button @click="bar()">liaa</button>
        <button @click="baa()">liab</button> -->
        <router-view></router-view>
    </div>
</template>
<script>
import banner from '@/components/banner'
export default {
  data () {
    return {
      // bgImageObj:,
      looplist: [
        {
          id: '111',
          imgUrl: 'https://pic.maizuo.com/usr/movie/7cdc1831fb22cf2f9d2bef30d6010f14.jpg?x-oss-process=image/quality,Q_70'
        },
        {
          id: '222',
          imgUrl: 'https://pic.maizuo.com/usr/movie/12e7b5e16993db815f598d56c57b5125.jpg?x-oss-process=image/quality,Q_70'
        },
        {
          id: '333',
          imgUrl: 'https://pic.maizuo.com/usr/movie/4c82f21cc3469374941a59fe32fd05c9.jpg?x-oss-process=image/quality,Q_70'
        }
      ]
    }
  },
  // methods: {
  //   bar () {
  //     this.$router.push('/lia/liaa')
  //   },
  //   baa () {
  //     this.$router.push('/lia/liab')
  //   }
  // },
  components: {
    banner
  }
}
</script>
<style lang="scss" scoped>
    *{
  margin: 0;
  padding: 0;
    }
    .swiper-slide div {
    width: 100%;
    height: 200px;
    background-position: center;
    background-size: cover;
    }
    div{
      ul{
        list-style: none;
        display: flex;
        border-bottom: 1px solid #ededed;
        margin: 5px 0;
        position: sticky; //粘性定位
        top: 0px;
        background-color: white;
        li{
          flex: 1;
          text-align: center;
          line-height: 50px;
          span{
            display: inline-block;
            line-height: 50px;
          }
        }
      }
    }
    .lisa{
      color: #f60;
      border-bottom: 2px solid #f60;
    }
</style>
