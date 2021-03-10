<template>
  <div class="hot-list">
    <card
      v-for="(item, index) in newList"
      :news-info="item"
      :key="item.id"
      :index="index"
    ></card>
  </div>
</template>

<script lang='ts'>
import { getNewList } from "@api/index";
import { ref, defineComponent, toRefs, reactive, onMounted } from "vue";
import Card from "@com/common/Card.vue";
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
    });
    // 监听滚动
    onMounted(() => {
      // 初始请求数据
      let newList = localStorage.getItem("newList");
      newList ? (state.newList = JSON.parse(newList)) : getList();
    });
    // 获取新闻列表
    const getList = async (params = state.params) => {
      state.loading = true;
      const data = await getNewList(params);
      state.params = params;
      let newList = data.data;
      localStorage.setItem("newList", JSON.stringify(newList));
      state.newList = newList;
      state.loading = false;
    };
    return { ...toRefs(state) };
  },
});
</script>

<style scoped>
</style>

