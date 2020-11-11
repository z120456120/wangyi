<template>
    <!-- <van-sticky> -->
    <div>
        <i class="iconfont icon-buoumaotubiao09" @click="delfoo()"></i>
        {{title}}
    </div>
    <!-- </van-sticky> -->
</template>
<script>
export default {
  methods: {
    delfoo () {
      this.$router.back()
    }
  },
  props: ['title']
}
</script>
<style lang="scss" scoped>
    div{
        height: 49px;
        position: fixed;
        left: 0;
        top: 0;
        background: white;
        line-height: 49px;
        text-align: center;
        width: 100%;
        border-bottom: 1px solid #333;
        z-index: 3;
    }
    i{
        position: fixed;
        font-size: 24px;
        left: 10px;
    }
</style>
