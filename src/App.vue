<template>
  <div class="main" :class="theme">
    <nav class="header">
      <router-link :to="'weibo'">微博</router-link>
      <router-link :to="{ path: '/zhihu' }">知乎</router-link>
      <router-link :to="'fund'">基金</router-link>
      <router-link :to="'joke'">笑话</router-link>
      <router-link :to="'about'">关于</router-link>
      <router-link :to="'hello'">嗨</router-link>
    </nav>

    <router-view v-slot="{Component}">
      <transition :name="transitionName">
        <!-- 缓存页面 -->
        <keep-alive :include="$store.state.keepLiveRoute">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>

    <ElBacktop />
    <Footer :type="$route.name" />
  </div>
</template>

<script lang="ts">
import Footer from '@com/layout/Footer.vue'
import { ElBacktop } from 'element-plus'
import { ref, defineComponent,getCurrentInstance,toRefs, reactive, onMounted, provide } from 'vue'
export default defineComponent({
  components: {
    ElBacktop,
    Footer,
  },

  setup() {
    const app:any=getCurrentInstance()?.proxy
    const state = reactive({
      transitionName: 'slide-left',
      theme: 'night',
      scrollHeight:
        document.documentElement.scrollTop || document.body.scrollTop,
      // isPhone: <any>false,
      isFirst: true,
    })
    const store = app.$store
    const show2top = ref(false)

    // 监听滚动
    onMounted(() => {
      handleSize()
      window.addEventListener('scroll', handleScroll)
      // 谷歌浏览器onresize事件会执行2次，这里加个标志位控制
      window.addEventListener('resize', handleSize)

    })

    const handleScroll = () => {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop >= 700) {
        show2top.value = true
      } else {
        show2top.value = false
      }
    }

    let isPhone = ref(false)

    // 窗口大小
    const handleSize = () => {
      let width =
        document.documentElement.clientWidth || document.body.clientWidth
      if (state.isFirst) {
        if (width > 375) {
          isPhone.value = false
          store.commit('updateDevice', false)
        } else {
          isPhone.value = true
          store.commit('updateDevice', true)
        }
        state.isFirst = false
        //0.5秒之后将标志位重置（Chrome的window.onresize默认执行两次）
        setTimeout(() => {
          state.isFirst = true
        }, 100)
      }
    }

    // 依赖注入
    provide('isPhone', isPhone)
    const provideTest = '来自app.vue的provide'
    provide('provideTest', provideTest)

    return { ...toRefs(state), show2top }
  },
})
</script>

<style lang="scss">
@import './assets/style/reset.scss';
@import url('./assets/style/normalize.css');

:root {
  --border-color: #ebebeb;
  --zhihu-color: #9fadc7;
  /* css变量 */
  --bgc: #f6f6f6;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f6f6f6;
  scroll-behavior: smooth;
}

.main {
  width: 100%;
  margin: 0 auto;
  border: 1px solid #f0f2f7;

  .header {
    line-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    padding: 20px;
    flex-wrap: wrap;
    a {
      display: inline-block;
      text-align: center;
      width: 64px;
      margin: 0 22px;
      background-color: #52adfe;
      color: #fff;
      margin: 10px;
    }
  }
}
</style>
