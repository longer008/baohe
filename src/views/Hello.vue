<template>
  <div>欢迎您</div>
  <div>您的IP是：{{ ip }}</div>
  <p>归属地：{{ address }}</p>
  <p>运营商：{{ operator }}</p>
  <h2>天气</h2>
</template>

<script lang="ts">
import request from '@api/axios'
import { weather } from '@api/'
import { reactive, ref, toRefs, defineComponent, onMounted } from 'vue'
export default defineComponent({
  setup() {
    const state = reactive({
      ip: '',
      data: [],
      address: '',
      operator: '',
      loading: false,
      weather: {},
    })

    const getWeather = async (params = state.data[2]) => {
      state.loading = true
      const data = await weather(params)
      state.weather = data
      state.loading = false
    }
    onMounted(() => {
      request({ url: 'https://2021.ipchaxun.com/', method: 'get' })
        .then(res => {
          console.log(res)

          if (res.ret === 'ok') {
            state.ip = res.ip
            state.data = res.data
            state.operator = res.data[4] ? res.data[4] : '未知'
            for (const item of res.data) {
              if (res.data.indexOf(item) > 3) {
                return
              }
              state.address += item
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
      getWeather()
    })
    return {
      ...toRefs(state),
    }
  },
})
</script>

<style scoped></style>
