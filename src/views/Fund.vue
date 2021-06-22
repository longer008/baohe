<template>
  <div class="fund-container">
    <p>基金</p>
    <trend />
  </div>
</template>

<script lang="ts">
import Trend from '@com/fund/Trend.vue'
export default {
  components: {
    Trend,
  },
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.fund-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  font-size: 14px;
  p {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
