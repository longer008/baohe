<template>
  <div class="fund-container">
    fund
    <trend></trend>
  </div>
</template>

<script lang='ts'>
import Trend from '@com/fund/Trend.vue'
export default {
  components:{
    Trend
  },
  setup(){
    return{

    }
  },
}
</script>

<style lang="scss" scoped>
.fund-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
}
</style>

