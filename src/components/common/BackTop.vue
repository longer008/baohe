<template>
  <div
    class="back-to-top"
    role=""
    data-tooltop="回到顶部"
    @click="back2top"
  >
    <!-- <button class="back-button"> -->
    <i class="io io-arrowup"></i>
    <!-- </button> -->
  </div>
</template>

<script >
export default {
  setup() {
    const back2top = () => {
      window.scrollTo(0, 0)
    }
    return {
      back2top,
    }
  },
}
</script>

<style lang="scss" scoped>
.back-to-top {
  width: 40px;
  height: 40px;
  line-height: 40px;
  position: fixed;
  z-index: 10;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  bottom: 12px;
  right: 12px;
  transition: transform 0.2s ease, -webkit-transform 0.2s ease;
  cursor: pointer;
  i {
      position: absolute;
      color: #707070;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  // .back-button {
  //   width: 40px;
  //   height: 40px;
  //   line-height: 40px;
  //   position: relative;
  //   cursor: pointer;
  //   i {
  //     position: absolute;
  //     color: #707070;
  //     top: 0;
  //     left: 0;
  //   }
  // }
  &:hover {
    background-color: #76839b;
     &::before {
      content: "";
      border: 7px solid;
      position: absolute;
      right: 36px;
      bottom: 13px;
      border-color: transparent transparent transparent #000;
    }
    &::after {
      content: attr(data-tooltop);
      height: 28px;
      line-height: 28px;
      font-size: 14px;
      position: absolute;
      width: 76px;
      right: 50px;
      bottom: 6px;
      color: #fff;
      background-color: #000;
      border-radius: 4px;
      text-align: center;
    }

  }
}
</style>

