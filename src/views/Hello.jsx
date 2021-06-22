import { reactive, defineComponent, onMounted ,getCurrentInstance } from 'vue'
// import { getIP } from '@api/index'
import { weatherForecast } from '@api/mzp'
import { dayOfWeek } from '@utils/common'
import '../assets/style/hello.scss'

const Hello = defineComponent({
  setup() {
    const state = reactive({
      ip: '',
      data: [],
      address: '',
      operator: '',
      weather: {
        address: '',
        forecasts: []
      }
    })

    const app=getCurrentInstance()?.proxy

    const getWeatherForecast = async (params = state.data[2]) => {
      let loading = app.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      const data = await weatherForecast(params)
      if (data.code===1) {
        state.weather = data.data
        loading.close()
      }else{
        setTimeout(() => {
          loading.close()
        }, 2000)
      }
      console.log(data)
    }
    // const useGetIP2 = async () => {
    //   const res = (await getIP())
    //   console.log(res)
    // }
    onMounted(() => {
      // useGetIP2()
      getWeatherForecast()
    })

    return () => (
      <div class="hello">
        <h1>欢迎您</h1>
        {/* <div>您的IP是：{ state.ip }</div>
        <p>归属地：{ state.address }</p>
        <p>运营商：{ state.operator }</p> */}
        <h2>最近天气</h2>
        <p>地址：{state.weather.address?state.weather.address:'甘肃省 兰州市'}</p>
        <div class="weather-box">
          {state.weather.forecasts.map((item, index) => {
            return (
              <div  className={index==0?'weather-item today':'weather-item'}>
                <p >
                  {index == 0
                    ? '今天'
                    : index == 1
                      ? '明天'
                      : index == 2
                        ? '后天'
                        : '大后天'}
                  ：{item.dayWeather}
                </p>
                <p>夜间：{item.nightWeather}</p>
                <p>白天温度：{item.dayTemp}</p>
                <p>夜间温度：{item.nightTemp}</p>
                <p>风向：{item.dayWindDirection}</p>
                <p>夜间风向：{item.nightWindDirection}</p>
                <p>风力：{item.dayWindPower}</p>
                <p>夜间风力：{item.nightWindPower}</p>
                <p>日期：{item.date}</p>
                <p>星期{dayOfWeek(item.dayOfWeek,'s')}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
})
export default Hello
