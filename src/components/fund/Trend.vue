<template>
  <div class="trend">
    走势图
    <div class="swiper-container">
      <img
        v-for="item in fundList"
        :key="item"
        :src="baseUrl+item+'.png'"
        alt=""
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs } from 'vue'
export default {
  setup(){
    const state=reactive({
      baseUrl:'http://img1.money.126.net/chart/hs/time/210x140/',
      fundList:['0000001','1399001','1399300'],
    })

    return{
      ...toRefs(state),
    }
  },
}
</script>

<style lang="scss" scoped>
.trend{
  font-size: 16px;
  font-weight: bold;

  .swiper-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 10px;
    img{
      margin: 20px;
    }
  }
}

</style>

