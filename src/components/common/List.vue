<template>
  <div class="list-item" :title="item.desc">
    <a class="" :href="item.scheme">
      <span class="img-icon">
        <img :src="item.pic" alt="" srcset="" />
      </span>
      <span class="title-box">
        <span class="main-text">{{ item.desc }}</span>
        <span class="sub-text" v-if="item.desc_extr">{{ item.desc_extr }}</span>
      </span>
      <span class="img-icon" v-if="item.icon">
        <img :src="item.icon" alt="" srcset="" />
      </span>
    </a>
  </div>
</template>

<script lang='ts'>
import { onMounted, defineComponent } from "vue";
export default defineComponent({
  props: {
    key: {
      default: 0,
    },
    item: {
      default: {},
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.list-item {
  width: 696px;
  height: 55px;
  padding: 0 15px;
  border-bottom: 1px solid var(--border-color);
  background-color: #fff;

  a {
    display: flex;
    justify-content: flex-start;

    align-items: center;
    font-size: 20px;
    color: #333;
    height: 55px;
    line-height: 55px;
  }
  .img-icon img {
    display: inline-block;
    width: 30px;
    height: 30px;

    vertical-align: middle;
  }
  .title-box {
    display: inline-block;
    margin: 0 10px;
    .sub-text{
      display: inline-block;
      margin-left: 5px;
      font-size: 14px;
      vertical-align: super;
      color: #939393;
    }
  }
}
@media screen and (max-width: 376px) {
  .list-item {
  width: 100%;
  height: 40px;
  padding: 0 8px;
  border-bottom: 1px solid var(--border-color);
  background-color: #fff;

  a {
    display: flex;
    justify-content: flex-start;
    // align-items: center;
    font-size: 16px;
    color: #333;
    height: 40px;
    line-height: 40px;
  }
  .img-icon img {
    display: inline-block;
    width: 30px;
    height: 30px;

    vertical-align: middle;
  }
  .title-box {
    height: 40px;
    // display: inline-block;
    display: flex;
    align-items: flex-start;
    margin: 0 8px;
    padding: 0;
    .main-text{
      display: inline-block;
      margin: 0;
      max-width: 230px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .sub-text{
      display: inline-block;
      height: 20px;
      line-height: 20px;
      margin-left: 4px;
      font-size: 14px;
      vertical-align: top;
      color: #939393;
    }
  }
}
}
</style>

