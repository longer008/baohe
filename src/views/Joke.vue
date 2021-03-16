<template>
  <div class="joke-container">
    <h3>开心一刻(点击下面文本复制)</h3>
    <textarea
      ref="jokeText"
      v-model="text"
      class="joke-text"
      @click="handleCopy"
    ></textarea>
    <img src="https://api.vvhan.com/api/ip" alt="天气">
  </div>
</template>


<script lang='ts'>
// import {ElNotification} from 'element-plus'
import { getJokeText } from '@api/joke'
import { reactive, ref, toRefs, onMounted, getCurrentInstance } from 'vue'
export default {
  setup() {
    // 获取当前vue 实例
    const { proxy } = getCurrentInstance() as any
    const state = reactive({
      loading: false,
      text: '',
    })
    // 请求
    const getText = async () => {
      state.loading = true
      let data: any = await getJokeText()
      state.text = data.joke
    }
    onMounted(() => {
      getText()
    })
    const jokeText = ref(null)
    const handleCopy = () => {
      // let text=state.text
      let ele: any = jokeText.value
      ele.select()
      document.execCommand('copy') // 执行浏览器复制命令
      // element notify
      proxy.$notify({
        type: 'success',
        title: '成功',
        message: '复制成功',

      })
      //  ElNotification({
      //   title: "成功",
      //   message: "复制成功",
      //   type: "success",
      // });
    }
    return {
      ...toRefs(state),
      jokeText,
      handleCopy,
    }
  },
}
</script>

<style lang="scss" scoped>
.joke-container {
  padding: 20px;
}
h3 {
  font-size: 14px;
}
textarea {
  border: 0;
  border-radius: 4px;
  resize: none;
  border-right: 1px solid #ebebeb;
}
.joke-text {
  width: 85vw;
  text-indent: 34px;
  // max-width: 100vw;
  min-height: 120px;
  font-size: 16px;
  margin: 0 auto;
  color: #444;
  padding: 8px;
  line-height: 24px;
  user-select: all;
}
img {
  width: 87vw;
  height: 227px;
  object-fit: contain;
}
// .joke-box {
//   width: 98vw;
//   // max-width: 100vw;
//   position: relative;
//   .copy {
//     display: inline-block;
//     background-color: #9fadc7;
//     color: #000;
//     width: 20px;
//     height: 100%;
//     line-height: 20px;
//     font-size: 20px;
//     border-radius: 4px;
//     position: absolute;
//     right: 46px;
//     top: 10px;
//     text-align: justify;
//   }
// }
</style>

