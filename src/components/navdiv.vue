<template>
       <div>
            <slot></slot>
        <ul>
            <li v-for="item in navmy" :key="item">111</li>
        </ul>
       </div>
</template>
<script>
export default {
  props: {
    navmy: {
      type: Array,
      default: []
    }
  }
}
</script>
<style lang="scss" scoped>
    div{
        background: yellow;
    }
</style>
