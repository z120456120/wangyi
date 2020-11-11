<template>
    <div class="swiper-container" :class="title">
                <div class="swiper-wrapper">
                 <slot></slot>
                </div>
    </div>
</template>
<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
export default {
  props: {
    perview: {
      type: Number
    },
    spaceBetween: {
      type: Number
    },
    title: {
      type: String
    }
  },
  mounted () {
    new Swiper('.' + this.title, {
      slidesPerView: this.perview,
      spaceBetween: this.spaceBetween,
      freeMode: true
    })
  }
}
</script>
<style lang="scss" scoped>
   .swiper-container{
      width: 100%;
    }
    .swiper-slide{
        width: 100%;
    }
    .swiper-slide img{
        width: 100%;
        height: 100%;
    }
</style>
