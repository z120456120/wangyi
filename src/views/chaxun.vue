<template>
    <div>
        <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @cancel="onCancel"
  />
        <!-- <van-cell-group :title="item.name" v-for="item in $store.state.stolist" :key="item.cinemaId">
        <van-cell :title="item.address" :value="item.lowPrice" />
        </van-cell-group> -->
        <van-cell-group  v-for="item in chaxunji" :key="item.cinemaId">
        <van-cell :title="item.name" :value="item.lowPrice/100+' 起'" :label="item.address" />
        </van-cell-group>
    </div>
</template>
<script>
import Vue from 'vue'
import { Search, Cell, CellGroup } from 'vant'
import { mapActions, mapMutations, mapState } from 'vuex'

Vue.use(Cell).use(CellGroup).use(Search)
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    ...mapMutations(['isShowa', 'isShowb']),
    ...mapActions(['qingstorea']),
    onCancel () {
      this.$router.back()
    }
  },
  mounted () {
    this.isShowb()
    if (this.stolist.length === 0) {
      // 请求数据
      this.qingstorea(this.dingid)
    } else {
      console.log('使用缓存')
    }
    console.log(this.stolist)
  },
  computed: {
    ...mapState(['stolist', 'dingid']),
    chaxunji () {
      if (!this.value) { return [] }
      return this.stolist.filter(item => item.name.toUpperCase().includes(this.value.toUpperCase()))
    }
  },
  destroyed () {
    this.isShowa()
  }

}
</script>
