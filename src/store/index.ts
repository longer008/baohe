import { createStore } from 'vuex'

export default createStore({
  state: {
    theme: '',
    isLogin: false,
    user: {},
    isPhone:false,
    keepLiveRoute:[
      'Zhihu',
      'Hello',
      'About',
    ]
  },
  mutations: {
    login(state, user) {
      state.user = user
      state.isLogin = true
    },
    // 修改主题
    toggleTheme(state, theme) {
      console.log('store theme:', theme)
      state.theme = theme
    },
    // 修改设备
    updateDevice(state,value){
      state.isPhone=value
    },
  },
  getters:{
    getDevice(state){
      return state.isPhone
    },
  },
})
