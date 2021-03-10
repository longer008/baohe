<template>
  <div class="joke-container">
    <h3>开心一刻</h3>
    <textarea class="joke-text" v-model="text"></textarea>
    <img src="https://api.vvhan.com/api/ip" alt="天气" />
  </div>
</template>


<script lang='ts'>
import { getJokeText } from "@api/joke";
import { reactive, toRefs, onMounted } from "vue";
export default {
  setup() {
    const state = reactive({
      loading: false,
      text: <any>"",
    });
    const getText = async () => {
      state.loading = true;
      let data: any = await getJokeText();
      state.text = data.joke;
    };
    onMounted(() => {
      getText();
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
.joke-container {
  padding: 20px;
}
h3 {
  font-size: 14px;
}
.joke-text {
  width: 87vw;
  min-height: 120px;
  font-size: 16px;
  margin: 0 auto;
}
img {
  width: 87vw;
  height: 227px;
  object-fit: contain;
}
</style>

