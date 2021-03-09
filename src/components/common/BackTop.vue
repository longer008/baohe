<template>
  <div class="back-to-top" data-tooltop="回到顶部" @click="back2top">
    <button>
      <i class="io io-arrowup"></i>
    </button>
  </div>
</template>

<script >
export default {
  setup(props, context) {
    const back2top = () => {
      window.scrollTo(0, 0);
    };
    return {
      back2top,
    };
  },
};
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
  button {
    cursor: pointer;
    i {
      color: #707070;
    }
  }
  &:hover {
    background-color: #76839b;
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
    &::before {
      content: "";
      border: 7px solid;
      position: absolute;
      right: 36px;
      bottom: 13px;
      border-color: transparent transparent transparent #000;
    }
  }
}
</style>

