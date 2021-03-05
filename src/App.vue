<template>
  <div class="main" :class="theme">
    <!-- <Head /> -->
    <div class="container">
      <router-view class="router-view" v-slot="{ Component }">
        <transition :name="transitionName">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <!-- <Foot /> -->
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { toRefs, reactive, computed } from "vue";
// import Home from '@com/home/Home.vue'
export default {
// import HelloWorld from './components/HelloWorld.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
  setup(){
    const state = reactive({
  transitionName: "slide-left",
  theme: "night",
});
return { ...toRefs(state) };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
