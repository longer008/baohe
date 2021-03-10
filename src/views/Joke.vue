<template>
  <div class="joke-text">{{ text }}</div>
  <img src="https://api.vvhan.com/api/ip" alt="韩小韩API" />
  <img src="https://api.vvhan.com/api/view" alt="韩小韩API">
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
.joke-text {
  font-size: 16px;
}
</style>

