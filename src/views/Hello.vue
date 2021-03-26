<template>
  <div class="hello">
    <div>欢迎您</div>
    <!-- <div>您的IP是：{{ ip }}</div>
    <p>归属地：{{ address }}</p>
    <p>运营商：{{ operator }}</p> -->
    <h2>天气</h2>
    <p>{{ weather.address }}</p>
    <div class="weather_box">
      <div v-for="(item, index) in weather.forecasts" :key="index">
        <p>
          {{
            index == 0
              ? '今天'
              : index == 1
                ? '明天'
                : index == 2
                  ? '后天'
                  : '大后天'
          }}：{{ item.dayWeather }}
        </p>
        <p>温度：{{ item.dayTemp }}</p>
        <p>星期：{{}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
interface IPRes {
  ip: string
  data: Array<string>
  ret: string
}
interface Weather {
  date: string
  dayOfWeek: string
  dayTemp: string
  dayWindDirection: string
  dayWindPower: string
  nightTemp: string
  nightWeather: string
  nightWindDirection: string
  nightWindPower: string
}
import { getIP2 } from '@api/index'
import { weatherForecast } from '@api/mzp'
import { reactive, toRefs, defineComponent, onMounted } from 'vue'
export default defineComponent({
  setup() {
    const state = reactive({
      ip: '',
      data: [],
      address: '',
      operator: '',
      loading: false,
      weather: {
        address: '',
        forecasts: [],
      },
    })

    const getWeatherForecast = async (params = state.data[2]) => {
      state.loading = true
      const data = await weatherForecast(params)
      console.log(data)

      state.weather = data.data
      state.loading = false
    }
    // const useGetIP = async () => {
    //   const res: IPRes = (await getIP()) as any

    //   if (res.ret === 'ok') {
    //     state.ip = res.ip
    //     state.data = res.data as any
    //     state.operator = res.data[4] ? res.data[4] : '未知'
    //     for (const item of res.data) {
    //       if (res.data.indexOf(item) > 3) {
    //         return
    //       }
    //       state.address += item
    //     }
    //   }
    // }
    const useGetIP2 = async () => {
      const res = (await getIP2()) as any
      console.log(res)


      // if (res.ret === 'ok') {
      //   state.ip = res.ip
      //   state.data = res.data as any
      //   state.operator = res.data[4] ? res.data[4] : '未知'
      //   for (const item of res.data) {
      //     if (res.data.indexOf(item) > 3) {
      //       return
      //     }
      //     state.address += item
      //   }
      // }
    }
    onMounted(() => {
      useGetIP2()
      getWeatherForecast()
    })
    return {
      ...toRefs(state),
    }
  },
})
</script>

<style scoped>
.hello {
  font-size: 16px;
}
</style>
