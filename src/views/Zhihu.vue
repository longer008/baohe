<template>
  <div class="hot-list">
    <Card
      v-for="(item, index) in newList"
      :key="item.id"
      :news-info="item"
      :index="index"
    />
  </div>
</template>

<script lang="ts">
// import { useStore } from 'vuex'
import { getZhiHuList } from '@api/index'
import {
  defineComponent,
  toRefs,
  reactive,
  onMounted,
} from 'vue'
import Card from '@com/common/Card.vue'
export default defineComponent({
  components: {
    Card,
  },
  setup() {
    const state = reactive({
      // 接口参数
      params: {
        limit: 50,
        desktop: true,
      },
      // 加载loading
      loading: false,
      // 新闻列表
      newList: [],
      // isPhone:false,
    })

    // 监听滚动
    onMounted(() => {
      // 初始请求数据
      getList()
      // let newList = localStorage.getItem("newList");
      // newList ? (state.newList = JSON.parse(newList)) : getList();
    })

    // 获取新闻列表
    const getList = async (params = state.params) => {
      state.loading = true
      const data = await getZhiHuList(params)
      state.params = params
      let newList = data.data
      // localStorage.setItem("newList", JSON.stringify(newList));
      state.newList = newList
      state.loading = false
    }
    return { ...toRefs(state) }
  },
})
</script>

<style lang="scss" scoped>
.hot-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
}
</style>
