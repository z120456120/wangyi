<template>
    <div>
        <i class="iconfont icon-buoumaotubiao09" @click="goba()"></i>
    </div>
</template>
<script>
export default {
  methods: {
    goba () {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scoped>
div{
    height: 49px;
    position: fixed;
    left: 0;
    top: 0;
    line-height: 49px;
}
    i{
        position: fixed;
        font-size: 24px;
        left: 10px;
    }
</style>
