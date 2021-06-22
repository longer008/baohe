<template>
  <div class="hot-list-weibo">
    <div class="tips">实时热点，每分钟更新一次</div>
    <List v-for="(item, index) in newList" :key="index" :item="item" />
  </div>
</template>

<script lang="ts">
import { getWeiBoList } from '@api/index'
import { toRefs, reactive, onMounted, onUnmounted } from 'vue'
import List from '@com/common/List.vue'
export default {
  components: {
    List
  },
  setup() {
    const state = reactive({
      params: {},
      // 加载loading
      loading: false,
      // 新闻列表
      newList: [],
      // 定时器
      timer: 0,
      clicked: false
    })
    // 获取新闻列表
    const getList = async (params = state.params) => {
      if (!state.clicked) {
        state.clicked = true
        state.loading = true
        const data = await getWeiBoList(params)
        let newList = data.data.cards[0].card_group
        localStorage.setItem('weiboList', JSON.stringify(newList))
        state.newList = newList
        state.loading = false
      }
    }

    onMounted(() => {
      // getList()
      // state.timer=setInterval(getList,60000)
      // 初始请求数据
      let newList = localStorage.getItem('weiboList')
      newList ? (state.newList = JSON.parse(newList)) : getList()
    })
    onUnmounted(() => {
      // clearTimeout(state.timer)
    })
    return { ...toRefs(state) }
  }
}
</script>

<style lang="scss" scoped>
.hot-list-weibo {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}
.tips {
  width: 100%;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  padding: 0 15px;
  color: #636363;
  background-color: #f2f2f2;
}
</style>
