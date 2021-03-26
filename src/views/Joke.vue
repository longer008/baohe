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
    <!-- <ElAlert
      title="测试"
      description="alert测试"
      type="success"
      closeText="关闭"
      v-show="openAlert"

      >ElAlert测试</ElAlert
    > -->

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
  nextTick
} from 'vue'
export default {
  components: {
    // ElAlert,
  },
  setup() {
    // 获取当前vue 实例
    const { proxy } = getCurrentInstance() as any

    const state = reactive({
      loading: false,
      text: '',
      openAlert: false
    })
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
      // 测试Suspense
      setTimeout(() => {
        getText()
      }, 1000)
      // proxy.$message({
      //   message: 'proxy.$message测试',
      //   type: 'success',
      //   duration: 5000,
      // })
      // proxy.$msgbox.prompt({
      //   // action: 'confirm',
      //   message: 'msgbox测试',
      //   title: 'msgbox测试',
      //   type: 'success',
      //   iconClass: '',
      // })

      // proxy.$msgbox.confirm('msgbox测试--message', 'msgbox测试--title', {
      //   confirmButtonText: '明白了',
      //   type: 'success',
      //   iconClass: 'el-icon-info',
      //   callback: action => {
      //     proxy.$message({
      //       type: 'info',
      //       message: `action:${action}`,
      //     })
      //   },
      // })
      state.openAlert = true
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
        message: '复制成功'
      })
      // ElNotification({
      //   title: '成功',
      //   message: '复制成功',
      //   type: 'error',
      // })
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
  width: 76vw;
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
