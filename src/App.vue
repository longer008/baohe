<template>
  <div class="main" :class="theme">
    <!-- <Head /> -->
    <!-- <div class="container"> -->
    <div class="zhihu-hot">
      <nav class="header">
        <router-link :to="{ path: '/zhihu' }">知乎</router-link>
        <router-link :to="'weibo'">微博</router-link>
        <a href="">热榜</a>
        <router-link :to="'joke'">笑话</router-link>
      </nav>

      <router-view></router-view>
      <back-top v-if="show2top"></back-top>
      <!-- <router-view class="router-view" v-slot="{ Component }">
        <transition :name="transitionName">
          <component :is="Component" />
        </transition>
      </router-view> -->
      <!-- </div> -->
      <!-- <Foot /> -->
    </div>
  </div>
</template>

<script lang="ts">
// import { useStore } from "vuex";
// import { useRouter } from "vue-router";
import { ref, defineComponent, toRefs, reactive, onMounted } from "vue";
import BackTop from "@com/common/BackTop.vue";
export default defineComponent({
  components: {
    BackTop,
  },

  setup() {
    const state = reactive({
      transitionName: "slide-left",
      theme: "night",
      scrollHeight:
        document.documentElement.scrollTop || document.body.scrollTop,
    });
    const show2top = ref(false);
    // 监听滚动
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop >= 1400) {
        show2top.value = true;
      } else {
        show2top.value = false;
      }
    };

    return { ...toRefs(state), show2top };
  },
});
</script>

<style lang="scss" scoped>
:root {
  --border-color: #ebebeb;
  --zhihu-color: #9fadc7;
  /* css变量 */
  --bgc: #f6f6f6;
}
.main{
    background-color: #f6f6f6;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #f6f6f6;
  scroll-behavior: smooth;
}

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
    align-items: center;
    font-size: 16px;
    // border-bottom: 1px solid #f0f2f7;
    margin: 20px auto;
    a {
      display: inline-block;
      align-items: center;
      text-align: center;
      width: 64px;
      margin: 0 22px;
      background-color: #52adfe;
      color: #fff;
    }
  }
}
</style>
