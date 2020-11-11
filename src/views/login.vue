<template>
    <div>
        <input type="text"><van-button type="primary" @click="loo()">登录</van-button>
    </div>
</template>
<script>
import Vue from 'vue'
import { Button } from 'vant'

Vue.use(Button)
export default {
  methods: {
    loo () {
      localStorage.setItem('zhao', '大萨达多')
      this.$router.push('/cente')
    }
  },
  components: {
  }
}
</script>
