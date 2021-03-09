<template>
    <div class="zhihu-hot">
      <div class="header">
        <!-- <a href="">知乎</a>
        <a href="">百度</a>
        <a href="">热榜</a> -->
      </div>
      <div class="hot-list">
        <card

          v-for="(item, index) in newList"
           :news-info="item"
          :key="item.id"
          :index="index"
        ></card>

      </div>
    </div>
</template>

<script lang="ts">
import { getNewList } from "@api/index";
import { toRefs, reactive, onMounted,defineComponent } from "vue";
import Card from "@com/common/Card.vue";
export default defineComponent({
  components: {
    card: Card,
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
    // 获取新闻列表

    const getList = async (params = state.params) => {
      state.loading = true;
      const data = await getNewList(params);
      state.params = params;
      //   const list = data.data.map(item => ({ ...item, time: item.time.split(' ').shift() }))
      //   let newList = params.start === 1 ? list : state.newList.concat(list)
      //   localStorage.setItem('newList', JSON.stringify(newList))
      let newList = data.data;
      localStorage.setItem("newList", JSON.stringify(newList));
      state.newList = newList;
      state.loading = false;
    };

    onMounted(() => {
      // 初始请求数据
      let newList = localStorage.getItem("newList");
      newList ? (state.newList = JSON.parse(newList)) : getList();
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.zhihu-hot {
  width: 696px;
  margin: 0 auto;
  border: 1px solid #f0f2f7;

  .header {
    width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    // padding: 20px;
    justify-content: flex-start;
    a {
      display: inline-block;
      align-items: center;
      width: 32px;
      margin: 0 22px;
    }
  }
}
</style>

