<template>
  <div class="trend">
    走势图
    <div class="swiper-container">

    </div>
  </div>
</template>

<script lang='ts'>
import {getTrendImg} from '@api/fund'
import { reactive, toRefs } from 'vue'
export default {
  setup(){
    const state=reactive({
      baseUrl:'http://img1.money.126.net/chart/hs/time/',
      params:{
        size:"210x140",
        fundId:"1399001"
      },
      imgList:[],
    })
    const getList=async ()=>{

      // let data=await getTrendImg()
    }
    return{
      ...toRefs(state)
    }
  },
}
</script>

<style lang="scss" scoped>
  .swiper-container{
    width: 80vw;
    height: 400px;
    background-color: #fff;
  }
</style>

