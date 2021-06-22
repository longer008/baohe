<template>
  <teleport to="#dialog">
    <div class="dialog">
      <div v-if="title" class="diaglog_header">
        <slot name="header">
          <span>{{ title }}</span>
        </slot>
      </div>
      <div class="diaglog_content">
        <slot :item="item"></slot>
      </div>
      <div class="diaglog_footer">
        <slot name="footer"></slot>
      </div>
      <button @click="closeDialog">关闭</button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { reactive, toRefs, watchEffect } from 'vue'
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
  },
  emits: ['closed'],
  setup(props, { emit }) {
    const state = reactive({
      item: {
        age: 18,
        name: 'zhangsan',
      },
    })
    watchEffect(() => {
      if (props.open) {
        document.querySelector('#dialog')?.classList.add('z1')
      }
    })
    const onOpen = () => {
      document.querySelector('#dialog')?.classList.add('z1')
    }
    // 子组件触发，父组件实际执行
    const closeDialog = () => {
      document.querySelector('#dialog')?.classList.remove('z1')
      emit('closed',false)
    }

    return {
      ...toRefs(state),
      onOpen,
      closeDialog,

    }
  },
}
</script>

<style lang="scss" scoped>
.dialog {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  width: 400px;
  height: 400px;
  background-color: #ccc;
  z-index: 10;
  border: 1px solid #000;
  .diaglog_content {
    border: 1px solid chartreuse;
    text-align: center;
    font-size: 16px;
    pointer-events: auto;
  }
}
button {
  font-size: 14px;
  text-align: center;
  border-radius: 4px;
  width: 80px;
  height: 40px;
  background-color: chocolate;
  color: #fff;
}
</style>
