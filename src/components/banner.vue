<template>
    <div class="swiper-container">
                <div class="swiper-wrapper">
                 <slot></slot>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
                <!-- <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div> -->
    </div>
</template>
<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    clickable: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: this.loop,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: this.clickable
      }
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev'
      // }

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
