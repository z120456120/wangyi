<template>
       <footer>
           <ul>
            <router-link to="/lia" tag="li" active-class="jkh">
            <i class="iconfont icon-dianying"></i>
            <span>电影</span>
            </router-link>
            <router-link to="/fig" tag="li" active-class="jkh">
            <i class="iconfont icon-yingyuan"></i>
            <span>影院</span>
            </router-link>
            <router-link to="/xiang" tag="li" active-class="jkh">
            <i class="iconfont icon-zixun"></i>
            <span>咨询</span>
            </router-link>
            <router-link to="/cente" tag="li" active-class="jkh">
            <i class="iconfont icon-wode"></i>
            <span>我的</span>
            </router-link>
        </ul>
       </footer>
</template>
<script>
import '@/assets/iconfont/iconfont.css'
export default {}

</script>
<style lang="scss" scoped>
.jkh{
        color: red;
    }
    footer{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: white;

    ul{
        list-style: none;
        display: flex;
        line-height: 30px;
        background: white;
        color: #797d82;
        cursor: pointer;
        li{
            flex: 1;
            text-align: center;
            display: flex;
            flex-direction: column;
        i{
          font-size:20px;
        }
        span{
          font-size:12px;
        }
        }
    }
     }
</style>
