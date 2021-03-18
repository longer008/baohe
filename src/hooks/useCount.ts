import { ref, Ref, computed } from 'vue'

type CountResultProps = {
  count: Ref<number>
  multiple: Ref<number>
  increase: (delta?: number) => void
  decrease: (delta?: number) => void
}

export default function useCount(initValue = 1): CountResultProps {
  const count = ref(initValue)

  const increase = (delta?: number): void => {
    if (typeof delta !== 'undefined') {
      count.value += delta
    } else {
      count.value++
    }
  }

  const multiple = computed(() => {
    return count.value * 2
  })

  const decrease = (delta?: number): void => {
    if (typeof delta !== 'undefined') {
      count.value -= delta
    } else {
      count.value--
    }
  }
  return {
    count,
    increase,
    multiple,
    decrease,
  }
}
