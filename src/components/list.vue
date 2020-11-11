<template>
    <div>
        <ul>
            <li v-for="item in list" :key=item.id>
                <img :src="item.img | itemcc">
                <div>
                    <h5>{{item.nm}}</h5>
                    <p>{{item.star}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
Vue.filter('itemcc', (path) => {
  return path.replace('/w.h', '') + '@1l_1e_1c_128w_180h'
})
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    axios.get('/xiaozhao/ajax/movieOnInfoList?token=&optimus_uuid=1E04699018F211EBB3924127549FF1836ABCAEA3FDB641229075D7A381B0A98A&optimus_risk_level=71&optimus_code=10')
      .then(res => {
        console.log(res.data.movieList)
        this.list = res.data.movieList
      })
  }
}
</script>
<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
    ul{
        list-style: none;
        li{
            display: flex;
            margin-bottom: 5px;
           div{
               margin-left: 5px;
                h5{
                font-size: 16px;
                line-height: 24px;
            }
                 p{
                font-size: 14px;
                color: #f60;
            }
           }
        }
    }
</style>
