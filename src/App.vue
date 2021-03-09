<template>
  <div class="main" :class="theme">
    <!-- <Head /> -->
    <!-- <div class="container"> -->
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
</template>

<script lang="ts">
// import { useStore } from "vuex";
// import { useRouter } from "vue-router";
import { ref, defineComponent,toRefs, reactive, onMounted } from "vue";
// import BackTop from "@com/common/BackTop.vue";
import BackTop from '@com/common/BackTop.vue'
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

<style>
:root {
  --border-color: #ebebeb;
  --zhihu-color: #9fadc7;
  /* css变量 */
  --bgc:#f6f6f6;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: var(--bgc);
  scroll-behavior: smooth;
}
</style>
