<template>
  <div class="joke-container">
    <h3>
      开心一刻(点击下面文本复制)
      <el-button type="success" @click="getText"> 下一条</el-button>
    </h3>
    <Suspense>
      <template #default>
        <textarea
          ref="jokeText"
          v-model="text"
          class="joke-text"
          @click="handleCopy"
        ></textarea>
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
    <img src="https://api.vvhan.com/api/ip" alt="天气" />
  </div>
</template>

<script lang="ts">
import { getJokeText } from '@api/joke'
import {
  reactive,
  ref,
  toRefs,
  onMounted,
  getCurrentInstance,
} from 'vue'
import { useRoute } from 'vue-router'
export default {
  setup() {
    // 获取当前vue 实例
    const { proxy } = getCurrentInstance() as any

    const state = reactive({
      loading: false,
      text: '',
      openAlert: false
    })

    const route=useRoute()

    // 请求
    const getText = async () => {
      // state.loading = true
      let loading = proxy.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      let data: any = await getJokeText()
      if (data.success) {
        loading.close()
        state.text = data.joke
      } else {
        setTimeout(() => {
          loading.close()
        }, 2000)
      }
    }

    onMounted(() => {
      console.log(route.name)
      // 测试Suspense
      setTimeout(() => {
        getText()
      }, 1000)

      state.openAlert = true
    })

    const jokeText = ref(null)
    const handleCopy = () => {
      let ele: any = jokeText.value
      ele.select()
      document.execCommand('copy') // 执行浏览器复制命令
      // element notify
      proxy.$notify({
        type: 'success',
        title: '成功',
        message: '复制成功'
      })
    }
    return {
      ...toRefs(state),
      jokeText,
      handleCopy,
      getText
    }
  }
}
</script>

<style lang="scss" scoped>
.joke-container {
  margin: 0 auto;
  min-height: 77vh;
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
  width: 76vw;
  text-indent: 34px;
  min-height: 170px;
  font-size: 16px;
  margin: 0 auto;
  color: #444;
  padding: 8px;
  line-height: 24px;
  user-select: all;
  margin-top: 10px;
}
img {
  width: 87vw;
  height: 227px;
  object-fit: contain;
  margin-top: 100px;
}
</style>
