import { reactive, defineComponent, onMounted } from 'vue'
import { getIP2 } from '@api/index'
import { weatherForecast } from '@api/mzp'


const Hello = defineComponent({
  setup() {
    const state = reactive({
      ip: '',
      data: [],
      address: '',
      operator: '',
      loading: false,
      weather: {
        address: '',
        forecasts: []
      }
    })

    const getWeatherForecast = async (params = state.data[2]) => {
      state.loading = true
      const data = await weatherForecast(params)
      console.log(data)

      state.weather = data.data
      state.loading = false
    }
    const useGetIP2 = async () => {
      const res = (await getIP2())
      console.log(res)
    }
    onMounted(() => {
      // useGetIP2()
      getWeatherForecast()
    })

    return () => (
      <div class="hello">
        <div>欢迎您</div>
        <h2>天气</h2>
        <p>{state.weather.address}</p>
        <div class="weather_box">
          {state.weather.forecasts.map((item, index) => {
            return (
              <>
                <p>
                  {index == 0
                    ? '今天'
                    : index == 1
                      ? '明天'
                    : index == 2
                    ? '后天'
                    : '大后天'}
                  ：{item.dayWeather}
                </p>
                <p>温度：{item.dayTemp}</p>
                <p>星期：{}</p>
              </>
            )
          })}
        </div>
      </div>
    )
  }
})
export default Hello
