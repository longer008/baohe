<template>
  <div class="footer">
    <div v-if="type==='zhihu'" class="common zhihu">
      没有更多内容
    </div>
    <div v-else-if="type=='weibo'" class="common">
      微博footer
    </div>
    <div v-else class="common">
      other footer
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  name:'Footer',
  props:{
    type:{
      type:String,
      default:''
    }
  },
  setup(props){
    console.log(props.type)
    return{

    }
  },
}
</script>

<style lang='scss' scoped>
.footer{
  width: 100%;
  height: 80px;
  background: var(--bgc);
  display: flex;
  justify-content: center;
}
.common{
  padding: 30px 0;
  color: #999;
}
.zhihu::before,.zhihu::after{
  content: "";
  display: inline-block;
  width: 24px;
  height: 1px;
  margin: 0 10px;
  vertical-align: middle;
  background-color: #d3d3d3;
}
</style>

