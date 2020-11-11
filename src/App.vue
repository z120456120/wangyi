<template>
    <div>
      <section>
        <router-view></router-view>
      </section>
      <listdiv v-show="isShow"></listdiv>
    </div>
</template>
<script>
import listdiv from '@/components/listdiv'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      list: [1, 2, 3, 4, 5],
      thk: false,
      thy: false
    }
  },
  components: {
    listdiv
  },
  methods: {
    // foo(){
    //   this.thy  = !this.thy
    // },

  },
  computed: {
    ...mapState(['isShow'])
  }
}
</script>
<style lang="scss">
   html,body{
    height: 100%;
  }
  ul{
    list-style:none;
  }
  section{
    margin-bottom: 50px;
  }
  *{
    margin: 0;
    padding: 0;
  }

</style>
