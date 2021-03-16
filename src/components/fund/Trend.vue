<template>
  <div class="trend">
    走势图
    <div class="swiper-container">
      <img
        v-for="item in fundList"
        :key="item"
        :src="baseUrl+item+'.png'"
        alt=""
      >
    </div>
  </div>
</template>

<script lang='ts'>
// import { getTrendImg } from '@api/fund'
import { reactive, toRefs ,inject } from 'vue'
export default {
  setup(){
    const state=reactive({
      baseUrl:'http://img1.money.126.net/chart/hs/time/210x140/',
      // params:{
      //   size:"210x140",
      //   fundId:"1399001"
      // },
      fundList:['0000001','1399001','1399300'],
    })

    let testInject=inject('provideTest')
    console.log(testInject)

    return{
      ...toRefs(state),
    }
  },
}
</script>

<style lang="scss" scoped>
  .swiper-container{
    width: 80vw;
    height: 200px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
  }
</style>

